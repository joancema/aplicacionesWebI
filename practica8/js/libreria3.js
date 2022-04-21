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


var idUsuarios= rxjs.Observable.create((leerNuevosUsuarios)=>{
    setInterval(()=>{
        leerNuevosUsuarios.next(obtenerUsuarios());
    },3000);
})


idUsuarios.subscribe((usuarioId)=>{
    actualizaNotificaciones(usuarioId);
})