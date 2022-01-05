

async function get_users(){
    token = Cookies.get('user-token')
    try{
        const result = await $.ajax({
            url:'http://localhost:4000/users/',
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + token
            },
            contentType:'application/json',
        }).then((res)=>{ return res});
        return result
    } catch (error){ 
        console.log(error.responseText);
    }
}


async function add_Question(data){
    try{
        const result = await $.ajax({
            url:'http://localhost:5500/question/add_question',
            method: "POST",
            contentType:'application/json',
            data: data
        }).then((res)=>{ return res});
        console.log(result);
        return result
    } catch (error){ 
        return error.status;
    }
}

async function get_questions(){
    try{
        console.log('ready')
        const result = await $.ajax({
            url:'http://localhost:5500/question/',
            method: "GET",
            contentType:'application/json',
            success: (res) => {
                return res;
            }
        })
        console.log('result',result)
        return result;
    } catch (error){ 
        console.log('yaaa')
        return error.status;
    } // TODO fix the array.
}

async function add_feedback(data){
    try{
        const result = await $.ajax({
            url:'http://localhost:5500/feedbacks/',
            method: "POST",
            contentType:'application/json',
            data: data,
            success: function(){
                alert('Feedback sent')
            }
        }).then((res)=>{ return res});
        console.log(result);
        return result
    } catch (error){ 
        console.log(error.status);
    }
}

async function update_user_score(data){
    try{
        console.log('data',data);
        const result = await $.ajax({
            url:'http://localhost:5500/update_score',
            method: "POST",
            contentType:'application/json',
            data: data
        }).then((res)=>{ return res});
        console.log(result);
        return result
    } catch (error){ 
        return error.status;
    }
}

async function delete_user(id){
    console.log('ID1', id)
    try{
        const result = await $.ajax({
            url:`http://localhost:4000/users/${id}`,
            headers: {
                "Authorization" : `Bearer ${Cookies.get('user-token')}`
            },
            method: "DELETE"
        }).then((res)=>{ return res});
        console.log(result);
        return result
    } catch (error){ 
        return error.status    }
}

async function delete_question(question_id){
    try{
        console.log('data',data);
        const result = await $.ajax({
            url:'http://localhost:5500/question/delete_questions',
            method: "POST",
            contentType:'application/json',
            data: question_id
        }).then((res)=>{ return res});
        console.log(result);
        return result
    } catch (error){ 
        return error.status    }
}

async function get_question_by_id(question_id){
    try{
        console.log('ID',question_id);
        const result = await $.ajax({
            url:'http://localhost:5500/question/get_by_id',
            method: "POST",
            contentType:'application/json',
            data: question_id
        }).then((res)=>{ return res});
        console.log(result);
        return result
    } catch (error){ 
        return error.status    }
}


async function update_question(data){
    try{
        console.log('data',data);
        const result = await $.ajax({
            url:'http://localhost:5500/question/update_question',
            method: "POST",
            contentType:'application/json',
            data: data
        }).then((res)=>{ return res});
        console.log(result);
        return result
    } catch (error){ 
        return error.status    }
}

async function get_user_by_id(id){
    console.log('ID1', id)
    token = Cookies.get('user-token')
    try{
        const result = await $.ajax({
            url:`http://localhost:4000/users/${id}`,
            headers: {
                "Authorization" : "Bearer " + token
            },
            method: "GET"
        }).then((res)=>{ return res});
        console.log(result);
        return result
    } catch (error){ 
        return error.status    }
}

async function update_user(data){
    const id = data[7]+data[8];
    try{
        const result = await $.ajax({
            url:`http://localhost:4000/users/${id}`,
            headers: {
                "Authorization" : `Bearer ${Cookies.get('user-token')}`
            },
            method: "PUT",
            data: data
        }).then((res)=>{ return res});
        console.log('update_user',result);
        return result
    } catch (error){ 
        return error.status
    }
} 

module.exports = { delete_user ,get_users, add_Question, get_questions, add_feedback, update_user_score, update_user, get_user_by_id, update_question, get_question_by_id, delete_question  }