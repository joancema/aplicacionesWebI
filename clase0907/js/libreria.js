window.addEventListener('load',function(){
    btngenerar1.addEventListener('click',function(){
        

        arr=
        [
             [1,"John Cevallos", "9998887776", 350] ,
             [2,"Emily Andrade", "6665554443", 850] ,
             [3,"Juan Pincay", "2223334445", 900]
        ]


        convertirArregloEnTablaHTML(arr);


    });

    btngenerar2.addEventListener('click',function(){

        arreglo = new Array(5);

        for (let i=0;i<5;i++)
        {
            arreglo[i]= new Array(5);

            for (let j=0;j<5;j++)
            {
                arreglo[i][j]=  prompt("Ingrese un dato","0") ;
            }
        }

        arreglo[2][2]=888


        convertirArregloEnTablaHTML(arreglo);


    })


})
//   "JSON JavaScript Object Notation"
// DOM Document Object Model


function convertirArregloEnTablaHTML(parreglo)
{

    let html= "<table border=1>"

    parreglo.forEach(fila=>{

        html+="<tr>"

        fila.forEach(col=>{
            html+=`<td> <input type="text" value= "${col}">   </td>`
        })

        html+="</tr>"

    })

    html+="</table>"

    divtabla.innerHTML= html;

}



