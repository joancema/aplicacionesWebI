window.addEventListener('load',function(){
    btnconsultar.addEventListener('click',function(){




        
        
        
        let alumno = 
        { identificacion:'9999999999', nombre: 'Juan ', direccion: 'Manta', 
        contacto: { nombre: 'Maria', relacion: 'Novia' }, 
        conexiones: [
            {direccion:'San Pedro', tipo:'Casa'},
            {direccion:'Los Esteros', tipo:'Trabajo', telefono:'651651' }
        ]
        };







        fetch('./prueba.json')
        .then(respuesta=>{
            return respuesta.json()
        }).then(resultadoJson=>{


            resultadoJson.filter( ele=> {  return ele.Codigo==1   } ).forEach(resultado=>{
                console.log(resultado.Descripcion)
            })



        }).catch(error=>{
            console.log(error)
        })



    })
})