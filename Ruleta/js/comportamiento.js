"use strict";

var apuj1 = [];
var apuj2 = [];

/* cracion de objetos */

function jugador(){
  return {
    dinero : $100,
    getdinero : function(){
      return this.dinero;
    },
    modificredito : function(variacion){
      this.dinero += variacion;
    }
  }
};

function apuesta(num){
  return{
    numero : num,
    valor : 0,
    aumentar : function(){
      this.valor++;
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
    }
    esmenor : function(){
      if (this.valor !=0){
        if (this.valor =< 5) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return null;
      }
    }
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
    arreglo : table;
  }
};
