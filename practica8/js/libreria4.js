var { fromEvent } = rxjs;
var { map } = rxjs.operators;
var { filter } = rxjs.operators;

let typing =    fromEvent(document,'keyup');


let password= 
typing.pipe(filter(ev => ev.target.id == 'password'), map((el)=>{
    return el.target;
}))


let subscripcion = password.subscribe((pos)=>{
    

    let passwordx = pos.value;
    if (passwordx.length<5)
    {
        passwordError.textContent = 'La contrasena es muy corta';
        pos.className= 'has-error'
    }
    else
    {
        passwordError.textContent = 'La contrasena es ideal';
        pos.className= ''
    }
})

