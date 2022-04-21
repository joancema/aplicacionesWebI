//variable global
var contador=0;


//asegurarnos que los elementos HTML se encuentran cargados
window.addEventListener('load', function(){

    btngenerar.addEventListener('click',function(){

        // generar una tabla
        let html= "<table border=1>"
        //ciclo para las filas
        for (let i=0;i<10; i++)
        {
            html+="<tr>"
            //ciclo para las celdas
            for (let j=0;j<10;j++)
            {
                html+=`<td> <input type='text' value='0'> <button  class='boton' title='1' value=${i*j}>.</button>  </td>`
            }
            html+="</tr>"
        }
        // cerrar la tabla
        html+="</table>"

        //asignar el html al div

        contenido.innerHTML= html


        //recorrer los botones de la tabla segUn su clase
        document.querySelectorAll('.boton').forEach(ele=>{
            //agregar a cada boton el evento click
            ele.addEventListener('click',function(){
                //lOgica
                if (ele.title=="1")
                {
                    ele.innerHTML =  ++contador ;
                    ele.title="2"
                }
                else
                {
                    ele.innerHTML =  --contador ;
                    ele.title="1"
                }
                
            })
        })










/*
        <table border=1>
            <tr>
                <td>A</td>
                <td>B</td>
            </tr>
            <tr>
                <td>C</td>
                <td>D</td>
            </tr>
        </table>

    */

    })

})