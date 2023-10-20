// indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.
// Для перебора элементов:

// forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
// Для преобразования массива:

// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split/join – преобразует строку в массив и обратно.
// reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
// Дополнительно:

// Array.isArray(arr) проверяет, является ли arr массивом.

// 1. Добавление  элементов push() unshift()
// 2. Удаление shift() pop() splice()
// 3. indexOf() includes() 

// =  // присваивание они в начале когда мы создаем переменные
// == // просто обычно равно которое означает (=)
// === // строгое равенство очень строго проверяет все

let arr = []
let obj = {}

let str = true;


console.log(typeof str);

console.log(typeof arr, typeof obj);
console.log(Array.isArray(arr), Array.isArray(obj), Array.isArray(str));
let n = NaN
let num = 2
console.log(typeof n, typeof num);
console.log(Number.isNaN(n), Number.isNaN(num));

let previouslyMaxSafeInteger = 9007199254740991n

console.log(typeof previouslyMaxSafeInteger);
console.log(previouslyMaxSafeInteger);


// number, NaN, Infinity, -Infinity, string, boolean, object, array,
// null, undefined, biginteger, symbol

// let masiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let massiv = ["alex", "bob", "jin", "john"]
// let massiv2 = [true, false, true, false, false]
// let massiv3 = [{ name: "alex", age: 20 }, { name: "bob", age: 20 }]

// let massiv4 = [[], [], [], []]
// let massiv5 = ['str', 24, false, null, {}]


let massiv = [1, 2, 3, 4,12, 5, 10,6, 7, 8, 9,0]
console.log(massiv.length);
console.log(massiv[0]);
console.log(massiv[massiv.length - 1]);
// удаление элементов
massiv.pop() // удаление с конца
massiv.shift() // удаление с начала
// добавление элементов
massiv.unshift(1) //добавление в начало
massiv.push(11) // добавление в конец

massiv.reverse()
massiv.reverse()

massiv.sort((a,b)=> a - b)
// перебор элементов в тип данных стринг и назад
// massiv = massiv.join('')
// massiv = massiv.split('')
console.log(massiv)

let imena = ["alex", 'joji', 'andery', 'sam', "bob", "jin", "john"]
imena.sort() 

 console.log(imena);