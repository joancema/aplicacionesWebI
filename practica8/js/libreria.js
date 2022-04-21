var { fromEvent } = rxjs;
var { map } = rxjs.operators;


fromEvent(btnejemplo, 'click').pipe(
  map(() => Date.now())
).subscribe(date => {
  console.log('Fue presionado: ' + Date(date).toString());
});

