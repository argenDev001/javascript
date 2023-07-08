// NUMBER-
// Math.(floor, ceil,trunc,round,random,sqrt)
// floor- ылдыйга тоголоктоп берет


// let num1 = 3.14;
// let num2 = -2.5;
//
// console.log(Math.floor(num1)); // 3
// console.log(Math.floor(num2)); // -3

// ceil - ойдону коздой тоголоктоп берет
// let num1 = 3.14;
// let num2 = -2.5;
//
// console.log(Math.ceil(num1)); // 4
// console.log(Math.ceil(num2)); // -2
// trunc - сандын бүтүн бөлүгүн кайтарат.
// let a =100.37
// console.log(Math.trunc(100.37));
//
// round- эң жакын бүтүн санга тегеректелген санды кайтарат.
// let a = 20.50
// console.log(Math.round(a))
//
//random - возврвшает случайные числы и.т.д
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// console.log(getRandomInt(100));
//sqrt - квадраттын тамырын кайтарат
// function calcHypotenuse(a, b) {
//     return (Math.sqrt((a * a) + (b * b)));
// }
//
// console.log(calcHypotenuse(10, 20));


// STRING - "",'',``
// 1.length -узундугун чыгарып берет
// 2.slice() - кесип алып берет
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// 3.splice() - учурдагы элементтерди алып же алмаштырып же жаны элементти кошуп берет  кошуп берет
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months);
// 4.split() -жаны масив кайтарып берет
// 5.concat() - эки элементтерди  кошуп берет бир масивке чыгарып берет
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);
// 6.repeat() - жаны страканы кайтарат жана кайталап чыгарып берет
// let a = 'abc'
// console.log(a.repeat(10))
// 7.charAt() - корсотулгон символду страканынын ичиненен кайтарып берет  мисалы кайсы индексти жазсан ошол индексте турган тамганы чыгарат
// 8.substring() - возврвщает страку
//  const str = "Hello World dfghjkl";
// console.log(str.substring(0));
// const anyString = 'Mozilla';
//
// // Отобразит 'Moz'
// console.log(anyString.substring(6 ,3));
//
//  const str = "JavaScript";
// console.log(str.substring(4, 8)); // Output: "Script"
//
//  const str = "Web Development";
// console.log(str.substring(4, 11)); // Output: "Developm"
//  const str = "Programming";
// console.log(str.substring(0, 5)); // Output: "Progr"
//
//  const str = "Frontend";
// console.log(str.substring(3)); // Output: "tend"
// // 9.substr() - узундугун кестп берет
// const str = 'Mozilla';
//
// console.log(str.substr(1, 2));
// 10.toLowerCase() - тамгаларды кичирейтип берет
// 11.toUppercase() - тамгаларды чонойтуп берет
// 12.indexOf() - элементтер кайсы индексте турганын чыгарып берет
// 13.lasIndexOf() - индекстерин чыгарып берет но толька наварот
// 14.includes() - страканын ичиндеги берилген командаларды текшерип эгерде ошол команданын ичиндеги значения болсо true болбосо false ч.б
// 15.trim(start ,end),- страканыны ичиндеги тоскоолдук жараткан символдорду очурот
// let  orig = '        foo  ';
// console.log(orig.trim());


//
// IF-ternary operator - {
// условие ? выражение1 : выражение2
// function getFee(isMember) {
//    return (isMember ? '$2.00' : '$10.00');
// }
// }
// typeof () - кайсы типте экенинин чыгарат
// console.log(typeof 42);
// console.log(typeof 'blubber');
// console.log(typeof true);

// логические операторы {
// && (expr1 && expr2)-и
// ||(expr1 || expr2)- или
// ! (!expr)- бул оператор false кайтарат эгер операнд true болсо анда true кайтарат не
//

// function testNum(a) {
//     let result;
//     if (a > 0) {
//         result = 'positive';
//     } else {
//         result = 'NOT positive';
//     }
//     return result;
// }
//
// console.log(testNum(-5));
//
// FUNCTIONS -declaration,expression,anonymous(callback),arrow
//
// ARRAY -
// Push, pop, shift,unshift ,sort,
// filter() -бардык элементтери менен жаңы массивди түзөт.
// filter((element, index, array) => { ... } )
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//
// const result = words.filter(word => word.length > 3);
//
// console.log(result);
// map() - озуно ключ значеняларды камтыйт
// const map1 = new Map();
//
// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);
//
// console.log(map1.get('a'));
// reduce() -
// ,some,find,every,fill, new Array массивдин тиби (true,false) localeCompare ,
// // reverse()-на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
// var myArray = ['один', 'два', 'три'];
// myArray.reverse();
//
// console.log(myArray) // ['три', 'два', 'один']
// concat
//
// OBJECT - keys, values, entries,assign,freeze
//
// Delete
// Function object,variables
// Object кайрылуу турлору
//
// spread operator {},[]
//
// LOOPS-for,while,do while
//
//     Break,continue
//
//     Carrying

// function createPerson(name, age) {
//     const person = {};
//     person.name = name;
//     person.age = age;
//     return person;
// }
//
// console.log(createPerson("John", 30))
// console.log()
// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let a = [-1, -2, -3, -4, 5]
// let b = 0
// for (let i = 0; i <= a.length; i++) {
//     if (a[i] > 0 ){
//         b+=a[i]
//     }
//
// }
// console.log(b)


// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }
// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент
// со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// let obj = {Ширин: '1000', Айжан: '500', Атай: '200'}
// // obj.Атай
// // obj.Ширин
// console.log(obj.Атай)
// console.log(obj.Ширин)
//
// 11. Вам дан массив [true, '1234', 325]. Напишите функцию, которая проверяет, все ли элементы массива относятся к одному типу данных.


// 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова. Если длина слова нечетная, верните средний символ.
//     Если длина слова четная, вернуть 2 средних символа.


// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите на экран столбец
//  тех элементов массива, которые больше 3-х, но меньше 10.
// let a = [3, 4, 6, 12, 3, 5]
// for (let i = 0; i <= a.length; i++) {
//     if (a[i] > 3 && a [i]< 10) {
//         console.log(a[i])
//     }
//
// }

// const arr = ['dfghty', 'edfghjkl', 'dfghjk'];
//
// const newArr = arr.map((str, index) => index + 1 ${str});
//
// console.log(newArr)


//  Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]
//  Выведите все id в консоль через map.

// let obj = [{id: 3}, {id: 5}, {id: 6}, {id: 7}]
//
// obj.map((el) => {
//
// })
//
// console.log(obj)
//

// (-) между каждыми двумя четными числами. Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.
// let b = "025468"


//  Вам дан массив со строками ['Lorem ipsum dor sit omet devour il ela sit'].
//  Выведите каждый нечетный индекс в строке в верхнем регистре.

// let arr = ['Lorem ipsum dor sit omet devour il ela sit']
// arr.map(() => {
//     if (arr % length !== 0) {
//     }
// })
// console.log(arr)

//  Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = '';

for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
        result += '-' + arr[i];
    } else {
        result += '-' + arr[i];
    }
}

result += '-';

console.log(result);



















