/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */


logTitle('Promises');
/* coding examples */

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("data back from server");
	}, 3000);

	setTimeout(() => {
		reject(" Error, no data back from server yet");
	}, 5000);
});


promise.then(response =>{
	log(response);
}).catch(error => {
	log(error);
});
