
const registration_form = $("#registration_form");
registration_form.on('submit', (e) =>{
    e.preventDefault();
    console.log("works fine2")
    try{
        register_user()
    }catch(error){
        console.log(error);
    }
    
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
            .then(res =>res.body)
        } catch (error){
            alert(JSON.parse(error.responseText).message);
        }
    }
