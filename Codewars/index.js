/* 
Функция, которая возвращает массив , где удалено каждое второе значение.

function removeEveryOther(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr.splice(i + 1, 1));
  }
  let keep = arr;

  return keep;
}


console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8])); */


/* 
Функция, которая возвращает значение в миллисекундах

function past(h, m, s){
  let hours = Math.round(h*3600000); 
  let minute = Math.round(m*60000);
  let seconds = Math.round(s*1000);
 
  res = hours + minute + seconds;
  
  return res;
}

console.log(past(2,5,7)); */

/*
Считаем массив из строк и цифр

const sumMix = x => x.reduce((a, b) => +b + a, 0);

console.log(subMix([9, 3, '7', '3'])); */

/* Вернуть индекс элемента в массиве

function findNeedle(haystack) {
  let position = 'needle';
  let res = haystack.indexOf(position);
    
    return `found the needle at position ${haystack.indexOf(position)}`; */


/* const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1)); */

/* function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

console.log(enough(50, 25, 25));
console.log(enough(50, 45, 25)); */

/* Если твой балл выше среднего бала учащихся то вернется true , если нет то false

function betterThanAverage(classPoints, yourPoints) {
  return (classPoints.reduce((acc, num) => acc +num,0)/classPoints.length) < yourPoints ? true : false;
} */


/* let firstCheck = false,
  secondCheck = false,
  access = (firstCheck && secondCheck) == false ? "Доступ запрещён" : "Доступ разрешён";

console.log(access); */


/* function sumTwoSmallestNumbers(numbers) {
  let [a, b] = numbers.sort((a, b) => a - b)
  console.log(numbers.sort((a, b) => a - b))

  return a + b
}


console.log(sumTwoSmallestNumbers([10, 11, 9, 3, 22])); / */ /* 13 */

/* функция, которая возвращает булевое значение в видео строки
function booleanToString(b){
  return b.toString();
}
booleanToString(true);
*/


/*  */

/* function removeSmallest(numbers) {
  let arr = Math.min(...numbers);

  return arr;
}

console.log(removeSmallest([1,2,3,4,5,])); */

/* 
function printerError(s) {
  // your code
  var count = 0;
  for(var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return `${count}/${s.length}`;
}
console.log(printerError("aaaaaaaaaaadssddsdsaasadasdasdwiqidqiwfkksllflmfmfmaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")); */

