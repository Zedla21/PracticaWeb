$(document).ready(function(){
    $("#color").val("#ffffff")
    $("#boton").click(function(){
        var color = $("#color").val();
        console.log(color);
        document.body.style.backgroundColor = color;
    });
  });