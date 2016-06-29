"use strict";

// código de inicialización de eventos
function Mostrar(data) {
  $("#infoamostrar").html(data);
}

function MostrarError(jqXHR, textStatus, errorThrown) {
  alert("La pagina no se puede cargar");
  $("#infoamostrar").html("servidor caido");
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



$(document).ready(function(){
  CargarAjax("html/principal.html");
  }
)
