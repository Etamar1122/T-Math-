
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
    const username = await get_user_field('user_name')
    //const username = await get_user_field('user_name')
    if (is_logged_in()){
        $('ul.navbar-nav.ms-auto').append(`<li class="nav-item">
            <p class = "nav-link">שלום, ${username}
            <a href="forTeacher.html">התנתק</a>
            </p>
        </li>`);
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
    $.confirm({
        title: 'למחוק את השאלה?',
        content: 'בטוחים שאתם רוצים למחוק את השאלה?',
        buttons: {
            confirm:{
            text:'אישור',
            action: function () {
                delete_question(data).then((res)=> {if(res.status == 'success'){ that.fadeOut()}});
                }
            },
            cancel:{
            text:'ביטול',
            action: function () {
                return;
                }
            },
        }
    });
    // delete_question(data).then((res)=> {if(res.status == 'success'){ that.fadeOut()}});
    
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




$(document).on('click',".buy_btn", async function() {
    const current_score = await get_user_field('score');
    let price = $(this).data().price
    console.log(current_score)
    const user_id = Cookies.get('user-id');
    
    if( current_score < price){
        alert('אין ברשותך מספיק נק על מנת לרכוש את הפרס');
    }else{
        let user_score = current_score - price;
        console.log(user_score)
        data = JSON.stringify({
            user_id,
            user_score,
        });
        update_user_score(data).then(async (res)=>{
            let new_score = await get_user_field('score');
            if(res.status == 'success')
            alert(` הפרס נרכש בהצלחה! נשארו לך ${new_score} נקודות`)
        })
        
        
    }
})

async function init_result_table(){
    var table_id = 0 
    await get_users().then((users_db)=>{
        console.log('users_db', users_db)
        $('#results_table_body').empty()
        users_db.sort((a,b) => b.score - a.score).slice(0,10).forEach((that)=>{
            table_id++;
            $('table #results_table_body').append(`
            <tr>
                <th scope="row">${table_id}</th>
                <td>${that.firstName}</td>
                <td>${that.lastName}</td>
                <td>${that.score}</td>
            </tr> `)
        })
    })
}

if (window.location.pathname == '/ResaultsTable.html')
{
    init_result_table();
}


$('#get_users').click(function(){
    $("#users_table_body").empty();
    $('#users_table').css('display', 'block')
    get_users().then( (res) =>{ console.log(res)
        res.forEach((element)=> {$("#users_table_body").append(`
        <tr data-user_id="${element.id}" class="row-users">
        <th scope="row" class="ID">${element.id}</th>    
        <td>
        <td>${element.firstName}</td>
        </td>
        <td>
        <td>
        <td>${element.lastName}</td>
        </td>
        <td>
        </td>
        <td>${element.email}</td>
        <td>
        </td>
        <td>${element.role}</td>
        <td>
        </td>
        <td style='cursor:pointer;' class="delete_user">&times</td>
        <td>
        </td>
        </tr>
        `
        );          
    })});
})


$(document).on("click", ".delete_user", function(){
    const that = $(this).closest(".row-users")
    let ID = that.data().user_id;
    $.confirm({
        title: 'למחוק את המשתמש?',
        content: 'בטוחים שאתם רוצים למחוק את המשתמש?',
        buttons: {
            confirm:{
            text:'אישור',
            action: function () {
                delete_user(ID).then((res)=> { if(res.status.includes('success')){ console.log(res.status); that.fadeOut()}});
                }
            },
            cancel:{
            text:'ביטול',
            action: function () {
                return;
                }
            },
        }
    });
    // delete_question(data).then((res)=> {if(res.status == 'success'){ that.fadeOut()}});
})
