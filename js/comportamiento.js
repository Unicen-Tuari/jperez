"use strict";

// código de inicialización de eventos
function Mostrar(data) {
  $("#articulo").html(data);
  $("#cargar").on("click", function(){
    cargarprod();
  })
  $(".guitarrasx").on("click", function(){
    CargarAjax("html/guitarraSX.html")
  })
  mostrarprod()
}

function MostrarError(jqXHR, textStatus, errorThrown) {
  alert("La pagina no se puede cargar");
  $("#articulo").html("SINB SERVICIO");
}

function CargarAjax(link) {
  $.ajax({
    type:"GET",
    url: link,
    success: Mostrar,
    dataType: "html",
    error: MostrarError
    });
}

function crearTabla(prod) {
  var fila = "";
  for (var i = 0; i < prod.information.length; i++) {
    fila += "<tr>";
    fila += "<td> <a href='#' class="+prod.information[i]["thing"].codigo+">" + prod.information[i]["thing"].codigo + "</a> </td>";
    fila += "<td>" + prod.information[i]["thing"].descripcion + "</td>";
    fila += "<td>" + prod.information[i]["thing"].precio + "</td>";
    fila += "</tr>";
  }
  $("#tabla").html(fila);
}



function mostrarprod(){
  var grupo = 47;
  $.ajax({
    method: "GET",
    dataType: 'JSON',
    url: "http://web-unicen.herokuapp.com/api/group/" + grupo,
    success:function (prod){
      crearTabla(prod);
    },
    error:function(jqxml, status, errorThrown){
      console.log(errorThrown);
    }
  });
}



function cargarprod(){
  var grupo = 47;
  var prod = {
    codigo: null,
    descripcion: null,
    precio: null
  };
  var datos = $(".dato");
  for (var i = 0; i < datos.length; i++) {
    if (datos[i].value == "") {
      alert("FALTAN CARGAR DATOS")
    }
  }
  prod.codigo = datos[0].value;
  prod.descripcion = datos[1].value;
  prod.precio = datos[2].value;
  var informacion = {
    "group": grupo,
    "thing": prod
  };
  $.ajax({
    method: "POST",
    dataType: 'JSON',
    data: JSON.stringify(informacion),
    contentType: "application/json; charset=utf-8",
    url: "http://web-unicen.herokuapp.com/api/create",
    success: function(resultData){
      console.log(resultData.information);
    },
    error:function(jqxml, status, errorThrown){
      console.log(errorThrown);
    }
  });
  mostrarprod();
}








$(document).ready(function(){
  CargarAjax("html/principal.html");
})

$("#principal").on("click", function(){
  CargarAjax("html/principal.html")
})

$("#quienes").on("click", function(){
  CargarAjax("html/quienes.html")
})

$("#contacto").on("click", function(){
  CargarAjax("html/contacto.html")
})

$("#guitarras").on("click", function(){
  CargarAjax("html/guitarras.html")
})
