//show loader on page load
setTimeout(function(){
    var cookie=document.cookie;
    if(navigator.cookieEnabled&&cookie.charAt(9)=='t'){
        $('.hero').toggleClass('hero-discover');
        $('.discover-content').css('display','block');
        setTimeout(function(){
            $('.hero').toggleClass('hero-discover-height');
            document.cookie = "discover=true"
          },400); 
    }
        $('.loader-bg').fadeToggle();
  },1500);

//discover button
$('.discover').click(function(){
    $('.hero').toggleClass('hero-discover');
    $('.discover-content').css('display','block');
    setTimeout(function(){
        $('.hero').toggleClass('hero-discover-height');
        document.cookie = "discover=true"
      },400);  

})



//get the current year for copyright mark
var date = new Date();
var year = date.getFullYear();
document.getElementById('year').innerHTML=year;
