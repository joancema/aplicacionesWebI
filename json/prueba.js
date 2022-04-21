
window.addEventListener('load',function(){
    btnconsultar.addEventListener('click',function(){
        fetch('./prueba.json').then(resultado=>{
            return resultado.json()
        }).then(resultadoJson=>{  
            
            resultadoJson.filter(p=>  p.Codigo==2).forEach(filtro=>{
                console.log(filtro)
            })
        
        })        
    })
    btnconsultar2.addEventListener('click',async function(){
        let response = await fetch('./estudiante.json');
        let data = await response.json()
        //console.log (data.filter(p=>{ return p.Contacto })  );
        console.log(data);


        var html='<table border=1>'
        html+='<tr><th>Nombres</th></tr>'
        data.forEach(dato=>{
            
            html+= `<tr><td> ${dato.Nombre}  </td> </tr>`
        })
        html+='</table>'
        generado.innerHTML=html

        console.log (data.filter(p=>{ return  p.conexion.filter(q=>{ return q.Lugar=="Trabajo"}).length>0   })  );
    })
})