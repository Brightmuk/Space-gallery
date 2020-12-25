var asteroid = $('.one');

$(document).ready(function(){
    $("button").click(function(){
        asteroid.animate({
            left: '250px'
        });
        console.log(asteroid.position());
    })
})