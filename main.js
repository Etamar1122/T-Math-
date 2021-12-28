
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
    if(window.location.pathnmae = '/forTeacher.html/'){
        if(await  get_user_field('role') == 'student'){
            window.location.replace('/index.html');
        }
    }
})


