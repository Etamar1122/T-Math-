

const registration_form = $("#registration_form");
const login_form = $("#login_form");
// TODO:
// add get_currect_user func to find a user depends on its cookie key.
//

async function get_user(user_token){

}

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
                })
        } catch (error){ 
            alert(JSON.parse(error.responseText).message);
        }
    }else{
        alert('user is allready logged in!')
    }
}
async function get_user_role(){
    if (Cookies.get('user-id') != null){

        try{
            const result = await $.ajax({
                url:'http://localhost:4000/users/'+Cookies.get('user-id'),
                method: "GET",
                 headers: {
                    "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0MDY5MDMxNywiZXhwIjoxNjQxMjk1MTE3fQ.1gIf9c_Yw2Szkh3coNyhJSEuZ_d8HzBdjsDpizGgUHc"
                 },
                contentType:'application/json',
                   success: function(res){console.log (res.role)}
            })
        } catch (error){ 
            alert(JSON.parse(error.responseText).message);
        }
    }else{
        alert('user is allready logged in!')
    }
}

function is_logged_in(){
    if(Cookies.get('user-id')){
        return true;
    }
    return false;
}