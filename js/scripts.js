//show loader on page load
setTimeout(function(){
    var cookie=document.cookie;
    if(navigator.cookieEnabled&&cookie.charAt(9)=='t'){
        $('.hero').toggleClass('hero-discover');
        $('.discover-section').css('display','block');
        setTimeout(function(){
            $('.hero').toggleClass('hero-discover-height');
            document.cookie = "discover=true"
          },400); 
    }
        $('.loader-bg').fadeToggle();



  },1500);
 
//play audio
var audio = document.createElement('audio');
audio.setAttribute('src', 'audio/space.mp3');

window.onload=function(){
    audio.play()
}
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

//get the current year for copyright mark
var date = new Date();
var year = date.getFullYear();
document.getElementById('year').innerHTML=year;
