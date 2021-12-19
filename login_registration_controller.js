
const registration_form = $("#registration_form");
registration_form.on('submit', (e) =>{
    e.preventDefault();
    console.log("works fine2")
    register_user()
})

async function register_user(){
    const first_name = $('#first_name').val();
    const last_name = $('#last_name').val();
    const email = $('#email').val();
    const password = ($('#password').val())
    console.log("first_name", first_name)
    console.log("works fine")

    const result = await fetch('http://localhost:5500/api/register', {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            password
        })
    }).then(res => res)
    console.log(result)
}
