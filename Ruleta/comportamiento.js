"use strict";

var numeroelegido = -1;
var credito= 100;
var victorias= 0;



function Valorruleta()
{
  return Math.floor(Math.random() * 10);
}

function tirar(){
    var x = document.forms[0];
    for (var i = 0; i < 10; i++) {
      if (x[i].checked){
        numeroelegido= i;
      }
    }
    if (numeroelegido == -1){
      alert('Todavia no apostaste viteh');
      return;
    }
    var ganador = Valorruleta();
    document.getElementById("numeroganador").innerHTML = ganador;
    if (numeroelegido == ganador){
      credito = credito + 10;
      alert('GANASTE');
      victorias++;
      if (victorias == 2){
        credito = credito + 5;
      }
    }
    else {
      credito = credito - 1;
      alert('PERDISTE, vuelve a intentar');
      victorias=0;
    }
    document.getElementById("creditos").innerHTML = "Creditos = " + credito;
}
