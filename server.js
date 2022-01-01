const express = require('express');
const server = express();
const path = require('path');
const Sequelize  = require('sequelize');
// const bcrypt = require('bcrypt')

const sequelize = new Sequelize('mysql://root:@localhost/t-math')

server.use(express.static(path.join(__dirname,'/')));
server.use(express.static(path.join(__dirname,'node_modules')));


server.use(express.json())
server.use(express.urlencoded({ extended: false }))

const questions_DB = 'questions_DB'
const feedback_db = 'feedback'
server.get('/question',get_questions);
server.post('/feedbacks', post_feedback);

// check documentation for user initiation.
server.post('/question/add_question', async (req, res) => {
    const {question, answer, mock1, mock2, mock3, hint} = req.body
  
    try{  
        const result = await sequelize
        .query(`INSERT INTO ${questions_DB} VALUES(null, '${question}' , '${answer}'  , '${mock1}' ,'${mock2}','${mock3}','${hint}')`)
        console.log(result);
        return res.json({status: 'success', question_id: result[0], question: question});
    }
    catch (error){
        console.log(error)
        return res.json({ status: 'error' })
    }
})


async function get_questions(){
    try{
        const result = await sequelize
        .query(`SELECT * FROM ${questions_DB}`)
        .then((res)=>{return res});
        return result;
    }catch (error){
        console.log(error)
        return res.json({ status: 'error' })
    }
}

async function post_feedback(req,res){
    const {email, first_name, last_name, feedback} = req.body
  
    try{  
        const result = await sequelize
        .query(`INSERT INTO ${feedback_db} VALUES(null, '${email}' , '${first_name}'  , '${last_name}' ,'${feedback}')`)
        console.log(result);
        return res.json({status: 'success', feedback_id: result[0]});
    }
    catch (error){
        console.log(error)
        return res.json({ status: 'error', error: error })
    }
}

const port = 5500
server.listen(port, function(){
    console.log(`Running server on port ${port}`)
})