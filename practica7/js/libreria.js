window.addEventListener('load',function(){
    btnconsultar.addEventListener('click',function(){

        //ejemplo1
        
        /*
        
        httpGet('https://jsonplaceholder.typicode.com/posts')
        .then(JSON.parse)
        .then(jsonResponse => jsonResponse[0])
        .then(console.log)
        .catch(error=> console.log(error))


        setTimeout(()=>{console.log('prueba')},1000)
        //setInterval(()=>{
        //  console.log('obteniendo datos');
        //},1000)
        */
      

        //ejemplo2

        /*
        httpGet('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(value){
        console.log('Post 1 : ' , value);
        return httpGet('https://jsonplaceholder.typicode.com/posts/2');
        })
        .then(function(value) {
        console.log('Post 2: ', value);
        });
        */
        //ejemplo3
        /*
        asyncCall();
        */
        //ejemplo 4
      /*
       httpGet('https://jsonplaceholder.typicode.com/posts/1').then(function(value){ console.log(value) })
       httpGet('https://jsonplaceholder.typicode.com/posts/2').then(function(value){ console.log(value)})
      */

      //ejemplo5
      /*
      setTimeout(function() {
 
        console.log("Guardar detalle de una factura")
      
      },1000);
      
      setTimeout(function() {
      
        console.log("Guardar cabecera de factura")
      
      },3000);
      */
      promesa1().then(promesa2).then(function(){
        console.log('se guardO cabecera y detalle')
      }).catch(error=>{console.log(error)})
      .then(siguiente=>{
        console.log('se ejecuta a pesar de el error')
      })
      

        
    })
})


function httpGet(url) {
    return new Promise((resolve, reject) => {
        
      const xhr = new XMLHttpRequest();
      //throw "problemas al generar";
      /*try
      {
        throw "problemas al generar";
      }
      catch
      {
        reject("Problemas al consultar")
      } 
      */  
      
      xhr.open("GET", url);
      xhr.onload = () => 
        {
            //throw "problemas internos";
            /*
            try
            {
                throw "problemas al generar";
            }
            catch
            {
                reject("Problemas al consultar")
            }
            */
            resolve(xhr.responseText)
        };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }

  function resolverDespuesDe2Segundos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resuelto');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('llamando');
    const result = await resolverDespuesDe2Segundos();
    console.log(result);
    // salida esperada: 'resuelto'
  }
  

  var promesa1 = function() {
    return new Promise(function(resolver, cancelar) {

        setTimeout(function() {
            
            
            try
            {
              const xhr = new XMLHttpRequest();


              x===0;

              
              throw("error al guardar la factura")
              console.log("se guarda cabecera de la factura");
              resolver();
            }
            catch(error)
            {
              cancelar(error);
            }

            

            //cancelar('prblemas al guardar');

        }, 4000);
    });
}


var promesa2 = function() {
    return new Promise(function(resolver, cancelar) {

        setTimeout(function() {

            console.log("se guarda detalle de la factura");
            resolver();
        }, 2000);

    });
}