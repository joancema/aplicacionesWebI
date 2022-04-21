var { fromEvent } = rxjs;
var { map } = rxjs.operators;


var theButton = document.getElementById('the-btn');

fromEvent(theButton, 'click').pipe(
  // pipe some operators here
  map(() => Date.now())
).subscribe(date => {
  console.log('Clicked at ' + date);
});