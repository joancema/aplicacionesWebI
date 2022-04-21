window.addEventListener('load',function(){

    txtcedula.addEventListener('blur',function(){
        mensajeCedula.innerHTML=""
        if (txtcedula.value.length!=10)
        {
            mensajeCedula.innerHTML+="EL nUmero de caracteres debe ser 10 <br>"
        }
        if (!validarCedula(txtcedula.value))
        {
            mensajeCedula.innerHTML+="No cumple los criterios de validaciOn de Registro Civil <br>"
        }
        
    })


})


function validarCedula(parametro)
{
    if (parametro.length!=10) return false;
    let semaforo=false;
    calculo=0;
    contador=0;
    parametro.substr(0,9).split('').forEach(element=>{
        //(++contador % 2==0)
        let numeroActual = semaforo    ? parseInt(element): parseInt(element)*2; 
        calculo+= numeroActual>9 ? numeroActual-9: numeroActual ;
        semaforo= !semaforo;
    })

    while (calculo>0) calculo-=10;
    return parseInt(parametro.substr(9)) + calculo ==0;

}