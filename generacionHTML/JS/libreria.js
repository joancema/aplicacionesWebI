window.addEventListener('load',function(){
    btngenerar.addEventListener('click',function(){

        arr = [ ["John","Cevallos",200],["Juan","Cedeno",300], ["Pedro","Andrade",500]]


        arr= arr.filter(p=>{return p[2]>200 })

        let tabla="<table border=1>"
        arr.forEach(elemento=>{
            tabla+="<tr>"
            elemento.forEach(col=>{
                tabla+=`<td>${col}</td>`
            })
            tabla+="</tr>"

        })
        tabla+="<table>"
        console.log(tabla)
        divuno.innerHTML=tabla;
    })

    btngenerar2.addEventListener('click',ele=>{
        
        var arr= new Array(5);
        for (let i=0;i<5;i++)
        {
            arr[i]= new Array(5)
            for (let j=0;j<5;j++)
            {
                arr[i][j]=100
            }
        }

        
        arr[2][2]=9

        mostrarTabla(arr)
        

    })
})

function mostrarTabla(matriz)
{
    let tabla="<table border=1>"
    matriz.forEach(elemento=>{
        tabla+="<tr>"
        elemento.forEach(col=>{
            tabla+=`<td>${col}</td>`
        })
        tabla+="</tr>"

    })
    tabla+="<table>"
    console.log(tabla)
    divuno.innerHTML=tabla;
}