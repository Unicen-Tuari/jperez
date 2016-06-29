"use strict";

// código de inicialización de eventos
function Mostrar(data) {
  $("#articulo").html(data);
}

function MostrarError(jqXHR, textStatus, errorThrown) {
  alert("La pagina no se puede cargar");
  $("#articulo").html("SINB SERVICIO");
}

function CargarAjax(link) {
  $.ajax(
    {
      type:"GET",
      url: link,
      success: Mostrar,
      dataType: "html",
      error: MostrarError
    }
  );
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
  prod.codigo = inputs[0].value;
  prod.descripcion = inputs[1].value;
  prod.precio = inputs[2].value;
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
      $("#guardarAlert").removeClass("alert-danger")
      $("#guardarAlert").addClass("alert-success")
      //como le dimos dataType:"JSON" el resultData ya es un objeto
      //la estructura que devuelve es especifica de cada servicio que usemos
      $("#guardarAlert").html("Guardado");
      console.log(resultData.information);
      getInformationByGroup();
    },
    error:function(jqxml, status, errorThrown){
      console.log(errorThrown);
      $("#guardarAlert").addClass("alert-danger");
      $("#guardarAlert").html("Error por favor intente mas tarde");
    }
  },
  $("#guardarAlert").html("Cargando...")
);
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
