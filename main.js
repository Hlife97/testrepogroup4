// let x = 'hello';

// x[0] = 'K'

// console.log(x[0])


// console.log(x);

// console.log(typeof x);


// let x = 4

// console.log(typeof x)

// let y = [1, 2, 'salam', true, 5, undefined, null, ['aleykum', ['asdasd']]];

// let arr = []

// console.log(typeof arr)

// console.log(y)

// y[1] = 66

// console.log(y)


// var age = 23


// let name = 'fazil'

// // ureyim istese deyiwirem

// const passport = true

// const arr = [2, 3, 4, 5, 6];

// arr[3] = 88

// console.log(arr)

// let str = 'javascript'

// console.log(str.length)

// function uzunluq(str) {
//     let r = 0;
//     for (let i = 0; i < str.length; i++) {
//         r++;
//     }

//     return r
// }

// console.log(uzunluq('salam Aleykum'))

// const passport = '';

// if (passport) {
//     console.log('Beli True\'dur')
// }

// console.log(passport)

// let x = null;

// console.log(x)

// let x = 6

// let y = 2;

// y -= x;

// console.log(y)

// let x = 5

// let y = 5

// console.log(x == y)

// * Primitive data types

// string, number, boolean, undefined, null, symbol

// let numbers = [34, 67, 8, 9, 12];
// let sum = 0; // undefined


// console.log(sum);
// for (i = 0; i < array.length; i++) {
//     sum += array[i];
// }

// console.log(sum)

// number = numbers[0]
// number = numbers[1]
// number = numbers[2]
// number = numbers[3]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(i);
// }

// for (const number of numbers) {
//     sum = sum + number;
// }

// console.log(sum)

// ! Conditions

// let passport = false;

// if (passport == false) {
//     console.log('kece bilmersiniz.')
// }

// if (passport) {
//     console.log('kece bilmersiniz.')
// }

// let age = 17;

// let passport = false;

// let driveL = true;

// // * Eyer passportum varsa kece bilerem. amma eyer passpoortum yoxdursa yuasim 18 den boyukdurse yene kece bilerem.
// // * Eyer pravam varsa passportum yoxdursa yasin ferqi yoxdu yene kece bilerem.


// if (passport == true || age > 18 && driveL == true) {
//     console.log('kece bilerem');
// } else {
//     console.log('kece bilmersen')
// }

// let numbers = [23, 43, 5, 6, 7, 8]

// for (let i = 0; i < numbers.length; i++) {

// }

// let i = 6;

// do {
//     console.log(numbers[i])
//     i++
// } while (i < numbers.length);

// while (i < numbers.length) {
//     console.log(numbers[i])

//     i++
// }


const array = [5, 2, 1, 7, 0, 9, 4];
// 1 ci addim [2, 5, 1, 7, 0, 9, 4];
// 2 ci addim [2, 1, 5, 7, 0, 9, 4];
// 3 ci addim [2, 1, 5, 0, 7, 9, 4];
// 4 ci addim [2, 1, 5, 0, 7, 4, 9];
// 5 ci addim [1, 2, 5, 0, 7, 4, 9];
// 6 ci addim [1, 2, 0, 5, 7, 4, 9];

// const bosArray = [array[0]];

for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length; j++) {

        if (array[j] > array[j + 1]) {

            let x = array[j]; // x = 5 oldu //2 ci addim x = 5 olacaq

            array[j] = array[j + 1]; // 0 ci index yeni 5 artiq 2 oldu // 1 ci index 1 e beraber olacaq

            array[j + 1] = x; //1 ci index yeni 2 ci eleman olacaq 5 // 2 ci index 5 e beraber olacaq
        }

    }

}

// console.log(array)
5 * 4 * 3 * 2 * 1
1 * 2 * 3 * 4 * 5
let result = 1;

function hesafla(mezahir) {
    if (mezahir == 0 || mezahir == 1) {
        return 1;
    }
    for (let i = 1; i <= mezahir; i++) {
        result *= i;
    }

    return result;
}

console.log(

    hesafla(5)

)