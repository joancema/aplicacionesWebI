window.addEventListener('load',function(){
    btngenerar.addEventListener('click',function(){
        html="<table id=primera>"
        html+="<tr>"
        for (i=0;i<numero.value;i++)
        {
                html+="<td><input type=text class=ingreso></td>"
        }
        html+="</tr>"
        html+="</table>"


        html+="<table id=segunda border=1>"
        for(ii=0;ii<10;ii++)
        {
            html+="<tr>"
            for (i=0;i<numero.value;i++)
            {
                    html+="<td>.</td>"
            }
            html+="</tr>"
        }
        html+="</table>"

        html+="<button id=btngenerarbarras>Barras</button>"


        divtabla.innerHTML=html


        btngenerarbarras.addEventListener('click',function(){
            contador=0
            document.querySelectorAll('.ingreso').forEach(ele=>{
                
                for (i=9;i> 9-(Number(ele.value)/10  ) ;i-- )
                {
                    segunda.rows[i].cells[contador].innerHTML="X"
                }
                contador++
            })
        })

    })
})