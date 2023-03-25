var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");
icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.src = "images/pause.png";
    }else{
        mysong.pause();
        icon.src = "images/play.png";
    }
}

var mysong1 = document.getElementById("mysong1");
var icon1 = document.getElementById("icon1");
icon1.onclick = function(){
    if(mysong1.paused){
        mysong1.play();
        icon1.src = "images/pause.png";
    }else{
        mysong1.pause();
        icon1.src = "images/play.png";
    }
}
var mysong2 = document.getElementById("mysong2");
var icon2 = document.getElementById("icon2");
icon2.onclick = function(){
    if(mysong2.paused){
        mysong2.play();
        icon2.src = "images/pause.png";
    }else{
        mysong2.pause();
        icon2.src = "images/play.png";
    }
}
var mysong3 = document.getElementById("mysong3");
var icon3 = document.getElementById("icon3");
icon3.onclick = function(){
    if(mysong3.paused){
        mysong3.play();
        icon3.src = "images/pause.png";
    }else{
        mysong3.pause();
        icon3.src = "images/play.png";
    }
}

var mysong4 = document.getElementById("mysong4");
var icon4 = document.getElementById("icon4");
icon4.onclick = function(){
    if(mysong4.paused){
        mysong4.play();
        icon4.src = "images/pause.png";
    }else{
        mysong4.pause();
        icon4.src = "images/play.png";
    }
}