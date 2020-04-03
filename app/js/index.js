/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */


logTitle('Promises');
/* coding examples */

const namesPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(["John", "Jones", "E-Kelly", "Sharon"]);
	}, 3000);

	setTimeout(() => {
		reject(" Error, no data back from server yet");
	}, 5000);
});


const surnamesPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(["Blake", "Manny", "Black", "James"]);
	}, 3000);

	setTimeout(() => {
		reject(" Error, no data back from server yet");
	}, 5000);
});


Promise.all([namesPromise, surnamesPromise]).then(data =>{
	const [names, surnames] = data;
	for (let i = 0; i<names.length; i++){
		const name = names[i];
		const surname = surnames[i];
		log(`${name} ${surname}`);
	}
}).catch(error =>{
	log(error);
});
