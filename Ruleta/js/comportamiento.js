"use strict";

/* ----------------------------------------------- creacion de objetos ------------------------------------------------------------------------------- */

function jugador(){
  var apues= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  return {
    dinero : 100,
    apuestas : apues,
    getdinero : function(){
      return this.dinero;
    },
    modificredito : function(variacion){
      this.dinero += variacion;
    },
    getapuesta : function() {
      return this.apuesta;
    },
    añadirapuesta : function(num){
      this.apuestas[num]++;
    }
  }
};

function numero(val){
  var rojos = $(".rojo");
  return{
    valor : val,
    espar : function(){
      if (this.valor !=0){
        if (this.valor % 2 === 0) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return null;
      }
    },
    esmenor : function(){
      if (this.valor !=0){
        if (this.valor < 6) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return null;
      }
    },
    esrojo : function(){
      if (this.valor !=0) {
        for (var i = 0; i < rojos.length; i++) {
          if (rojos[i].innerHTML === this.valor) {
            return true;
          }
          else {
            return false;
          }
        }
      }
      else {
        return null;
      }
    }
  }
};

function tablero(){
  var table = [];
  for (var i = 0; i < 11; i++) {
    arreglo.push = new numero(i);
  }
  return{
    arreglo : table
  }
};

/*-------------------------------------------------------------------------creacion funciones con acciones--------------------------------------------------*/

function mostrar (){ /*muestra la apuesta y el dinero que va quedando*/
    var apostado = "";
    for (var i = 0; i < jugadoractual.apuestas.length; i++) {
      if (jugadoractual.apuestas[i] != 0) {
        if (i > 10) {
          var nomap = "";
          if (i === 11) {
            nomap= "Pares";
          }
          else if (i === 12) {
            nomap= "Impares";
          }
          else if (i === 13) {
            nomap = "Menor";
          }
          else if (i === 14) {
            nomap = "Mayor";
          }
          else if (i === 15) {
            nomap = "Negro"
          }
          else if (i === 16) {
            nomap = "rojo";
          }
          apostado += nomap + '= $' + jugadoractual.apuestas[i] + '<br />';
        }
        else {
          apostado += i + '= $' + jugadoractual.apuestas[i] + '<br />';
        }
      }
    }
    if (jugadoractual === Mario) {
      $("#dineroj1").html("Dinero: $" + jugadoractual.getdinero());
      $("#apuestaj1").html(apostado);
    }
    else {
      $("#dineroj2").html("Dinero: $" + jugadoractual.getdinero());
      $("#apuestaj2").html(apostado);
    }
}


function apostar (num){/*apuesta al numero pasado (negro,rojo,par,impar,mayor,menor estan representados con numeros) y quita el dinero correspondiente*/
  jugadoractual.añadirapuesta(num);
  jugadoractual.modificredito(-1);
  mostrar();
}


function cambiarjug (){ /*cambia el turno del jugador quitando y dando permiso de apuesta*/
  if (jugadoractual === Mario) {
    $("#j1 .paneljug").css("box-shadow", "0px 0px 0px white");
    jugadoractual = Luigi;
    $("#j2 .paneljug").css("box-shadow", "0px 0px 40px white");
  }
  else {
    $("#j2 .paneljug").css("box-shadow", "0px 0px 0px white");
    jugadoractual = Mario;
    $("#j1 .paneljug").css("box-shadow", "0px 0px 40px white");
  }
}

function ganador(){ /*calcula numero ganador*/
  return Math.floor( Math.random ()*11);
}

function esganador(){

}

function vincular(i){ /*vincula los botones del tablero con su respectiva apuesta*/
   botones[i].onclick = function(){apostar(i)};
}

/* -----------------------------------------------------------------------eventos---------------------------------------------------*/
var Mario= new jugador;
var Luigi= new jugador;
var jugadoractual = Mario;
$("#j1 .paneljug").css("box-shadow", "0px 0px 40px white");





$("#cambiar").on("click", cambiarjug);

var botones = $(".mesa button");
for (var i = 0; i < botones.length; i++) {
  vincular(i);
}
