var contador=0;
window.addEventListener('load',function(){
    btngenerar.addEventListener('click',()=>{
        let html="<table border=1>"
        for (let i =0;i<10;i++)
        {
            html+="<tr>"    
            for(let j=0;j<10;j++)
            {
                html+=`<td><button value="${i*j}" title="joancema" class="boton"> . </button></td>`
            }
            html+="</tr>"
        }
        html+="</tabla>"
        divContenido.innerHTML=html;
        document.querySelectorAll(".boton").forEach(x=>{
            x.addEventListener('click',()=>{
                x.innerHTML=  contador++; //x.value  //contador++
            })
        })
    })
})