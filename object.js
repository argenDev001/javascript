//primitive

//refense

// OBJECT - {}

// let obj = {
//     name: 'Argen',
//     age: '19',
//     surname: 'Adiletov',
//     job: 'developer',
//     phone: +996228946313,
//     sports: {
//         onlineGame: 'FIFA',
//         game: 'footbol',
//     },
//     books: ['javascript', 'Python']
//
// }
//
// Object.freeze(obj)
// delete obj.sports
// obj.hobby = 'coding'
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.surname)
// console.log(obj.phone)
// console.log(obj.books)
//
//
// console.log(obj)


//--TACK--//

// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// let obj = {a: 1, b: 2, c: 3}
// console.log(Object.keys(obj).length)

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент
// с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.

// let obj = {a: 1, b: 2, c: 3}
// console.log(obj['c'])
// console.log(obj.c)


// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'};
// Выведите на экран зарплату Атая и Ширин.
// let obj = {Ширин: '1000', Айжан: '500', Атай: '200'}
// console.log(obj.Атай)
// console.log(obj.Ширин)

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Измените зарплату Атая на 500.
// let obj = {Ширин: '1000', Айжан: '500', Атай: '200'}
// obj.Атай = '500'
// console.log(obj)
// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Добавьте к объекту ключ Медет со значением 1500.
// let obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// obj.Медет = 1500
// console.log(obj)
// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите значение ключа salary в консоль.
// let  obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(obj.Атай.salary)
// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала
// недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// let days = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };
// let today = new Date().getDay();
//
// console.log('Сегодня ' + days[today]);
//
// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
// Выведите день недели, соответствующий значению переменной day.
// let tack = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };
//
// let day = 6;
//
// console.log('Это ' + tack[day]);

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}. Получите все ключи объекта.
// let obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
//
//
// console.log(Object.keys(obj))
// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.
// let obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.values(obj))
// const obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}};
// const values = Object.values(obj).map(item => typeof item === 'object' ? item.salary : item);
// console.log(values);

// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.
// let obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.entries(obj))
// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.
// function tack (obj) {
//     const tack1 = obj.name.length;
//     if (tack1 % 2 === 0) {
//         console.log(0);
//     } else {
//         console.log(1);
//     }
// }
// tack({name: 'Igor'})
// console.log(tack);
// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.
// function  tack (obj){
//     obj.map(obj => console.log(obj.id));
// }
// tack([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ])
// function task(arr){
//     return arr.map(el =>{
//         return el.id
//     })
// }
//
// console.log(task([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]))

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением

// function tack (obj){
//     obj.age = 25
//     console.log(obj)
// }
// const user ={name:'Igor'}
// tack(user)

// let user = {
//     id: 1,
//     'my name is ': 'argen'
// }
// console.log(user['my name is '].toLowerCase().split('').map((el, idx) => {
//     if (idx % 2 !== 0) {
//         return el.toUpperCase()
//     }
//      return el
// }).join(''))

