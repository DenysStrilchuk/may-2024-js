/*#AiN5CoUQ
Створити функцію, яка робить глибоку копію об'єкту.
Додати перевірки на undefined, null, NaN.
    Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.*/

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        if (typeof obj === 'number' && isNaN(obj)) {
            return NaN;
        }
        return obj;
    }

    if (Array.isArray(obj)) {
        const copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i]);
        }
        return copy;
    }

    if (typeof obj === 'function') {
        return obj;
    }

    const copy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}

const original = {
    a: 1,
    b: null,
    c: NaN,
    d: [1, 2, { e: 3 }],
    f: function () { console.log('Hello'); },
};

const copy = deepCopy(original);

console.log(copy);


/*
#iz6emEsP2BA
- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
    Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції*/


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let transformedArray = coursesAndDurationArray.map((course, index) => ({ id: index + 1, title: course.title, monthDuration: course.monthDuration }));

console.log(transformedArray);
