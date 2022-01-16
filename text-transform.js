let input = document.querySelectorAll('.main > input');
let myInput = document.querySelector('.myInput');
let weightBoldBtn = document.querySelector('.weight-bold-btn');
let italicsBtn = document.querySelector('.italics-btn');
let underlineBtn = document.querySelector('.underline-btn');
let strikethroughBtn = document.querySelector('.strikethrough-btn');
let chooseColor = document.querySelector('#chooseColor');
let changeFontSize = document.querySelector('#fontSizeDD');
let uppercase = document.querySelector('#uppercase');
let lowerCase = document.querySelector('#lowerCase');
let firstSymbolUppercase = document.querySelector('#first-symbol-uppercase');
let firstSymbolLowercase = document.querySelector('#first-symbol-lowercase');
let deleteSpaces = document.querySelector('#delete-spaces');
let result = document.querySelector('#result');


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
