// Module: 31---> 31.2--> Access value ,nested object , Optional chaining 

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 65000 },
        { id: 2, name: 'macbook', price: 165000 },
    ]
}

// console.log(products);
// console.log(products.data);
// console.log(products.data[0]);
// console.log(products.data[1].price);
// ------------------------------------------------------------------
const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: ' 54 / 1 uttor side',
            second: "poribag er goli",
            third: 'no dorai',
        },
        city: 'Dhaka',
    }

}

// console.log(user.address.street.second);
// --------------------------------------------------------------------
const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: "Bangladesh",
    }
}

// console.log(user.address.street?.second);
// console.log(user2.address.street?.country);

// 33.2-->Array map to do one line loop magic
// ----------------------------------------------------------------------
const numbers = [4, 5, 2, 8, 10];
const doubled = [];

for (const num of numbers) {
    const double = num * 2;
    doubled.push(double);
}
// console.log(doubled);
// --------------------------------------------------------------------
// const numbers = [4, 5, 2, 8, 10];
function doubledIt(num) {
    // console.log('num now', num)
    return num * 2;
}
const result = numbers.map(doubledIt);
// console.log(result);
// ---------------------------------------------------------------------
// const numbers = [4, 5, 2, 8, 10];
const double2 = n => n * 2;
const output = numbers.map(double2);
// console.log(output);
// ------------------------------------------------------------
// const numbers = [4, 5, 2, 8, 10];
const numbers2 = [8, 5, 6, 9, 4];
const output2 = numbers2.map(n => n * 2);
// console.log(output2);
// ---------------------------------------------------------------
const numbers3 = [34, 4, 6, 2, 7];

const doubled3 = numbers3.map(num => num * 3);
// console.log(doubled3);

// ----------------------------------------------------------------

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const lengths = friends.map(friend => friend.length);
// console.log(lengths);
const firstLetter = friends.map(friend => friend[0])
// console.log(firstLetter);

// ---------------------------------------------------------------------
// 31.4-->forEach, filter,find and differences between them:
const numbers4 = [1, 5, 6, 3, 14];
// const result1 = numbers4.forEach(n => console.log(n))
// console.log(result1);
// --------------------------------------------------------------------
const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter(p => p % 2 === 1);
// console.log(selected);
// ------------------------------------------------------------------
const friends1 = ['Tom', 'John', 'Micheal', 'Oliver', 'Tim'];
const oddfriends = friends1.filter(friend => friend.length > 4);
// console.log(oddfriends);
// ------------------------------------------------------------------
// const players = [75, 65, 67, 72, 55, 59];
const selected = players.find(player => player > 80);
// console.log(selected);
// ------------------------------------------------------------------


// 31.5-->(Recap) Map ,forEach, filter,find, reduce:
const products1 = [
    { id: 1, name: 'lenova', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 40000 },
    { id: 4, name: 'macbook', price: 150000 },

]
const names = products1.map(product => product.name)
// console.log(names);
const prices = products1.map(product => product.price);
// console.log(prices);
// products1.forEach(p => console.log(p.id));
// console.log(products1);

const expensive = products1.filter(p => p.price < 50000);
// console.log(expensive);

const affordable = products1.find(p => p.price < 50000);
// console.log(affordable);

const total = products1.reduce((acum, current) => acum + current.price, 0);
// console.log(total);

// 31.6--> (optional) Introduction to class object:
class Product {
    country = 'Bangldesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking anout ${talk}`)
    }
}
const lenova = new Product('Le le lenova')
// console.log(lenova)
// lenova.speak('oba kita kau')
// ---------------------------------------------------------------
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        // console.log('Sir is teaching Math')
    }
}
const tapan = new Teacher('Tapab sir', 'Physics');
// console.log(tapan);
// tapan.lecture('all right');
// ---------------------------------------------------------------------------
// 31.7-->(optional) Introduction prototypical inheritance:

class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        // console.log('gari cole na')
    }
}
class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
    road() {
        // console.log('chittagong to brahmanaBaria')
    }
}
class Truck extends Vehicle {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }
    chada() {
        // console.log('more e more e chada dite hoy');
    }
}
const gari = new Bus('bus e othle bomi ase', 600000, '40', '150 Tk');
// console.log(gari);
// gari.road('where from where');
// ------------------------------------------------------------------------------------------
// 31.8--> (advanced) this keyword ,Dot notation vs bracket notation:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`Sleeping now ${this.name}`)
    }
    activity() {
        console.log(`work going to ${this.age}`)
    }
}

const kodom = new Person('Kodom ali', 21);
// console.log(kodom);
// kodom.sleep();
// kodom.activity();

const badam = new Person('Kacha badam', 23);
// console.log(badam);
// badam.sleep();
// badam.activity();

// not working in this code
// const lazy = kodom.sleep;
// lazy();

// Dot or Bracket notation
const person = {
    name: 'kodom ali',
    job: 'badam khai',
    3: 'third',
    'add-dress': 'kochu khet'
}
const prop = 'job';
console.log(prop);
console.log(person[prop]);
console.log(person.job);
console.log(person['job']);
console.log(person['name']);
console.log(person[3]);
console.log(person['3']);
// console.log(person.3);

console.log(person['add-dress']);
// console.log(person[add - dress]);

