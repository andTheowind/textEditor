


let headTitle = 'Онлайн редактор текста';
let arr = headTitle.split('');
let myTitle = document.querySelector('#my-title');


function myFunc() {
	arr.length > 0 ? myTitle.innerHTML += arr.shift() : clearTimeout(interval);
	let interval = setTimeout(myFunc, 90)
}
myFunc();
