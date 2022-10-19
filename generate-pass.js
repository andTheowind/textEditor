const generateBtn = document.getElementById('generate-btn');
const outputPass = document.getElementById('output-pass');
const alphabet = 'oaeqwrt!@#$(89)^*&1234567zxcvb';
let newPass = '';

generateBtn.addEventListener('click', () => {
	generatePassFunc();
	outputPass.value = newPass;
	newPass = '';
})

const generatePassFunc = () => {

	for(let i = 0; i < alphabet.length; i++) {
		   
		let randomNum = Math.random()*30;  
		let newNum = Math.floor(randomNum);
		newPass += alphabet[newNum];	
		if(newPass.length > 14) {
		   break;
		}

	}

	return newPass;
}



