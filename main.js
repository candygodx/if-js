var user = 'John Doe';

console.log(user);

var student = 'Igor` Mitrofanov';

console.log(student);

var user = 'Igor` Mitrofanov';
// в переменной user значение поменяется
console.log(user);

var test = 1;

test++;

test += '1'
// в переменной test сейчас строка '21'
console.log(test);

test -= 1;
// в переменной test сейчас число 20
console.log(test);

var test = Boolean(20);
// пременная test имеет значение true
console.log(test);

const arrayM = [2, 3, 5, 8];
let sum = 1;

for (let i = 0; i < arrayM.length; i++) {
  sum *= arrayM[i];
}
console.log(sum);

const arrayBig = [2, 5, 8, 15, 0, 6, 20, 3];

for(let i = 0; i < arrayBig.length; i++) {
  if(arrayBig[i] > 5 && arrayBig[i] < 10) {
    console.log(arrayBig[i]);
  }
}

for(let i = 0; i < arrayBig.length; i++) {
  if(arrayBig[i] % 2 === 0) {
    console.log(arrayBig[i]);
  }
}

function isPalindrome(word) {
  return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
}
console.log(isPalindrome("madam"));

function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
console.log(min(10, 20));

function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
console.log(max(5, 20));

function tern (a, b) {
  return a < b ? a : b;
}
console.log(tern(55, 6));

const arrayLong = [10, 24, 40, 33, 64, 20, 78, 0, 8, 100];
const arrayZero = (arrayLong) => {
  return arrayLong.map((number) => {
    let str = '' + number;
    if (str.includes('0')) {
      return str.replace(/0/gim, 'zero');
    }
    else {
      return number;
    }
  })
}
console.log(arrayZero(arrayLong));

function summ(a) {
  return function(f) {
    return a += f;
  }
}
console.log(summ(5)(2));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const ids = ['text1', 'text2', 'text3'];

ids.forEach((id) => {
  const button = document.getElementById(id);
  let clickColor = 0;

  button.addEventListener('click', function() {
    button.style.color = colors[clickColor];
    clickColor++;
    if (clickColor >= colors.length) {
      clickColor = 0;
    }
  });
  })