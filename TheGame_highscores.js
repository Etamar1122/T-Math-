const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

// highScoresList
get_users().then((res) =>  res.map(score => {
    console.log(score)
    $('#highScoresList').append(`<li class="high-score">${score.firstName} - ${score.score}</li>`);
}).join(""))