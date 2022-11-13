$(document).ready(function(){
    $("#boton").click(function(){
        var numeroUno = $("#numeroUno").val();
        var numeroDos = $("#numeroDos").val();
        var resultado = parseInt(numeroUno) + parseInt(numeroDos);
        console.log(resultado);
        resultado = "Resultado: " + resultado;
        $("#resultado").val(resultado);
        $("#texto").text(resultado);
    });
  });