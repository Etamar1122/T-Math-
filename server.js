const express = require('express');
const server = express();
const path = require('path');
const Sequelize  = require('sequelize');
const bcrypt = require('bcrypt')

const sequelize = new Sequelize('mysql://root:@localhost/t-math')

server.use(express.static(path.join(__dirname,'/')));
server.use(express.static(path.join(__dirname,'node_modules')));


server.use(express.json())
server.use(express.urlencoded({ extended: false }))

const users_db = 'users'

// check documentation for user initiation.
server.post('/api/register', async (req, res) => {
    const {email, password, first_name, last_name} = req.body
    const encryptedpass =await bcrypt.hash(password,10);
  
    try{  
        const existsallready = await sequelize
        .query(`SELECT * FROM users WHERE 'email' LIKE 'asdfasdf@a2sdfasdf.com'`)
        console.log(existsallready)
        if(await existsallready[0] == ''){
            const result = await sequelize
            .query(`INSERT INTO ${users_db} VALUES(null, '${email}' , '${encryptedpass}'  , '${first_name}' ,'${last_name}')`)
            console.log(result);
            return res.json({status: 'success', user_id: result[0]});
        }else{
            return res.json({ status: 'error_email_exists' })
        }

    }catch (error){
        console.log(error)
        return res.json({ status: 'error' })
    }
})

// Bcrypt decrypt for user login user for later.
// "password"; usually stored in the database in the user's row.
// var stored_hash = '$2a$10$vxliJ./aXotlnxS9HaJoXeeASt48.ddU7sHNOpXC/cLhgzJGdASCe'
// bcrypt.compare(guess, stored_hash, function(err, res) {

// });

const port = 5500
server.listen(port, function(){
    console.log(`Running server on port ${port}`)
})