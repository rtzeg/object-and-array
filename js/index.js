let obj = {
    name: "Roma",
    age: 23,
    is_married: true,
    car: {
        model: "BMW",
        color: "red",
        year: 2019
    }
}
let house = "villa"

let my_age = obj.age  // 23 
obj.name = "Roman"  // изменить значение
obj.is_married = false 
obj.name = obj.name.toUpperCase()
obj.age = Math.pow(obj.age, 2)

obj.nickname = "RMN"  // добавить ключ
obj.my_home = house
delete obj.is_married
delete obj.nickname
console.log(obj.name);

console.log(my_age);
console.log(obj.car.model);
Object.freeze(obj)

delete obj.name
obj.clothes = "t-shirt"
console.log(obj);

let arr = [1, "str", true, {
    model: "BMW",
    color: "red",
    year: 2019
} ]

console.log(arr);

let keys = Object.keys(obj)
let val = Object.values(obj)
console.log(keys);
console.log(val);
let a = {
    b: 2,
    c: 4,
    d: 5
}

let e = {
    w: 4,
    b: 4,
    x: 6
}
let obj2 = Object.assign(e, a)
console.log(obj2);


let obj3 = {
    name: prompt('введите имя'),
    surname: prompt('введите фамилию'),
    age: +prompt('введите возраст') 
}
console.log(obj3);

// 3 промта
// имя фамилию год рождения
// записалось в ваш новый объект
// законсолить объект











// let iter = 0 
// for (let index = 0; index <= 100; index+=2) {
//   console.log(index); // подсчет цифр 0 2 4 6 ... 100
//   iter+=1 

// }
//  console.log(iter); // подсчет действий итерации 0 1 2 3 ... 51 


// let ages = [19,12,14,15,17,18,21,19,10]
// console.log(ages.includes(15, 4));

// console.log(ages.lastIndexOf(19));
// console.log(ages.indexOf(19));

// console.log(ages.indexOf(18));
// for(let item of ages){
//   if((item % 2) == 0){
//     console.log(item);
//   }else{
//     console.error(item);
//   }
// }


// let ask = prompt('heelo')

// if(ask == 'hello'){
// let age = 20
// console.log(age);
// }else{
// alert('hello')
// }



// console.log(names.sort());

// let age = +prompt('введите возраст')

// if(age >= 18){
//   alert('входи')
// }else{
//   alert('не входи')
// }


// let accessAllowed = (age >= 18) ? true : false;

// console.log(accessAllowed);
// отсортирвать его по буквам 
// сделать конфирм купить машину
// если да то показать список имен
// каждая машины будет соответсвовать номеру массива для выбора
// когда выбрали машину покажите ее характеристики и
// спроситие хотите ли вы ее купить
// если да то вы поздравляеете и пишете вы приобрели машину и ее характеристики
// если нет то спрашиваете почему и закидываете ответ в консоль




// у вас есть клуб в котором собираются люди только с именем на букву П
// т.е вы сделалете модальное окно и будете спрашивать его имя 
// после того как вы пропустили человека спросите его возраст
// если он не совершеннолетний не пропускайте
// после пропуска спросите сколько у него будет денег. Если 
// меньше 100 то выгоните если больше пропустите его 

// let ask = confirm('вопрос который хотите задать')
// сделать конфирм купить машину
// если да то в модальнои окне показать список имен машин
// пример 1) джентра 2) Жугили 3) Кобольт
// каждая машины будет соответсвовать номеру
// т.е. я могу написать в модальное окно либо название машины либо номер 
// и тогда она выдаст мне саму машину и скажет вы точно хотите купить ее ? 
// если да то поздравляете. если нет то скажите что будем рады увидеть вас снова


// let arr = [1,2,3,4,5,6,7,8, 10]
// let nine = 9
// // добавление в конец 
// arr.push(0)
// arr.push(nine)
// arr.push({name: 'men', sername: 'gentleman'})

// // Добавление в начало 
// arr.unshift(10)
// arr.unshift(11)
// // удаление с начала
// arr.shift()
// arr.shift()
// // удаление с конца
// arr.pop()

// arr.sort((a,b) => b-a)
// arr.reverse().reverse()
// let arr2 = ['Roma', "Daler", "Konstantin", "Dier", 'ozodbek']

// // crtl + c
// let arr3 = arr2.slice(2, 4) // откуда до куда

// let arr4 = arr2.splice(2, 2) // откуда, сколько 
// // объединение массивов
// arr2 = arr2.concat(arr4, arr)

