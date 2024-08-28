/*
#8Nmt60ZT
- створити блок,
    - додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.*/

let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.backgroundColor = '#0000ff';
block.style.color = '#fff';
block.style.fontSize = '20px';
block.textContent = 'Hello Okten!!!';
document.body.appendChild(block);
let cloneBlock = block.cloneNode(true);
document.body.appendChild(cloneBlock);

/*#OPLI89c9G
- Є масив:
    ['Main','Products','About us','Contacts']
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)*/

let array = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement('ul');

array.forEach(function (itemText) {
    let li = document.createElement('li');
    li.textContent = itemText;
    ul.appendChild(li);
});

document.body.appendChild(ul);

/*
#jeBqHV525U5
- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let block = document.createElement('div');
    let title = coursesAndDurationArray[i].title;
    let monthDuration = coursesAndDurationArray[i].monthDuration;
    block.textContent = `Title: ${title}, Duration: ${monthDuration} months;`;
    document.body.appendChild(block);
}

/*
    #Kx1xgoKy8
    - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
    з title  елементу, та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.*/

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let div = document.createElement('div');
    div.classList.add('item');

    let title = coursesAndDurationArray[i].title;

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = `Title: ${title}`

    let monthDuration = coursesAndDurationArray[i].monthDuration;

    let p = document.createElement('p');
    p.classList.add('description');
    p.textContent = `Duration: ${monthDuration}`;

    div.append(h1, p);
    document.body.appendChild(div);
}
