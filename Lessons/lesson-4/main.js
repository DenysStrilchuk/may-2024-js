/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*!/*/

function rectangleArr(a, b) {
    return console.log(a * b);
}

rectangleArr(10, 12);
rectangleArr(20, 15);
rectangleArr(15, 22);

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/

function circleArr(r) {
    const pi = 3.14;
    console.log(pi * (r * r));
}

circleArr(12);
circleArr(15);
circleArr(18);

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/

function cylinderArr(h, r) {
    const pi = 3.14;
    console.log((2 * pi) * (r * h));
}

cylinderArr(20, 13);
cylinderArr(18, 27);
cylinderArr(16, 37);

/*
- створити функцію яка приймає масив та виводить кожен його елемент*/

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = [111, 222, 333, 444, 555];

function arrOutput(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

arrOutput(array1);
arrOutput(array2);

/*- створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент*/

function makeP(text) {
    document.write(`<p>${text}</p>`)
}

makeP('Hello');
makeP('My');
makeP('Name');

/*- створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати
 через аргумент всім однаковий*/

function makeLi(text) {
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`)
}

makeLi('Some text');

/*- створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li
визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write*/

function makeLi2(text, numLi) {
    document.write(`<ul>`)
    for (let i = 0; i < numLi; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}

makeLi2('New some text', 2);
makeLi2('Another some text', 3);

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
та виводить його через document.write*/

function arrOutputForTable(num, str, bool) {
    document.write(`<ul>`)
    document.write(`<li>${num}</li>
                        <li>${str}</li>
                        <li>${bool}</li>
                                   `)
    document.write(`</ul>`)
}

arrOutputForTable(12, 'text', true);

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
'Для кожного об'єкту окремий блок.*/

let arr = [];

function userArr(id, name, age) {
    let obj = {id, name, age};
    arr.push(obj);
    document.write(`<div>ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}</div>`)
}

userArr(1, 'Denys', 33);
userArr(2, 'Anna', 18);
userArr(3, 'Nick', 25);

/*- створити функцію яка повертає найменьше число з масиву*/
let numArr = [12, 34, 56, 2, 32, 55, 66, 43];

function smallestNum(arr) {
     let smallest = arr[0];
    for (const arrElement of arr) {
      if(arrElement < smallest ) {
          smallest = arrElement;
      }
    }
    console.log(smallest);
}

smallestNum(numArr);

/*- створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
    Приклад sum([1,2,10]) //->13*/

let sumArr = [1,2,3,4];

function sum(arr) {
    let summa = 0;
    for (let i = 0; i < arr.length; i++) {
        summa += arr[i];
    }
    console.log(summa)
}

sum(sumArr);

/*
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/

let arr2 = [11, 22, 33, 44];

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

let swaps = swap(arr2, 0, 1);

console.log(swaps);

/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400*!/*/

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let result;
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            result = sumUAH/currencyValue.value;
        }
    }
    return result;
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));