// console.log(arr);
// console.log(arr2, arr3, arr4);
// for(let item of Masiv){
  
  
//   if( item.age < 40 ){
//   m.push(item)
//   }
  
//   if(item.name == 'Alisher'){
//     user = item
//   }

// }
// let hatico = Masiv.find(item => item.name == "Alisher"  && item.age == 54)

// let sm = Masiv.some(item => item.age < 40)  // хотя бы одно значение должно быть верным


// let ev = Masiv.every(item => item.age < 40) // все значение должны быть такие 
// console.log(sm, ev);


// let filt = Masiv.filter(item => item.age < 40)
// let mp = filt.map(item => item.age + 1)

// console.log(m, filt, mp)
// console.log(user);
// console.log(hatico);
// let nm;
// let ages = []
// for (let item of Masiv) {
//   item.income = item.age + 200
//   if (item.name == "Saidbek") {
//     nm = item
//   }
//   if (item.age >= 20) {
//     ages.push(item)
//   }
// }
// console.log(nm);
// // методы массива все 


// let find_el = Masiv.find(item => item.name == "Saidbek")

// console.log(find_el);

// let filt = Masiv.filter(item => item.age >= 20)

// let new_arr = Masiv.map((item) => {
//   return item.age + 200
// })
// let new_arr2 = Masiv.map(item => item.age + 200)

// console.log(filt);
// console.log(ages);
// console.log(new_arr);
// console.log(new_arr2);






// let map_23 = users.map(item => item + 2)

// console.log(map_23);
// users = users.sort((a, b) => b - a)
// let user2 = users.map(item => item - 2)

// let user3 = users.some(item => item == 2)

// user3 = users.every(item => item == 2)
// console.log(users, user2);
// console.log(user3);
// users.forEach(item => {
//   item = item + 2
// });

// console.log(users);

// let users_n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// let odd = []
// for (let item of users_n) {
//   if ((item % 2) == 0) {
//     odd.push(item)
//   }
// }
// let filt_n = users_n.filter(item => item % 2 == 0)
// let odd_for = []
// users_n.forEach(item => {
//   if (item % 2 == 0) {
//     odd_for.push(item)
//   }
// })

// let reduce = users_n.reduce((item, sum) => {
//   return sum + item
// }, 0)

// console.log(odd);
// console.log(filt_n);
// console.log(odd_for);
// console.log(reduce);





// arr_arr = arr_arr.flat(Infinity)
// [[[1,2,3]]]

// arr_arr[0] = [[1,2,3]]
// arr_arr[0][0] = [1,2,3]
// arr_arr[0][0][1] = 2




// console.log(arr_arr[arr_arr.length - 1][1][0][0]);
// for (let item of arr_arr) {
//   if (typeof (item) !== "number") {
//     for (let element of item) {
//       if (typeof (element) !== "number") {
//         for (let i of element) {
//           if (typeof (i) !== "number") {
//             for (let e of i) {
//               console.log(e);
//             }
//           }
//         }
//       }
//     }
//   }
// }






















