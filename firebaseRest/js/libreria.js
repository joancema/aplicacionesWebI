window.addEventListener('load',function(){
    btnconsultar.addEventListener('click',function(){
        fetch('https://clases2020-e5713.firebaseio.com/Cursos.json').then(resultado=>{
            return (resultado.json())
        }).then(consulta=>{

            console.log(Object.entries(consulta))
            //console.log(consulta)
            let tabla='<table border=1>'
            for (const prop in consulta) 
            {
                tabla+='<tr>'
                var segundo=consulta[prop];
                tabla+= ` <td > ${consulta[prop].codigo} </td> <td> <button class='boton'> ${consulta[prop].codigo}</button> </td> <td> ${consulta[prop].descripcion} </td>`;
                tabla+='</tr>'
            }
            tabla+='</table>'
            divcontenido.innerHTML=tabla

            document.querySelectorAll(`.boton`).forEach(elemento=>{
                elemento.addEventListener('click',function(){
                    consultaIndividual(elemento.innerHTML)
                })
            })


        })
    })

    function consultaIndividual(parametro)
    {
        
        console.log(`https://clases2020-e5713.firebaseio.com/Cursos/${parametro.trim()}.json`)
        fetch(`https://clases2020-e5713.firebaseio.com/Cursos/${parametro.trim()}.json`).then(resultado=>{
            return (resultado.json())
        }).then(consulta=>{
            txtid.value= consulta.codigo
            txtdescripcion.value= consulta.descripcion
        })

    }

    btngrabar.addEventListener('click',function(){
        var url = 'https://clases2020-e5713.firebaseio.com/Cursos.json';
        var data =  {Código:"5A", Descripción:"Quinto A" };

        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
        'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .then(res2=>{ console.log(res2.name) })
        .catch(error => console.error('Error:', error))
    })
    btnmodificar.addEventListener('click',function(){
        var url = `https://clases2020-e5713.firebaseio.com/Cursos/${txtid.value}.json`;
        var data =  {Código:txtid.value, Descripción:txtdescripcion.value };

        fetch(url, {
        method: 'PUT', 
        body: JSON.stringify(data), 
        headers:{
        'Content-Type': 'application/json'
        }
        }).then(res =>  res.json() )
        .catch(error => console.error('Error:', error))
    })
    btneliminar.addEventListener('click',function(){
        var url = 'https://clases2020-e5713.firebaseio.com/Cursos/5A.json';


        fetch(url, {
        method: 'DELETE', 
        }).then(res =>  res.json() )
        .then(res2=> console.log(res2))
        .catch(error => console.error('Error:', error))
    })




})