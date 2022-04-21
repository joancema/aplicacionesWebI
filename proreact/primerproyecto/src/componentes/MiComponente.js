import React from 'react'


class MiComponente extends React.Component
{
    render(){
        let curso=
        {
            codigo:'001',
            nombre:'Primero A',
            alumnosMatriculados:[
                'John Miguel', 'Emily','Wendy' 
            ]
        }
        return (
            <div className='joancema'>
                <h1>{curso.codigo}</h1>
                <h2>{curso.nombre}</h2>
                <ol>
                {
                    
                    curso.alumnosMatriculados.forEach((elemento,i)=>{
                      return ( <li key={i}> {elemento} </li> )
                    })
                    
                }
                </ol>
            </div>
            
        )
    }
}


export default MiComponente;