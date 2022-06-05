let name = prompt("Lütfen Adınızı Giriniz")
let info = document.querySelector("#myName")
info.innerHTML = `${name}! Hoş geldin!`



function showTime(){
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    const date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var d = weekday[date.getDay()];   
    
    var time = h + ":" + m + ":" + s + " " + d;
    document.getElementById("MyClockDisplay").innerHTML = time;    
}

showTime();