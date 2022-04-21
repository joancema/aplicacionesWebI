function actualizaNotificaciones(id)
{
    console.log(`Usuario ${id} actualizado`)
}

function obtenerUsuarios()
{
    console.log('nuevos usuarios')
    min=123
    max=456
    return Math.floor(Math.random()* (max-min) )+min;

}

let idUsuarios=[];
let totalDeUsuarios= idUsuarios.length
idUsuarios.push(obtenerUsuarios())

setInterval(()=>{
    console.log('enviando notificaciones')
    if (idUsuarios.length>totalDeUsuarios)
    {
        for (i=totalDeUsuarios;i<idUsuarios.length;i++)
        {
            actualizaNotificaciones(idUsuarios[i])
        }
        totalDeUsuarios=idUsuarios.length;
    }
    

},5000)

setInterval(()=>{
    console.log('agregando usuario');
    idUsuarios.push(obtenerUsuarios());
},3000)