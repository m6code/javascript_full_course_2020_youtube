/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */


logTitle('Generators');
/* coding examples */

const getStuffs = function* (){
	yield 1;
	yield "Hello";
	yield true;
	yield {name: "Alex"};
	yield ["Mary", "browning"];
	return "Done Done Done"
}

const numbersGen = getStuffs();

// console.log(numbersGen.next());
// console.log(numbersGen.next());
// console.log(numbersGen.next());
// console.log(numbersGen.next());
// console.log(numbersGen.next());
// console.log(numbersGen.next());

log(numbersGen.next().value);
log(numbersGen.next().value);
log(numbersGen.next().value);
log(numbersGen.next().value);
log(numbersGen.next().value);
log(numbersGen.next().value);



const getNums = function* (numbers) {
	for(let i = 0; i < numbers.length; i++){
		yield numbers[i];
	}
}

const getNumsGen = getNums([1,2,3,4,67]);

const interval = setInterval(() => {
	const next = getNumsGen.next();
	if(next.done){
		log("This Generator is done");
		clearInterval(interval);
	}else{
		// const number = next.value;
		// log(number);
		log(next.value);
	}
}, 1000);