// Раскидать людей в разные массивы в зависимости от их почты
// let users = [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
//   {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   },
//   {
//     "id": 3,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//       "street": "Douglas Extension",
//       "suite": "Suite 847",
//       "city": "McKenziehaven",
//       "zipcode": "59590-4157",
//       "geo": {
//         "lat": "-68.6102",
//         "lng": "-47.0653"
//       }
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//       "name": "Romaguera-Jacobson",
//       "catchPhrase": "Face to face bifurcated interface",
//       "bs": "e-enable strategic applications"
//     }
//   },
//   {
//     "id": 4,
//     "name": "Patricia Lebsack",
//     "username": "Karianne",
//     "email": "Julianne.OConner@kory.org",
//     "address": {
//       "street": "Hoeger Mall",
//       "suite": "Apt. 692",
//       "city": "South Elvis",
//       "zipcode": "53919-4257",
//       "geo": {
//         "lat": "29.4572",
//         "lng": "-164.2990"
//       }
//     },
//     "phone": "493-170-9623 x156",
//     "website": "kale.biz",
//     "company": {
//       "name": "Robel-Corkery",
//       "catchPhrase": "Multi-tiered zero tolerance productivity",
//       "bs": "transition cutting-edge web services"
//     }
//   },
//   {
//     "id": 5,
//     "name": "Chelsey Dietrich",
//     "username": "Kamren",
//     "email": "Lucio_Hettinger@annie.ca",
//     "address": {
//       "street": "Skiles Walks",
//       "suite": "Suite 351",
//       "city": "Roscoeview",
//       "zipcode": "33263",
//       "geo": {
//         "lat": "-31.8129",
//         "lng": "62.5342"
//       }
//     },
//     "phone": "(254)954-1289",
//     "website": "demarco.info",
//     "company": {
//       "name": "Keebler LLC",
//       "catchPhrase": "User-centric fault-tolerant solution",
//       "bs": "revolutionize end-to-end systems"
//     }
//   },
//   {
//     "id": 6,
//     "name": "Mrs. Dennis Schulist",
//     "username": "Leopoldo_Corkery",
//     "email": "Karley_Dach@jasper.info",
//     "address": {
//       "street": "Norberto Crossing",
//       "suite": "Apt. 950",
//       "city": "South Christy",
//       "zipcode": "23505-1337",
//       "geo": {
//         "lat": "-71.4197",
//         "lng": "71.7478"
//       }
//     },
//     "phone": "1-477-935-8478 x6430",
//     "website": "ola.org",
//     "company": {
//       "name": "Considine-Lockman",
//       "catchPhrase": "Synchronised bottom-line interface",
//       "bs": "e-enable innovative applications"
//     }
//   },
//   {
//     "id": 7,
//     "name": "Kurtis Weissnat",
//     "username": "Elwyn.Skiles",
//     "email": "Telly.Hoeger@billy.biz",
//     "address": {
//       "street": "Rex Trail",
//       "suite": "Suite 280",
//       "city": "Howemouth",
//       "zipcode": "58804-1099",
//       "geo": {
//         "lat": "24.8918",
//         "lng": "21.8984"
//       }
//     },
//     "phone": "210.067.6132",
//     "website": "elvis.io",
//     "company": {
//       "name": "Johns Group",
//       "catchPhrase": "Configurable multimedia task-force",
//       "bs": "generate enterprise e-tailers"
//     }
//   },
//   {
//     "id": 8,
//     "name": "Nicholas Runolfsdottir V",
//     "username": "Maxime_Nienow",
//     "email": "Sherwood@rosamond.me",
//     "address": {
//       "street": "Ellsworth Summit",
//       "suite": "Suite 729",
//       "city": "Aliyaview",
//       "zipcode": "45169",
//       "geo": {
//         "lat": "-14.3990",
//         "lng": "-120.7677"
//       }
//     },
//     "phone": "586.493.6943 x140",
//     "website": "jacynthe.com",
//     "company": {
//       "name": "Abernathy Group",
//       "catchPhrase": "Implemented secondary concept",
//       "bs": "e-enable extensible e-tailers"
//     }
//   },
//   {
//     "id": 9,
//     "name": "Glenna Reichert",
//     "username": "Delphine",
//     "email": "Chaim_McDermott@dana.io",
//     "address": {
//       "street": "Dayna Park",
//       "suite": "Suite 449",
//       "city": "Bartholomebury",
//       "zipcode": "76495-3109",
//       "geo": {
//         "lat": "24.6463",
//         "lng": "-168.8889"
//       }
//     },
//     "phone": "(775)976-6794 x41206",
//     "website": "conrad.com",
//     "company": {
//       "name": "Yost and Sons",
//       "catchPhrase": "Switchable contextually-based project",
//       "bs": "aggregate real-time technologies"
//     }
//   },
//   {
//     "id": 10,
//     "name": "Clementina DuBuque",
//     "username": "Moriah.Stanton",
//     "email": "Rey.Padberg@karina.biz",
//     "address": {
//       "street": "Kattie Turnpike",
//       "suite": "Suite 198",
//       "city": "Lebsackbury",
//       "zipcode": "31428-2261",
//       "geo": {
//         "lat": "-38.2386",
//         "lng": "57.2232"
//       }
//     },
//     "phone": "024-648-3804",
//     "website": "ambrose.net",
//     "company": {
//       "name": "Hoeger LLC",
//       "catchPhrase": "Centralized empowering task-force",
//       "bs": "target end-to-end models"
//     }
//   }
// ]
// let emails = {
//   org: [],
//   net: [],
//   info: []
// }
// let other = []
// for(let item of users){

  


// }



// let arr3 = [1, 'hello', true, 2, 3, 'world', undefined, null, 'error', 22];

// let iter = 0
// let n = 0 
// for(let item of arr3){
//    iter++

