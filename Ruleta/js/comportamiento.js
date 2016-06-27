"use strict";

/* ----------------------------------------------- creacion de objetos ------------------------------------------------------------------------------- */

function jugador(){/*objeto jugador*/
  var apues= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  return {
    dinero : 100,
    apuestas : apues,
    getdinero : function(){/*me da la cantidad de dinero del jugador*/
      return this.dinero;
    },
    modificredito : function(variacion){/*modifica el credito o dinero del jugador*/
      this.dinero += variacion;
    },
    getapuesta : function() {/*me da el arreglo con todas las apuestas del jugador*/
      return this.apuestas;
    },
    añadirapuesta : function(num){/*me le suma 1 al numero que apueste, salvo q responda a la consigna y ahi suma 2*/
      this.apuestas[num]++;
    },
    vaciarapuesta : function(){/*deja en 0 todas las apuestas del jugador*/
      this.apuestas = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    }
  }
};

function numero(val){/* objeto numero*/
  var rojos = $(".rojo");
  var negros= $(".negro");
  return{
    valor : val,
    getvalor : function(){
      return this.valor;
    },
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
    esmenor : function(){/*se fija si el vlaor del numero es menor a 6 que corresponde a la mitad de la ruleta*/
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
    esrojo : function(){ /*se fija si el numero se encuentra dentro de los que tienen la clase rojo*/
      var es = "";
      if (this.valor != 0) {
        for (var i = 0; i < rojos.length; i++) {
          if (rojos[i].innerHTML == this.valor) {
            es = true;
            return es;
          }
          else {
            es= false;
          }
        }
      }
      else {
        return null;
      }
      return es;
    },
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

function mostrar (jugador){ /*muestra la apuesta y el dinero que va quedando*/
    var apostado = "";
    for (var i = 0; i < jugador.apuestas.length; i++) {
      if (jugador.apuestas[i] != 0) {
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
          apostado += nomap + '= $' + jugador.apuestas[i] + '<br />';
        }
        else {
          apostado += i + '= $' + jugador.apuestas[i] + '<br />';
        }
      }
    }
    if (jugador === Mario) {
      $("#dineroj1").html("Dinero: $" + jugador.getdinero());
      $("#apuestaj1").html(apostado);
    }
    else {
      $("#dineroj2").html("Dinero: $" + jugador.getdinero());
      $("#apuestaj2").html(apostado);
    }
}


function apostar (num){/*apuesta al numero pasado (negro,rojo,par,impar,mayor,menor estan representados con numeros) y quita el dinero correspondiente*/
  if (jugadoractual.getdinero() >  0) {
    if ((num % 4 === 0) && (0 < num) && (num < 11)) {
      jugadoractual.añadirapuesta(num);
      jugadoractual.modificredito(-1);
      jugadoractual.añadirapuesta(num);
      jugadoractual.modificredito(-1);
    }
    else {
      jugadoractual.añadirapuesta(num);
      jugadoractual.modificredito(-1);
    }
    mostrar(jugadoractual);
  }
  else {
    alert("NO CUENTA CON DINERO SUFICIENTE");
  }
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

function pagar(jug,val){
  val = val*2;
  jug.modificredito(val);
  mostrar(jug);
}

function esganador (jugador,esgan){
  var apu= jugador.getapuesta();
  for (var i = 0; i < apu.length; i++) {
    if (i === esgan.getvalor()) {
      if ((i % 4 === 0) && (0 < i)) {
        pagar (jugador,apu[i]*0.75);
      }
      else {
        pagar (jugador,apu[i]);
      }
    }
    else if (i === 11){
      if (esgan.espar()) {
        pagar (jugador,apu[i]);
      }
    }
    else if (i === 12){
      if (esgan.espar() === false) {
        pagar (jugador,apu[i]);
      }
    }
    else if (i === 13){
      if (esgan.esmenor()) {
        pagar (jugador,apu[i]);
      }
    }
    else if (i === 14){
      if (esgan.esmenor() === false) {
        pagar (jugador,apu[i]);
      }
    }
    else if (i === 15){
      if (esgan.esrojo() === false) {
        pagar (jugador,apu[i]);
      }
    }
    else if (i === 16){
      if (esgan.esrojo()) {
        pagar (jugador,apu[i]);
      }
    }
  }
  jugador.vaciarapuesta();
  mostrar(jugador);
}

function aposto (jugador){
  var apos = false;
  var apojug = jugador.getapuesta()
  for (var i = 0; i < apojug.length; i++) {
    if (apojug[i] != 0) {
      apos = true;
    }
  }
  return apos;
}

function songanadores(){
  if ((aposto(Mario)) || (aposto(Luigi))) {
      var esgan = new numero(ganador());
      alert("NUMERO GANADOR:  " + esgan.getvalor());
      esganador(Mario,esgan);
      esganador(Luigi,esgan);
  }
  else {
    alert("AUN NO HAY APUESTAS")
  }

}

function vincular(i){ /*vincula los botones del tablero con su respectiva apuesta*/
   botones[i].onclick = function(){apostar(i)};
}


/* -----------------------------------------------------------------------eventos---------------------------------------------------*/
var Mario= new jugador;
var Luigi= new jugador;
var jugadoractual = Mario;
$("#j1 .paneljug").css("box-shadow", "0px 0px 40px white");

var botones = $(".mesa button");
for (var i = 0; i < botones.length; i++) {
  vincular(i);
}

$("#tirar").on("click", function(){ songanadores()});

$("#cambiar").on("click", cambiarjug);
