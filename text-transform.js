const input = document.querySelectorAll('.main > input');
const myInput = document.querySelector('.myInput');
const weightBoldBtn = document.querySelector('.weight-bold-btn');
const italicsBtn = document.querySelector('.italics-btn');
const underlineBtn = document.querySelector('.underline-btn');
const strikethroughBtn = document.querySelector('.strikethrough-btn');
const chooseColor = document.querySelector('#chooseColor');
const changeFontSize = document.querySelector('#fontSizeDD');
const uppercase = document.querySelector('#uppercase');
const lowerCase = document.querySelector('#lowerCase');
const firstSymbolUppercase = document.querySelector('#first-symbol-uppercase');
const firstSymbolLowercase = document.querySelector('#first-symbol-lowercase');
const deleteSpaces = document.querySelector('#delete-spaces');
const underscores = document.querySelector('#underscores');
const result = document.querySelector('#result');
const clearBtn = document.querySelector('#clear');
const deleteNums = document.querySelector('#delete-nums');
const deleteAllUppercase = document.querySelector('#delete-symbol-uppercase');

weightBoldBtn.addEventListener('click', function() {
	myInput.classList.toggle('font-weight-bold');
	result.classList.toggle('font-weight-bold');
});

italicsBtn.addEventListener('click', function() {
	myInput.classList.toggle('font-italics');
	result.classList.toggle('font-italics');
});

underlineBtn.addEventListener('click', function() {
	myInput.classList.toggle('font-underline');
	result.classList.toggle('font-underline');
});

strikethroughBtn.addEventListener('click', function() {
	myInput.classList.toggle('font-strikethrough');
	result.classList.toggle('font-strikethrough');
});

chooseColor.addEventListener('change', function() {
	myInput.style.color = this.value;
	result.style.color = this.value;
});

changeFontSize.addEventListener('change', function() {
	myInput.style.fontSize = this.value + 'px';
	result.style.fontSize = this.value + 'px';
});

underscores.addEventListener('click', function() {

	let inputStr = myInput.value;
	inputStr = inputStr.replace(/ +/g, ' ').trim();
	let arr = inputStr.split('');
	let newStr = '';
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] !== ' ') {
			newStr += arr[i];
		} else {
			newStr += '_';
		}
	}
	result.value = newStr;

});

deleteNums.addEventListener('click', function() {

	let inputStr = myInput.value;
	let arr = inputStr.split('');
	let newStr = '';
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] !== ' ' && +arr[i] !== Number(arr[i])) {
			newStr += arr[i];
		} else if(arr[i] === ' ') {
			newStr += arr[i];
		}
	}
	result.value = newStr;

});

deleteAllUppercase.addEventListener('click', function() {

	let inputStr = myInput.value;
	let arr = inputStr.split('');
	let newStr = '';
	for(let i = 0; i < arr.length; i++) {
		let elemUpperCase = arr[i].toUpperCase();
		if(arr[i] !== elemUpperCase && arr[i] !== ' ') {
			newStr += arr[i]; 
		} else if(arr[i] === ' ') {
			newStr += arr[i]; 
		}
	}
	result.value = newStr;

});

clearBtn.addEventListener('click', function() {
	myInput.value = '';
	result.value = '';
});



let str = '';

uppercase.addEventListener('click', function() {
	str = myInput.value;
	result.value = str.toUpperCase();
});

lowerCase.addEventListener('click', function() {
	str = myInput.value;
	result.value = str.toLowerCase();
});

firstSymbolUppercase.addEventListener('click', function() {

	str = myInput.value;
	let arr = str.split(' ');
	let res = [];
	for(let i = 0; i < arr.length; i++) {
		let el = arr[i][0].toUpperCase() + arr[i].slice(1);
		res.push(el);
	}
	let newStr = res.join(' ');
	result.value = newStr;
	
});

firstSymbolLowercase.addEventListener('click', function() {

	str = myInput.value;
	let arr = str.split(' ');
	let res = [];
	for(let i = 0; i < arr.length; i++) {
		let el = arr[i][0].toLowerCase() + arr[i].slice(1);
		res.push(el);
	}
	let newStr = res.join(' ');
	result.value = newStr;
	
});

deleteSpaces.addEventListener('click', function() {

	str = myInput.value;
	str = str.replace(/ +/g, ' ').trim();
	result.value = str;

});
