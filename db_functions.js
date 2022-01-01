async function get_users(){
    try{
        const result = await $.ajax({
            url:'http://localhost:4000/users/',
            method: "GET",
             headers: {
                "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0MDY5MDMxNywiZXhwIjoxNjQxMjk1MTE3fQ.1gIf9c_Yw2Szkh3coNyhJSEuZ_d8HzBdjsDpizGgUHc"
             },
            contentType:'application/json',
        }).then((res)=>{ return res});
        return result
    } catch (error){ 
        alert(JSON.parse(error.responseText).message);
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
        alert(JSON.parse(error.responseText).message);
    }
}

async function get_questions(){
    try{
        const result = await $.ajax({
            url:'http://localhost:5500/question/',
            method: "GET",
            contentType:'application/json',
        }).then((res)=>{return res});
        console.log('result',result)
        return result;
    } catch (error){ 
        alert(JSON.parse(error.responseText).message);
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
        alert(JSON.parse(error.responseText).message);
    }
}
