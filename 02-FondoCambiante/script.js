$(document).ready(function(){
    $("#color").val("#ffffff")
    $("#color").change(function () { 
        var color = $("#color").val();
        document.body.style.backgroundColor = color;
    });
});