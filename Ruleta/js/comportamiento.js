"use strict";

/* cracion de objetos */

function jugador(){
  var apues= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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

/*creo funciones con acciones*/

function mostrar (){
    var apostado = "";
    for (var i = 0; i < jugadoractual.apuestas.length; i++) {
      if (jugadoractual.apuestas[i] != 0) {
        apostado += i + '= $' + jugadoractual.apuestas[i] + '<br />';
      }
    }
    if (jugadoractual === Mario) {
      $("#apuestaj1").html(apostado);
    }
    else {
      $("#apuestaj2").html(apostado);
    }
}


function apostar (num){
  jugadoractual.añadirapuesta(num);
  jugadoractual.modificredito(-1);
  mostrar();
}


function cambiarjug (){

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

function ganador(){
  return Math.floor( Math.random ()*11);
}

/* addafagadgagdgdas*/
var Mario= new jugador;
var Luigi= new jugador;
var jugadoractual = Mario;
$("#j1 .paneljug").css("box-shadow", "0px 0px 40px white");

$("#cambiar").on("click", cambiarjug);
