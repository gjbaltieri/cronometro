let mili = 1;

let sec = 0;
let min = 0;
let hr = 0;


/************** MILLISEGUNDOS 1 **************/

function milisseconds () {let milesimo = document.getElementById("mili");
    milesimo.innerText =  mili++
    if (mili >= 99) {
        mili = 0
    }};



/************** SEGUNDOS **************/
function secs () {let segundos = document.getElementById("sec");
        segundos.innerText =  "0"+sec++ +":"
    if (sec >59) {
        segundos.innerText =  "00:"
        sec = 1
    }
    if (sec <= 9){
        segundos.innerText =  "0" + sec+ ":"
    }
    else if (sec >=10){
        segundos.innerText = sec+":"
    }};


/************** MINUTOS **************/
function mins () {let minutos = document.getElementById("min");
    minutos.innerText =  "00:"+min++ +":"
if (min >59) {
    minutos.innerText =  "00:"
    min = 0
}
if (min <= 9){
    minutos.innerText =  "0" + min+ ":"
}
else if (min >=10){
    minutos.innerText = min+":"
}};


/************** HORAS **************/
function hrs () {let horas = document.getElementById("hr")
    horas.innerText =  "0"+hr++ +":"


if (hr <= 9){
        horas.innerText =  "0" + hr+ ":"
    }
else if (hr >=10){
        horas.innerText = hr+":"
    }};

                     
      

var intervalo1;
var intervalo2;
var intervalo3;
var intervalo4;
var intervalo5;
   


function start () {
    intervalo1 = setInterval (milisseconds, 1);
    intervalo3 = setInterval (secs, 1000);
    intervalo4 = setInterval (mins, 60000);
    intervalo5 = setInterval (hrs, 3600000);
    };

function stop () {
    clearInterval (intervalo1);

    clearInterval (intervalo3);
    clearInterval (intervalo4);
    clearInterval (intervalo5);

}

