/*
#dFeorS3m7u
- Знайти та вивести довижину настипних стрінгових значень*!/
'hello world', 'lorem ipsum', 'javascript is cool'*/

const helloWorld = 'hello world';
const loremIpsum = 'lorem ipsum';
const javascriptIsCool = 'javascript is cool';

console.log(helloWorld.length, loremIpsum.length, javascriptIsCool.length);

/*#8lld9HMxXWB
- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/

console.log(helloWorld.toUpperCase(), loremIpsum.toUpperCase(), javascriptIsCool.toUpperCase());

/*#ClDsAm7xba7
- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/

console.log(helloWorld.toLowerCase(), loremIpsum.toLowerCase(), javascriptIsCool.toLowerCase());

/*#0b89BkYZwu
- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/

const str = ' dirty string   ';

console.log(str.trim());

/*#bfoJuse4ZzP
- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/

let string = 'Ревуть воли як ясла повні';

const stringToArray = (str) => str.split(' ');

console.log(stringToArray(string));

/*#Rbr5kEQ
- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.*/

const numArr = [10,8,-7,55,987,-1011,0,1050,0];

const strArr = numArr.map(number => number.toString());

console.log(strArr);

/*
#5hqyKTfmc
- створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
    або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/

const nums = [11,21,3];

const numsToBigger = [...nums];
const numsToSmaller = [...nums];

const sortToUp = numsToBigger.sort((num1,num2) => num1 - num2);
const sortToDown = numsToSmaller.sort((num1,num2) => num2 - num1);

const sortNums = (direction) => console.log(direction);
sortNums(sortToUp);
sortNums(sortToDown);

/*
#yo06d74c1C
- є масив

-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

/*-- відсортувати його за спаданням за monthDuration*/
const sortMonthDur = coursesAndDurationArray.sort((dur1,dur2) => dur2.monthDuration - dur1.monthDuration);

console.log(sortMonthDur);

/*-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/
const filteredMonthDuration = coursesAndDurationArray
    .filter((duration) => duration.monthDuration > 5);

console.log(filteredMonthDuration);

/*-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/
const newCoursesAndDurationArray = coursesAndDurationArray.map((course,index) => {
    return {id: index + 1 , ...course};
});

console.log(newCoursesAndDurationArray === coursesAndDurationArray);

console.log(newCoursesAndDurationArray);

/*
#bolvdlhP
{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king'
    color:'', // 'red','black'
}*/

/*описати колоду карт (від 6 до туза без джокерів)*/
const cardSuits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6','7','8','9','10','ace','jack','queen','king'];

const deck = cardSuits.map(suit => {
    return values.map(value => {
        return {
            suit: suit,
            value: value
        };
    });
}).flat();

console.log(deck);

/*- знайти піковий туз*/

const spadeAce = deck.filter(card => card.suit === 'spade' && card.value === 'ace');

console.log(spadeAce);

/*- всі шістки*/

const allSixCards = deck.filter(card => card.value === '6');

console.log(allSixCards);

/*- всі червоні карти*/

const foundRedCards = [];
for (const redCards of deck) {
    if (redCards.suit === 'diamond' || redCards.suit === 'heart') {
        foundRedCards.push(redCards);
    }
}
if (foundRedCards) {
    console.log('you got all red cards');
}else {
    console.log('cards not found');
}

console.log(foundRedCards);

/*- всі буби*/

const foundDiamondCards = [];
for (const diamondCards of deck) {
    if (diamondCards.suit === 'diamond') {
        foundDiamondCards.push(diamondCards);
    }
}
if (foundDiamondCards) {
    console.log('all diamond cards');
}else {
    console.log('cards not found');
}

console.log(foundDiamondCards);

/*- всі трефи від 9 та більше*/

const foundClubsCards = [];
for (const clubsCards of deck) {
    if ((Number(clubsCards.value) > 8 || clubsCards.value === 'jack' || clubsCards.value === 'queen' || clubsCards.value === 'king' || clubsCards.value === 'ace' ) && clubsCards.suit === 'clubs'){
        foundClubsCards.push(clubsCards);
    }
}
console.log(foundClubsCards);

/*#EP5I1UUzAX
Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
}*/

const groupedCards = deck.reduce((accumulator, card) => {
    accumulator[card.suit].push(card);
    return accumulator;
}, { spade: [], diamond: [], heart: [], clubs: [] });

console.log(groupedCards);

/*#4LJn7zBx
взяти з arrays.js масив coursesArray
*/

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

/*--написати пошук всіх об'єктів, в яких в modules є sass*/
const sassCourses = coursesArray.filter(course => course.modules.includes('sass'));

console.log(sassCourses);

/*--написати пошук всіх об'єктів, в яких в modules є docker*/
const dockerCourses = coursesArray.filter(course => course.modules.includes('docker'));

console.log(dockerCourses);
