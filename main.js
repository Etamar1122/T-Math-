
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

// check if user isnt a teacher then redirects.
$(window).on('load',async ()=>{
    var result = await get_user_field('role');
    console.log('user-role', result)
    // if(window.location.pathnmae == '/forTeacher.html/'){
        if(result == 'teacher'){
            $('ul.navbar-nav.ms-auto').append(`<li class="nav-item">
            <a href="forTeacher.html" class="nav-link">אזור צוות</a>
            </li>`);
        }
        // if(result == 'student'){
        //     window.location.replace('/index.html');
        // }
    // }
})


// submit question to the db
$('#new_question_form').on('submit', (e)=>{
    e.preventDefault();
    const question = $('#question').val();
    const choice1 = $('#right_answer').val();
    const choice2 = $('#answer2').val();
    const choice3 = $('#answer3').val()
    const choice4 = $('#answer4').val()
    const answer = $('#clue').val();
    data = JSON.stringify({
        question,
        choice1,
        choice2,
        choice3,
        choice4,
        answer
    })
    add_Question(data).then(res=>alert(res));
    $('#new_question_form')[0].reset();
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

// Delete question from db function.
$(document).on("click", ".delete_question", function(){
    const that = $(this).closest(".row-questions")
    let ID = $(this).closest(".row-questions").data().question_id;
    data = JSON.stringify({ID});
    delete_question(data).then((res)=> {if(res.status == 'success'){ that.fadeOut()}});
    
})



$('#get_questions').click(function(){
    $("#questions_body").empty();
    $('#questions_table').css('display', 'block')
    get_questions().then( res => res[0].forEach((element)=> {$("#questions_body").append(`
    <tr data-question_id="${element.ID}" class="row-questions">
        <th scope="row" class="ID">${element.ID}</th>    
        <td>
            <td>${element.question}</td>
        </td>
        <td>
        <td>
            <td>${element.choice1}</td>
        </td>
        <td>
        </td>
            <td>${element.choice2}</td>
        <td>
        </td>
            <td>${element.choice3}</td>
        <td>
        </td>
            <td>${element.choice4}</td>
        <td>
        </td>
            <td>${element.answer}</td>
        <td>
        </td>
            <td style='cursor:pointer;' class="delete_question">&times</td>
    </tr>
    `
    );          
    }));
})

$(window).ready(()=>{
    if(get_user_field('role') == 'teacher'){
        console.log(get_user_field('role'))
        $('ul.navbar-nav.ms-auto').append(`<li class="nav-item">
        <a href="forTeacher.html" class="nav-link">אזור צוות</a>
        </li>`);
    }
})


$('#edit_question').click(function(){
    $("#edit_wrapper").fadeIn();
})

$('#edit_preview').click(function(){
    if(!$('#question_edit_id').val()){
        alert('יש למלא את שדה מספר השאלה על מנת להמשיך');
        return;
    }
    const question_id = $("#question_edit_id").val();
    const ID = JSON.stringify({question_id});
    get_question_by_id(ID).then(async (result) =>{ 
        console.log('results', result)
        const res = await result[0];
        console.log(res);
        if(result.status != 'error'){
            $('#actual_edit_question').css('display','block');
            console.log(ID.ID);
            setTimeout(()=>{
                $("#question_id").val(question_id) 
                $("#question_edit").val(res[0].question) 
                $("#right_answer_edit").val(res[0].choice1) 
                $("#answer2_edit").val(res[0].choice2) 
                $("#answer3_edit").val(res[0].choice3) 
                $("#answer4_edit").val(res[0].choice4) 
                $("#clue_edit").val(res[0].answer) 
            }, 300);
        }
    });
})


$('#edit_question_form').on('submit', (e)=>{
    e.preventDefault();
    const question_id = $('#question_id').val();
    const question = $('#question_edit').val();
    const choice1 = $('#right_answer_edit').val();
    const choice2 = $('#answer2_edit').val();
    const choice3 = $('#answer3_edit').val();
    const choice4 = $('#answer4_edit').val()
    const answer = $('#clue_edit').val();
    data = JSON.stringify({
        question_id,
        question,
        choice1,
        choice2,
        choice3,
        choice4,
        answer
    })
    update_question(data);
    $('#edit_question_form')[0].reset();
})
