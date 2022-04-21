window.addEventListener('load',function(){
    btnnuevo.addEventListener('click',function(){
        txtcodigo.value="";
        txtdescripcion.value="";
    })
    //URL Firebase
    btnconsultar.addEventListener('click',function(){
        //utilizando el metodo GET - Consulta
        let url = `https://clases2020-e5713.firebaseio.com/Cursos.json`
        fetch(url).then(resultado=>{
            return resultado.json();
        })
        .then(resultado2=>{

            //console.log( Object.entries(resultado2) )

            let tablaHtml= "<table border=1>";
            for ( let elemento in resultado2 )
            {
                tablaHtml+="<tr>"

                tablaHtml+=`<td> <button class='boton'> ${resultado2[elemento].codigo } </button>   </td>  <td>  ${resultado2[elemento].descripcion}  </td>`

                tablaHtml+="</tr>"
            }

            tablaHtml+="</table>"

            divconsulta.innerHTML= tablaHtml;

            document.querySelectorAll('.boton').forEach(elemento=>{
                elemento.addEventListener('click',function(){
                    let url2 = `https://clases2020-e5713.firebaseio.com/Cursos/${elemento.innerHTML.trim()}.json`
                    console.log(url2)

                    fetch(url2).then(respuesta=>{return respuesta.json()}).then(respuesta2=>{
                        txtcodigo.value=respuesta2.codigo;
                        txtdescripcion.value= respuesta2.descripcion;
                    } )

                    
                })
            })



        })
        .catch(error=>{
            console.log(error)
        })


        
    })

    btngrabar.addEventListener('click',function(){
        //método POST
        let url = `https://clases2020-e5713.firebaseio.com/Cursos.json`
        let cuerpo = { codigo: txtcodigo.value ,descripcion: txtdescripcion.value }

        fetch(url , {
            method:'POST',
            body:  JSON.stringify(cuerpo) ,
            headers:{
                'Content-Type':'application/json'
            }

        } ).then(resultado=>{
            return resultado.json();
        })
        .then(resultado2=>{
            console.log(resultado2.name)
        })
        .catch(error=>{
            console.error('Hubo un error al ejecutarse',error)
        })


    })

    btngrabar2.addEventListener('click',function(){
        let url = `https://clases2020-e5713.firebaseio.com/Cursos/${txtcodigo.value}.json`
        let cuerpo = { codigo: txtcodigo.value ,descripcion: txtdescripcion.value }

        fetch(url , {
            method:'PUT',
            body:  JSON.stringify(cuerpo) ,
            headers:{
                'Content-Type':'application/json'
            }

        } )
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(respuesta2=>{
            console.log(respuesta2)
        })
        .catch(error=>{
            console.error('No se pudo grabar el nodo curso',error);
        })
    })

    btneliminar.addEventListener('click',function(){
        let url = `https://clases2020-e5713.firebaseio.com/Cursos/${txtcodigo.value}.json`

        fetch(url , {
            method:'DELETE'
        } )
        .then(resultado=>{
            return resultado.json()
        })
        .then(resultado2=>{
            console.log(resultado2)
        })
        .catch(error=>{
            console.error('No se pudo eliminar el curso',error)
        })


    })

})