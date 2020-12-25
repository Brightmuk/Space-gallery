var asteroid = $('.one');

$(document).ready(function(){
    typeWriter()
    $("button").click(function(){
        asteroid.animate({
            left: '250px'
        });
        console.log(asteroid.position());
    })
})

//type the intro
var i = 0;
var txt = 'Are you a designer and you would like your work to be seen?';
var speed = 60;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//get the current year for copyright mark
var date = new Date();
var year = date.getFullYear();
document.getElementById('year').innerHTML=year;
