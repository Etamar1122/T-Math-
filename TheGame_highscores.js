let highScoresList;
const highScores = JSON.parse(localStorage.getItem("highScores")) || []


// highScoresList
get_users().then((res) => res.slice(0,10).sort((a,b) => b.score - a.score).map(score => {
    console.log(highScoresList)
    $('#highScoresList').append(`<li class="high-score">${score.firstName} ${score.lastName} - ${score.score}</li>`);
}))