/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */


logTitle('Async Await');
/* coding examples */


async function logName(name){
	log(name);
	// 1. we can yield promises using await
	const transformName = new Promise((resolve, reject) => {
		setTimeout(() => resolve(name.toUpperCase()), 1000);
	});

	const result = await transformName;
	log(result);
	// 2. return a promise
	return name;	
}

logName("Hafausatu").then(result => {
	log("result from async function = " + result);
});




// const getRandUsers = co(function* (n){
// 	const fetchRandUsers = yield fetch(`https://randomuser.me/api/?results=${n}`);
// 	const data = yield fetchRandUsers.json();
// 	return data;
// });

// getRandUsers(50).then(randUsers => {
// 	log(JSON.stringify(randUsers.results.length));
// 	randUsers.results.forEach(user => {
// 		const {gender, name :{title: ti, first :  fname, last: lName} ,email} = user;
// 		log(`${gender} - ${ti}, ${fname} ${lName} - ${email}`)
// 	})
// }).catch(err => log);


const getRandUsers = async n => {
	const fetchRandUsers = await fetch(`https://randomuser.me/api/?results=${n}`);
	const data = await fetchRandUsers.json();

	data.results.forEach(user => {
		const {gender, name :{title: ti, first :  fname, last: lName} ,email} = user;
		log(`${gender} - ${ti}, ${fname} ${lName} - ${email}`);
	});

	return data;
};


getRandUsers(100);