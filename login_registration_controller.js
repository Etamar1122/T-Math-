

const registration_form = $("#registration_form");
const login_form = $("#login_form");
// TODO:
// add get_currect_user func to find a user depends on its cookie key.
//


registration_form.on('submit', (e) =>{
    e.preventDefault();
    register_user();
    
})

login_form.on('submit', (e) =>{
    e.preventDefault();
    user_authentication();  
})

async function register_user(){
    const firstName = $('#first_name').val();
    const lastName = $('#last_name').val();
    const email = $('#email').val();
    const password = ($('#password').val())
    const role = "student";
    const score = '0';
    try{
        const result = await $.ajax({
            url:'http://localhost:4000/users/register',
            method: "POST",
            contentType:'application/json',
            data: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                role,
                score
            })
        })
        .then(res => {JSON.parse(res.responseText).message})
    } catch (error){
        alert(JSON.parse(error.responseText).message);
    }
}


async function user_authentication(){
    if (Cookies.get('user-id') == null){
        const email = $('#email_login').val();
        const password = ($('#password_login').val())
        try{
            const result = await $.ajax({
                url:'http://localhost:4000/users/authenticate',
                method: "POST",
                contentType:'application/json',
                data: JSON.stringify({
                    email,
                    password,
                })
            })
            .then(res => { 
                    Cookies.set('user-id',res.id);
                    alert('Login successfully.');
                    window.location.replace('/index.html')
                })
        } catch (error){ 
            alert(JSON.parse(error.responseText).message);
        }
    }else{
        alert('user is allready logged in!')
    }
}
function user_fields_dict(field_name, res){
    if(field_name == 'role'){
        return res.role;
    }else if(field_name == 'first_name'){
        return res.firstName;
    }else if(field_name == 'last_name'){
        return res.lastName;
    }else if(field_name == 'email'){
        return res.email;
    }else if(field_name == 'score'){
        return res.score;
    }
}

async function get_user_field(field_name){
    if (Cookies.get('user-id') != null){
        try{
            const result = await $.ajax({
                url:'http://localhost:4000/users/'+Cookies.get('user-id'),
                method: "GET",
                 headers: {
                    "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0MDY5MDMxNywiZXhwIjoxNjQxMjk1MTE3fQ.1gIf9c_Yw2Szkh3coNyhJSEuZ_d8HzBdjsDpizGgUHc"
                 },
                contentType:'application/json',
            }).then((res)=>{ return user_fields_dict(field_name, res)});
            return result
        } catch (error){ 
            alert(JSON.parse(error.responseText).message);
        }
    }else{
        alert('user is not logged in!')
    }
}

function is_logged_in(){
    if(Cookies.get('user-id')){
        return true;
    }
    return false;
}

async function get_users(){
        try{
            const result = await $.ajax({
                url:'http://localhost:4000/users/',
                method: "GET",
                 headers: {
                    "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0MDY5MDMxNywiZXhwIjoxNjQxMjk1MTE3fQ.1gIf9c_Yw2Szkh3coNyhJSEuZ_d8HzBdjsDpizGgUHc"
                 },
                contentType:'application/json',
            }).then((res)=>{ return  res});
            return result
        } catch (error){ 
            alert(JSON.parse(error.responseText).message);
        }
}
 // TODO get_users functio for all db user for tables.
 // TODO db for questions. and db functions.
 
