"use strict";

/* cracion de objetos */

function jugador(){
  var apues= [];
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


function apostar (num){
  jugadoractual.añadirapuesta(num);
}

function cambiarjug (){
  if (jugadoractual === Mario) {
    jugadoractual = Luigi;
  }
  else {
    jugadoractual = Mario;
  }
}


var Mario= new jugador;
var Luigi= new jugador;
var jugadoractual = Mario;
