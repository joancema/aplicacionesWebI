
/// asegurarnos que nuestras marcas html ya se encuentren cargadas
window.addEventListener('load',function(){

    btnmostrar.addEventListener('click',function(){
        navigator.geolocation.getCurrentPosition( (parametro) =>
        {
            divubicacion.innerHTML= parametro.coords.latitude;
            divubicacion.innerHTML+="<br>"
            divubicacion.innerHTML += parametro.coords.longitude;
        } );
    })


    function traerPosicionamiento(parametro)
    {
        divubicacion.innerHTML= parametro.coords.latitude;
        divubicacion.innerHTML+="<br>"
        divubicacion.innerHTML += parametro.coords.longitude;
    }



})