window.addEventListener('load',function(){
    txtcedula.addEventListener('blur',function(){
        mensajeCedula.innerHTML=""
        if (this.value.length!=10)
        {
            mensajeCedula.innerHTML +='No tiene el número de caracteres correcto <br>'
            //return;
        }
        if (!validarCedula(this.value))
        {
            mensajeCedula.innerHTML +='No cumple los criterios de validación <br>'
        }

    })
})
function validarCedula(parametro)
{
    if (parametro.length!=10)
        return false;
    let calculo=0;
    let semaforo=false;
    parametro.substr(0,9).split('').forEach(element => {
        let numeroActual= semaforo? parseInt(element) :  parseInt(element)*2
        calculo+= numeroActual>9? numeroActual-9: numeroActual;
        semaforo= !semaforo;
    });    
    while (calculo>0) calculo-=10; 
    return  parseInt(parametro.substr(9)) + calculo==0;
}