//   if(typeof(item) === 'number'){
//     n+=1 
//   }
// }
// if(n >5){
// console.log('good');  
// }else{
//   console.log('bad');
// }
//   console.log(iter);
// console.log(n);

// let arr = [
//   {
//       id: Math.random(),
//       name: 'Timur',
//       info: {
//           school: '235',
//           faculity: 'SMM'
//       },
//   },
//   {
//       id: Math.random(),
//       name: 'Imran',
//       info: {
//           school: 'ne izvestno',
//           faculity: 'programming'
//       },
//   },
//   {
//       id: Math.random(),
//       name: 'Aminjon',
//       info: {
//           school: '444',
//           faculity: 'Dizayn'
//       },
//   },
//   {
//       id: Math.random(),
//       name: 'Maxmud',
//       info: {
//           school: '777',
//           faculity: '3dsmax'
//       },
//   },
//   {
//       id: Math.random(),
//       name: 'Muxammad',
//       info: {
//           school: '5555',
//           faculity: 'Backend'
//       },
//   },
//   {
//       id: Math.random(),
//       name: 'Timur',
//       info: {
//           school: '235',
//           faculity: 'SMM'
//       },
//   },
//   {
//       id: Math.random(),
//       name: 'Imran',
//       info: {
//           school: 'ne izvestno',
//           faculity: 'programming'
//       },
//   },
//   {
//       id: Math.random(),
//       name: 'Aminjon',
//       info: {
//           school: '444',
//           faculity: 'Dizayn'
//       },
//   },
//   {
//       id: Math.random(),
//       name: 'Maxmud',
//       info: {
//           school: '777',
//           faculity: '3dsmax'
//       },
//   },
//   {
//       id: Math.random(),
//       name: 'Maxmud',
//       info: {
//           school: '777',
//           faculity: '3dsmax'
//       },
//   },
//   {
//       id: Math.random(),
//       name: 'Muxammad',
//       info: {
//           school: '5555',
//           faculity: 'Backend'
//       },
//   },
// ]

// let categories = [
//   {
//       course: ' SMM',
//       count: 0
//   },
//   {
//       course: 'PROGRAMMING',
//       count: 0
//   },
//   {
//       course: '     3DSMAX',
//       count: 0
//   },
//   {
//       course: ' DIZAYN',
//       count: 0
//   },
//   {       
//       course: '   BACKEND',
//       count: 0
//   },
// ]



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let total = []


// for(let item of arr){
//   if(item % 2 !== 0){
//     total.push(item)
//   }


//  1 % 2 = 0.5 => 1
  
// total+=item
//0 + 1 = 1
//1 + 2 = 3
//3 + 3 = 6
//6 + 4 = 10
//10 + 5 = 15
//15 + 6 = 21
//21 + 7 = 28
//28 + 8 = 36
//36 + 9 = 45
//45 + 10 = 55 
// } 


// console.log(total);



// * 1. Добавить элемент "abc" с индексом 10.
// *
// * 2. Выведите результирующий массив в консоль. Объясните результаты.
// *
// * 3. Какова длина конечного массива?
// */

// const myArray = [1, 2]
// myArray[10] = 'abc'
// console.log(myArray);

//  const m_arr = [true, null]
//  m_arr.unshift('Привет')
//  m_arr.unshift(100)
//  console.log(m_arr) // [100, "Hello", true, null]
// let cars = [
//     {
//         carBrand: 'Audi',
//         price: 100,
//         isAvailableForSale: true
//     },
//     {
//         carBrand: 'BMW',
//         price: 200,
//         isAvailableForSale: false
//     },
//     {
//         carBrand: 'Mercedes',
//         price: 300,
//         isAvailableForSale: true
//     },
// ]
// cars.push({
//     carBrand: 'Ford',
//     price: 400,
//     isAvailableForSale: true
// })
// let ask = prompt('кого удалить из списка людей  Aleksey, Kartoshka, Margarita, Morgenshtern, Monica')
// let people = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
// people.splice(people.indexOf(ask), 1)
// //people.indexOf(ask)  - индекс поискова элемента в массиве
// // people.splice(1, 1)

// console.log(people);


// let school = ["Aleksey", "Kartoshka", "Margarita", "Morgenshtern", "Monica"]
// let school33 = ["Andrey", "Sergey", "Svetlana", "Oleg"]

// let down_school = {
//     people: "Alex",
//     people2: "Misha",
//     people3: "Ivan",
//     people4: "Igor"
// }
// down_school = Object.values(down_school)

// let all = school.concat(school33, down_school)
// console.log(all);