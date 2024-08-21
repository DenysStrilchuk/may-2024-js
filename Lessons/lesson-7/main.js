/*

/*
#XjJuucOMR0
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const usersArr = [];

for (let i = 1; i < 11; i++) {
    const user = new User(i, `Denys ${i}`, `Str ${i}`, `den@gmail${i}.com`, `+38099123445${i}`);
    usersArr.push(user);
}

console.log(usersArr);

/*
#2ikXsE2WiKZ
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/

const filteredUsers = usersArr.filter((value) => !(value.id % 2));

console.log(filteredUsers);

/*#pOeHKct
- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/

const sortUsers = usersArr.sort((user1, user2) => user1.id - user2.id);

console.log(sortUsers);

/*#nkMXISv
- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientArr = [];

for (let i = 11; i < 21; i++) {
    let newClient = new Client(i,
        'Name' + i,
        'Surname' + i,
        'name' + i + '@gmail.com',
        80677441123 + i,
        ['potatoes' + i, 'tomatoes' + i, 'bananas' + i, 'berries' + i]);
    clientArr.push(newClient);
}

console.log(clientArr)

/*#8abtVjRv
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/

const sortGoods = clientArr.sort((goods1, goods2) => goods1.order.length - goods2.order.length);

console.log(sortGoods);

/*#vV9a6584I5
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,' +
' максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

function Car(model,producer,yearOfManufacture,maxSpeed,engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        console.log('model -',this.model);
        console.log('producer -',this.producer);
        console.log('yearOfManufacture -',this.yearOfManufacture);
        console.log('maxSpeed -',this.maxSpeed)
        console.log('engineCapacity -',this.engineCapacity);
        console.log('driver -',this.driver);
    }
    this.increaseMaxSpeed  = function (newSpeed) {
        maxSpeed += newSpeed;
        console.log(`Максимальна швидкість піднята на ${newSpeed}, нова максимальна швидкість складає ${maxSpeed}`);
    }
    this.changeYear = function (newValue) {
        yearOfManufacture = newValue;
        console.log(`Рік випуску ${newValue}`);
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

const car1 = new Car("maseratti", 'italy',2021, 380, 215);
car1.drive();
car1.increaseMaxSpeed(40);
car1.changeYear(2024);
car1.addDriver('Kokos');
car1.info();

/*#5kla3yMpgp
- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

class CarClass {
    constructor(model,producer,yearOfManufacture,maxSpeed,engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = null;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`)
        }
        this.info = function () {
            console.log(`model - ${model}`);
            console.log(`produser - ${producer}`);
            console.log(`yearOfManufacture - ${yearOfManufacture};`);
            console.log(`maxSpeed - ${maxSpeed};`);
            console.log(`engineCapacity - ${engineCapacity};`);
            console.log('driver -', this.driver);
        }
        this.increaseMaxSpeed = function (newSpeed) {
            maxSpeed += newSpeed;
            console.log(`Швидкість збільшено на ${newSpeed}, нова швидкість складає ${maxSpeed}`);
        }
        this.changeYear = function (newValue) {
            yearOfManufacture = newValue;
            console.log(`Новий рік випуску становить ${newValue}`)
        }
        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }
}

const car2 = new CarClass('Honda', 'Japan',2022, 280, 2.1);
car2.drive();
car2.increaseMaxSpeed(40);
car2.changeYear(2024);
car2.addDriver('Abrikos');
car2.info();

/*#zg6Fifnqig
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

class CinderellaClass {


    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellasArr = [];
for (let i = 1; i < 11; i++) {
    let newCinderella = new CinderellaClass('Cinderella_' + i,18 + i, 22 + i);
    cinderellasArr.push(newCinderella);
}
console.log(cinderellasArr);

class Prince {

    constructor(name,age,findShoe) {
        this.name = name;
        this.age = age;
        this.findShoe = findShoe;
    }
}

let prince = new Prince('Habib', 25, 28);
console.log(prince)

for (const cinderella of cinderellasArr) {
    if (cinderella.footSize === prince.findShoe) {
        console.log(`${cinderella.name}, повинна бути із принцом`);
    }
}

let findCinderella = cinderellasArr.find((value) => value.footSize === prince.findShoe);
console.log(findCinderella);

/*#gsKLAsNWM
*Через Array.prototype. створити власний foreach, filter*!/*/

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const arr = [1, 2, 3, 4, 5];

arr.myForEach((item, index, array) => {
    console.log(`${item}, ${index}, [${array}]`);
});



Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArr = arr2.myFilter(item => !(item % 2));
console.log(filteredArr);



