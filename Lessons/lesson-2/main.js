/*Масиви та об'єкти:

/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

const arr = ['Hello', 'world', 'Denys', 'Strilchuk', 33, 3.14, true, false, 8, 1,];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/

const bookDescription1 = {
    title: 'History',
    pageCount: 87,
    genre: 'history'
};
const bookDescription2 = {
    title: 'Math',
    pageCount: 200,
    genre: 'math'
};
const bookDescription3 = {
    title: 'Geography',
    pageCount: 105,
    genre: 'geography'
};

console.log(bookDescription1, bookDescription2, bookDescription3);

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
масивом. Кожен автор має поля name та age.*/

const bookDescription4 = {
    title: 'History',
    pageCount: 87,
    genre: 'history',
    authors: [
        {
            name: 'Vasia',
            age: 42}
    ]
};
const bookDescription5 = {
    title: 'Math',
    pageCount: 200,
    genre: 'math',
    authors: [
        {
            name: 'Kolia',
            age: 56}
    ]
};
const bookDescription6 = {
    title: 'Geography',
    pageCount: 105,
    genre: 'geography',
    authors: [
        {
            name: 'Kokos',
            age: 19}
    ]
};

console.log(bookDescription4, bookDescription5, bookDescription6);

/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль ' +
'пароль кожного користувача*/

const usersArr = [
    {
        name: 'Kolia',
        username: 'Kol',
        password: 1234
    },
    {
        name: 'Vasya',
        username: 'Vas',
        password: 5678
    },
    {
        name: '',
        username: '',
        password: 9101
    },
    {
        name: 'Vitia',
        username: 'Vit',
        password: 1213
    },
    {
        name: 'Ivan',
        username: 'Iv',
        password: 1415
    },
    {
        name: 'Nina',
        username: 'Nin',
        password: 1617
    },
    {
        name: 'Petya',
        username: 'Pet',
        password: 1819
    },
    {
        name: 'Olia',
        username: 'Ol',
        password: 2021
    },
    {
        name: 'Masha',
        username: 'Mash',
        password: 2223
    },
    {
        name: 'Yulia',
        username: 'Yul',
        password: 2425
    },
];

console.log(usersArr[0].password);
console.log(usersArr[1].password);
console.log(usersArr[2].password);
console.log(usersArr[3].password);
console.log(usersArr[4].password);
console.log(usersArr[5].password);
console.log(usersArr[6].password);
console.log(usersArr[7].password);
console.log(usersArr[8].password);
console.log(usersArr[9].password);

/*- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
    Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний
масив з 21 значенням вичключаємо одразу*!/*/

const weatherTemperatureArr = [
    {
        day1: {
            morning: 12,
            day: 20,
            evening: 18
        }
    },
    {
        day2: {
            morning: 13,
            day: 18,
            evening: 16
        }
    },
    {
        day3: {
            morning: 13,
            day: 18,
            evening: 16
        }
    },
    {
        day4: {
            morning: 13,
            day: 18,
            evening: 16
        }
    },
    {
        day5: {
            morning: 13,
            day: 18,
            evening: 16
        }
    },
    {
        day6: {
            morning: 13,
            day: 18,
            evening: 16
        }
    },
    {
        day7: {
            morning: 13,
            day: 18,
            evening: 16
        }
    }
]

console.log(weatherTemperatureArr[0]);
console.log(weatherTemperatureArr[1]);
console.log(weatherTemperatureArr[2]);
console.log(weatherTemperatureArr[3]);
console.log(weatherTemperatureArr[4]);
console.log(weatherTemperatureArr[5]);
console.log(weatherTemperatureArr[6]);

/*Логічні розгалуження:

/*- Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
     що дорівнює 1, 0, -3
 */

let x = +prompt('Please enter a number')

if (x !== 0) {
    console.log('true');
} else {
    console.log('false');
}

/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
попадає число (в першу, другу, третю или четверту частину години).*/

let time = +prompt('Enter a number from 0 to 59');

if (time > 0 && time <= 15) {
    console.log('first quarter');
} else if (time > 15 && time <= 30) {
    console.log('second quarter');
} else if (time > 30 && time <= 45) {
    console.log('third quarter');
} else if (time > 45 && time <= 59) {
    console.log('fourth quarter')
} else {
    console.log('wrong value');
}

/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це
число (у першу, другу чи третю).*/

let day = +prompt('Enter the number of day');

if (day > 0 && day <= 10 ) {
    console.log('first decade');
} else if (day > 10 && day <= 20) {
    console.log('second decade');
} else if (day > 20 && day <= 31) {
    console.log('third decade');
} else {
    console.log('wrong value')
}

/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
    відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/

switch (+prompt('Please enter the day of the week number')) {
    case 1:
        console.log('We make a cat, a bear and a hippo out of paper.');
        break;
    case 2:
        console.log('Go play with the ball, get used to the sport with love.');
        break;
    case 3:
        console.log('Let\'s read a magical fairy tale so that we don\'t forget such goodness.');
        break;
    case 4:
        console.log('Let\'s paint together with a brush the family and the landscape, peace in Ukraine,' +
            ' the best mountains and the beach.');
        break;
    case 5:
        console.log('Let\'s dance and sing, discover new talents!');
        break;
    case 6:
        console.log('We clean the house together, we always remember cleanliness.');
        break;
    case 7:
        console.log('We study a poem for our grandmother and read it clearly.');
        break;
    default:
        console.log('It is wrong value');
}
/*
- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/

let y = +prompt('enter any number');
let z = +prompt('enter any number');

if (y > z) {
    console.log(y);
} else if(z > y) {
    console.log(z);
} else {
    console.log('the numbers are the same');
}

/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
    тобто ті, які приводиться до false, а це 0 null undefined і тд).*/


let someMeaning = NaN;

someMeaning = someMeaning || 'default';

console.log(someMeaning);

/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration'] > 5) {
    console.log('Super');
} else {
    console.log('It\'s OK');
}
if (coursesAndDurationArray[1]['monthDuration'] > 5) {
    console.log('Super');
} else {
    console.log('It\'s OK');
}
if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log('Super');
} else {
    console.log('It\'s OK');
}
if (coursesAndDurationArray[3]['monthDuration'] > 5) {
    console.log('Super');
} else {
    console.log('It\'s OK');
}
if (coursesAndDurationArray[4]['monthDuration'] > 5) {
    console.log('Super');
} else {
    console.log('It\'s OK');
}
if (coursesAndDurationArray[5]['monthDuration'] > 5) {
    console.log('Super');
} else {
    console.log('It\'s OK');
}

