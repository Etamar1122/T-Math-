
$('#home').click(function(){
    console.log('check')
   window.location.replace('index.html')
})
$('#about').click(function(){
    console.log('check')
    window.location.replace('discription.html')
})
$('#to_the_game').click(function(){
    console.log('check')
    window.location.replace('Chooselvl.html')
})
$('#fast_start').click(function(){
    console.log('check')
    window.location.replace('Chooselvl.html')
})
$('#fast_start').click(function(){
    console.log('check')
    window.location.replace('Chooselvl.html')
})

$('#prize-shop').click(function(){
    console.log('check')
    window.location.replace('login.html')
})

$('#New_question_button').click(function(){
    console.log('check')
    $('#new_question_form').css('display', 'block')
})

// user hello and disconnect message.
$(window).on('load',async ()=>{
    const username = get_user_field('user_name')
    const str = `hello ${username}`
    if (is_logged_in()){
        $('#user_info').append(str)
    }
})

// check if user isnt a steacher then redirects.
$(window).on('load',async ()=>{
    var result = await get_user_field('role');
    console.log('user-role', result)
    if(window.location.pathnmae == '/forTeacher.html/'){
        if(await  get_user_field('role') == 'student'){
            window.location.replace('/index.html');
        }
    }
})


// submit question to the db
$('#new_question_form').on('submit', (e)=>{
    e.preventDefault();
    const question = $('#question').val();
    const right_answer = $('#right_answer').val();
    const answer2 = $('#answer2').val();
    const answer3 = $('#answer3').val()
    const answer4 = $('#answer4').val()
    const clue = $('#clue').val();
    data = JSON.stringify({
        question,
        right_answer,
        answer2,
        answer3,
        answer4,
        clue
    })
    add_Question(data);
})

$('#registration_form').on("submit",(e)=>{
    e.preventDefault();
    register_user();
})

$('#students_feedback').on("submit",(e)=>{
    e.preventDefault();
    const email = $('#email').val();
    const first_name = $('#first_name').val();
    const last_name = $('#last_name').val();
    const feedback = $('#feedback').val()
    
    data = JSON.stringify({
        email,
        first_name,
        last_name,
        feedback
    })
    
    add_feedback(data);
    $('#students_feedback').trigger('reset');

})