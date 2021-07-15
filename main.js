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
  if(arrayBig[i] % 2 === 0 && arrayBig[i] > 0) {
    console.log(arrayBig[i]);
  }
}