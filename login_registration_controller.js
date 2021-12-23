

const registration_form = $("#registration_form");
const login_form = $("#login_form");

registration_form.on('submit', (e) =>{
    e.preventDefault();
    console.log("works fine2")
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
        .then(res => {console.log(res)})
    } catch (error){
        alert(JSON.parse(error.responseText).message);
    }
}


async function user_authentication(){
    if (Cookies.get('user-token') == null){
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
            .then(res => { Cookies.set('user-token',res.token) })
        } catch (error){ 
            alert(JSON.parse(error.responseText).message);
        }
    }else{
        alert('user is allready logged in!')
    }
}
