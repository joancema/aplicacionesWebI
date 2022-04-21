export class Curso
{
    codigo:string
    descripcion:string
    cupo:number
    seccion:string
    alumnos:alumno[]


    constructor()
    {
        this.codigo='';
        
    }
}
export class alumno
{
    identificacion:string
    nombre:string
}
