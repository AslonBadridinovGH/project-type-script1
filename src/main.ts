/*
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
*/


   const numbers: number[] = [1,2,3,4,5]

   console.log( numbers.map(value => value * 2 ));

   const wordsArray: String[] = ["word","Hi","People","HelloFriends"]

   wordsArray.filter(value => value.length>5).forEach(value => console.log(value))


   const numbersArray : number[] = [10, 11, 15, 20, 30];

   const result = numbersArray.reduce((result, currentValue) => result+currentValue);
   console.log(result)


 const someArray : number[] = [1,9, 5, 8, 3];

 let boolean = someArray.some((value) => {

        if (value>10){
           return true;
        }
 });
 console.log(boolean);


   // BONUS
   const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

   let numbers1 = list.sort((a, b) => b-a);

   console.log(numbers1);


   let numbers2 = list.map(value => value*value);
   console.log(numbers2)

    numbers2.sort((a, b) => a-b).splice(0,2);
    console.log(numbers2)

   numbers2.sort((a, b) => b-a).splice(0,4);
   console.log(numbers2)

   let numbers3 = numbers2.filter(value => value%4 !== 0);
   console.log(numbers3)

   let number4 = numbers3.reduce((result, value) => result+value);
   console.log(number4);


