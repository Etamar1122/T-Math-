
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


$('#selector').on("change", function(){
    var value = $(this).val()
    $('#your_choise').replaceWith(`<p id='your_choise'>הבחירה שלך היא: ${value}</p>`)
})



