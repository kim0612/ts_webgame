let numOne = Math.ceil(Math.random() * 9);
let numTwo = Math.ceil(Math.random() * 9);
let result = numOne * numTwo;

const word = document.createElement('div');
word.textContent = `${numOne} multiple ${numTwo} = ?`;
document.body.append(word);

const form = document.createElement('form');
document.body.append(form);

const input = document.createElement('input');
form.append(input);

const button = document.createElement('button');
button.type = 'submit';
button.textContent = '입력!';
form.append(button);

const resultDiv = document.createElement('div');
document.body.append(resultDiv);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(result === Number(input.value)){ //정답 맞춘경우
    resultDiv.innerText = '정답!';
    numOne = Math.ceil(Math.random() * 9);
    numTwo = Math.ceil(Math.random() * 9);
    word.textContent = `${numOne} multiple ${numTwo} = ?`;
    result = numOne * numTwo;
    input.value = '';
    input.focus();
  } else { //틀린경우
    resultDiv.innerText = '땡!';
    input.value = '';
    input.focus();
  }
})