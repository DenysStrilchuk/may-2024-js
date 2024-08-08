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






