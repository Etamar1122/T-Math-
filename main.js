
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

$(window).on('load',async ()=>{
    const username = get_user_field('user_name')
    const str = `hello ${username}`
    if (is_logged_in()){
        $('#user_info').append(str)
    }
})


$(window).on('load',async ()=>{
    var result = await get_user_field('role');
    console.log('user-role', result)
    if(window.location.pathnmae == '/forTeacher.html/'){
        if(await  get_user_field('role') == 'student'){
            window.location.replace('/index.html');
        }
    }
})

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

