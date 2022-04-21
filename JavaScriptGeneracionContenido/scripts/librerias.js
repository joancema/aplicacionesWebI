window.addEventListener("load", function() {
    
    btngenerar.addEventListener('click',function(){


        let contenidoHTML="<table border='1'>"
        for (i=1;i<=10;i++)
        {
            contenidoHTML+="<tr>"

            for (j=1;j<=10;j++)
            {   
                contenidoHTML+="<td>"
                contenidoHTML+= `<button class='btninterno' title='${i}' value='${j}'> ${i+j} </button>`  ;
                contenidoHTML+="</td>"
            }

            contenidoHTML+="</tr>"
        }
        contenidoHTML+="</table>"

        divcontenido.innerHTML= contenidoHTML;

        document.querySelectorAll('.btninterno').forEach(elemento=>{
            elemento.addEventListener('click',function(){
                console.log(elemento.value)
            })
        })



    })



})