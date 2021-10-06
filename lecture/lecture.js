var numOne = Math.ceil(Math.random() * 9);
var numTwo = Math.ceil(Math.random() * 9);
var result = numOne * numTwo;
var word = document.createElement('div');
word.textContent = numOne + " multiple " + numTwo + " = ?";
document.body.append(word);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
form.append(input);
var button = document.createElement('button');
button.type = 'submit';
button.textContent = '입력!';
form.append(button);
var resultDiv = document.createElement('div');
document.body.append(resultDiv);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (result === Number(input.value)) { //정답 맞춘경우
        resultDiv.innerText = '정답!';
        numOne = Math.ceil(Math.random() * 9);
        numTwo = Math.ceil(Math.random() * 9);
        word.textContent = numOne + " multiple " + numTwo + " = ?";
        result = numOne * numTwo;
        input.value = '';
        input.focus();
    }
    else { //틀린경우
        resultDiv.innerText = '땡!';
        input.value = '';
        input.focus();
    }
});
