const express = require('express');
const res = require('express/lib/response');
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
server.post('/update_score', update_user_score);

// check documentation for user initiation.
server.post('/question/add_question', async (req, res) => {
    const {question, choice1, choice2, choice3, choice4, answer} = req.body
  
    try{  
        const result = await sequelize
        .query(`INSERT INTO ${questions_DB} VALUES(null, '${question}' , '${choice1}'  , '${choice2}' ,'${choice3}','${choice4}','${answer}')`)
        console.log(result);
        return res.json({status: 'success', question_id: result[0], question: question});
    }
    catch (error){
        console.log(error)
        return res.json({ status: 'error' })
    }
})


async function get_questions(request, response){
    try{
        const result = await sequelize
        .query(`SELECT * FROM ${questions_DB}`).then(res=>{return res})
        response.json(result)
    }catch (error){
        console.log(error)
        return res.json({ status: 'error' })
    }
}

async function post_feedback(){
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

async function update_user_score(req,res){
    const {user_id, user_score} = req.body
    console.log('id',user_id)
    try{  
        const result = await sequelize
        .query(`UPDATE users SET score = ${user_score} WHERE id = ${user_id};`)
        console.log(result);
        return res.json({status: 'success'});
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