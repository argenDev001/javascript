//
// let a = [];
// let b = [];
// for (let i = 0 ;i < 100; i ++) {
//     if (i % 2 === 0) {
//         console.log(a.push(i))
//     } else {
//         console.log(b.push(i));
//     }
//
// }
// console.log(a, b)



// 1. Выведите столбец чисел от 1 до 50.
// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }
// 2. Создайте переменную с пустым массивом, заполните массив 10-ю
// элементами X с помощью цикла.
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push('X');
// }
// console.log(arr)
// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла
// for выведите все эти элементы в консоль.
// let arr = [5, 3, 1, 2, 7];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for
// найдите произведение элементов этого массива.
// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for
// найдите сумму элементов этого массива. Запишите ее в переменную result.
// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора
// if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.
// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for
// и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран
// только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла
// for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления
// не станет меньше 50. Какое число получится? Посчитайте количество итераций,
// необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его
// элементов (сумма элементов, делить на количество).
// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму
// квадратов элементов этого массива.
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** 2;
}
console.log(sum)

// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
// С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// 17. Создайте переменную с пустым массивом, заполните массив 10-ю
// случайными числами от 1 до 10 с помощью цикла.
// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].
// Создайте цикл, который выводит нечетные числа, которые больше 10.
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10 && arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }
// 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.
// let str = 'jzvzszrzpz';
// let newStr = '';
// for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 1) {
//         newStr += str[i].toUpperCase();
//     } else {
//         newStr += str[i];
//     }
// }
// console.log(newStr);
