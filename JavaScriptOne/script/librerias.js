// controlar que los elementos est[en cargados por completo
window.addEventListener('load', function(){
    btncalcular.addEventListener('click', function() 
    {  
        txtresultado.value=  Number(txtnumero.value)+parseInt(txtnumero2.value);
    });
    btninvertir.addEventListener('click',function()
    {
        divresultado.innerHTML= txtcadena.value.split("").reverse().join("");
    });
})


