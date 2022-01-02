const username = get_user_field('first_name').then((res =>{return res}));
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5
finalScore.innerText = mostRecentScore
if(!is_logged_in()){
    console.log('checl')
    saveScoreBtn.disabled = true;
}else {
    get_user_field('first_name').then((username)=>$('#username').append(`${username}`));
};

saveHighScore =async e => {
    e.preventDefault()
    const user_score = await get_user_field('score').then( score => {return +score + +mostRecentScore });
    const user_id = Cookies.get('user-id');
    console.log(user_id);
    console.log('user_score',user_score);
    data = JSON.stringify({
        user_id,
        user_score,
    })
    

    
    highScores.sort((a,b) => {
        return b.score - a.score
    })
    
    highScores.splice(5)
    
    localStorage.setItem('highScores', JSON.stringify(highScores))
    update_user_score(data).then(()=>{
        window.location.assign('/TheGame_highscores.html')
    })
    

    
}