// alert(test)



// ----- スタート画面 ----- 
$(window).on('load',function(){
    $(".js-start").fadeOut(4000);
    $(".js-jyanken").delay(4500).fadeIn(3000);
})



// ----- じゃんけん画面 -----


// ----- グーの場合 ----- 
$(".js-goo").click(function(){
    // $(".js-goo").css("width","180px");
    // $(".js-paa").css("color","red");
    // $(".a").fadeOut(2000);
    // $(".a").fadeIn(2000);


const random = Math.ceil(Math.random()*3);
console.log(random);

if(random===1){
    $(".js-you").text("グー");  
    $(".js-result1").html('<img src="img/goo.jpeg">').fadeOut(3000);
    $(".js-result2").html('<img src="img/draw.jpg">').delay(3500).fadeIn(3000).fadeOut(3000);
    $(".js-result3").html('<img src="img/again.jpg">').delay(9500).fadeIn(1000);
}
else if(random===2){
    $(".js-you").text("チョキ");
    $(".js-result1").html('<img src="img/choki.jpeg">').fadeOut(3000);
    $(".js-result2").html('<img src="img/win.jpg">').delay(3500).fadeIn(3000).fadeOut(3000);
    $(".js-result3").html('<img src="img/again.jpg">').delay(9500).fadeIn(1000);
}
else if(random===3){
    $(".js-you").text("パー");
    $(".js-result1").html('<img src="img/paa.jpeg">').fadeOut(3000);
    $(".js-result2").html('<img src="img/w_paa.jpeg">').delay(3500).fadeIn(3000).fadeOut(3000);
    $(".js-result3").html('<img src="img/again.jpg">').delay(9500).fadeIn(1000);
}
} );


// ----- パーの場合 ----- 
$(".js-paa").click(function(){
    // $(".js-paa").css("width","180px");
    // $(".js-paa").css("color","red");
    // $(".a").fadeOut(2000);
    // $(".a").fadeIn(2000);

const random = Math.ceil(Math.random()*3);
console.log(random);

if(random===1){
    $(".js-you").text("パー");
    $(".js-result1").html('<img src="img/paa.jpeg">').fadeOut(3000);
    $(".js-result2").html('<img src="img/draw.jpg">').delay(3500).fadeIn(3000).fadeOut(3000);
    $(".js-result3").html('<img src="img/again.jpg">').delay(9500).fadeIn(1000);
}
else if(random===2){
    $(".js-you").text("グー");
    $(".js-result1").html('<img src="img/goo.jpeg">').fadeOut(3000);
    $(".js-result2").html('<img src="img/win.jpg">').delay(3500).fadeIn(3000).fadeOut(3000);
    $(".js-result3").html('<img src="img/again.jpg">').delay(9500).fadeIn(1000);
}
else if(random===3){
    $(".js-you").text("チョキ");
    $(".js-result1").html('<img src="img/choki.jpeg">').fadeOut(3000);
    $(".js-result2").html('<img src="img/w_choki.jpeg">').delay(3500).fadeIn(3000).fadeOut(3000);
    $(".js-result3").html('<img src="img/again.jpg">').delay(9500).fadeIn(1000);
}
} );


// ----- チョキの場合 ----- 
$(".js-choki").click(function(){
    // $(".js-choki").css("width","180px");
    // $(".js-choki").css("color","red");
    // $(".a").fadeOut(2000);
    // $(".a").fadeIn(2000);

const random = Math.ceil(Math.random()*3);
console.log(random);

if(random===1){
    $(".js-you").text("チョキ");
    $(".js-result1").html('<img src="img/choki.jpeg">').fadeOut(3000);
    $(".js-result2").html('<img src="img/draw.jpg">').delay(3500).fadeIn(3000).fadeOut(3000);
    $(".js-result3").html('<img src="img/again.jpg">').delay(9500).fadeIn(1000);
}
else if(random===2){
    $(".js-you").text("パー");
    $(".js-result1").html('<img src="img/paa.jpeg">').fadeOut(3000);
    $(".js-result2").html('<img src="img/win.jpg">').delay(3500).fadeIn(3000).fadeOut(3000);
    $(".js-result3").html('<img src="img/again.jpg">').delay(9500).fadeIn(1000);
}
else if(random===3){
    $(".js-you").text("グー");
    $(".js-result1").html('<img src="img/goo.jpeg">').fadeOut(3000);
    $(".js-result2").html('<img src="img/w_goo.jpeg">').delay(3500).fadeIn(3000).fadeOut(3000);
    $(".js-result3").html('<img src="img/again.jpg">').delay(9500).fadeIn(1000);
}
} );


// ----- リセット ----- 
$(".js-result3").click(function () {
    setTimeout(function () {
    location.reload();
},1000);
} );


