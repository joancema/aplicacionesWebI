window.addEventListener('load',function(){
    btnconsultar.addEventListener('click',function(){
        httpGet("https://jsonplaceholder.typicode.com/posts")
        .then(JSON.parse)
        .then(jsonresponse=> jsonresponse[0])
        .then(console.log)
        .catch(error=> console.log(error))
        .then(respuesta=>{ console.log(respuesta) })

    })
})

function httpGet(url)
{
    return new Promise((resolve,reject)=> {

    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = ()=>{
        resolve(xhr.responseText)
    };
    xhr.onerror = ()=>{
        reject(xhr.statusText);
    };
    xhr.send();
    })
}