import { html, render } from "lit-html";
import { Observable } from "rxjs";
import { tw } from "twind";

const x = tw`h-screen bg-purple-400 flex items-center justify-center`;
let y = tw`font-bold text(center 9xl white sm:gray-800 md:pink-800)`;

let z = "bye";
z = "WERWE";
// Declare a template
const myTemplate = html`<div class="${x}">
  ${z}
  <h1 class="${y}">This is Twind!</h1>
</div>`;

// Render the template
render(myTemplate, document.body);

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log("just before subscribe");
observable.subscribe({
  next(x) {
    console.log("got value " + x);
  },
  error(err) {
    console.error("something wrong occurred: " + err);
  },
  complete() {
    console.log("done");
  }
});
console.log("just after subscribe");
