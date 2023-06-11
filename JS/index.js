let userName = prompt("Isminiz nedir?")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName}`

let myClock = document.querySelector("#myClock") 

function tarihSaat() {

    const weekday = ["Pazar","", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    const date = new Date();
     let day = weekday[date.getDay()] ;

     var tarih = new Date().toLocaleTimeString('tr-TR');

     myClock.innerHTML = `${tarih + "    " + day}`

}


setInterval(tarihSaat,1000);