
window.addEventListener('load',function(){
    btngenerar.addEventListener('click',function(){

        let contenidoHTML= "<table border='1'>"


        let contador=0;
        for (i=1;i<=3;i++)
        {
            contenidoHTML+="<tr>"
            for (j=1;j<=3;j++)
            {
                contenidoHTML+="<td>"
                contenidoHTML+= `<button class="btnnumero" value="${i}" title="${j}"> ${++contador} </button>`
                contenidoHTML+="</td>"
            }
            contenidoHTML+="</tr>"    
        }

       
         contenidoHTML  += "</table>"

        divcontenedor.innerHTML=contenidoHTML



        document.querySelectorAll(".btnnumero").forEach(x => agregarEvento(x))
            
        //{

            //x.addEventListener('click',function(){
            //    alert(  `Fila   ${x.value}  y Columna  ${x.title} ` );
            //})
            //agregarEvento(x)

        //}

        //)



    })
})

function agregarEvento(parametro)
{
    parametro.addEventListener('click',function(){
        alert(  `Fila   ${parametro.value}  y Columna  ${parametro.title} ` );
    })
}
