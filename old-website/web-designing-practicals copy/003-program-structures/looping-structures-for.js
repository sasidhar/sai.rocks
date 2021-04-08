/*
    for(start; end; increment) {
        repeat this code from start to end everytime incrementing
    }
*/

// for (let i = 1; i <= 10; i = i + 1) {
//     console.log(i);
// }

// Print 3, 6, 9, 12, 15, .... 300

// for (let j = 3; j <= 300; j = j + 3) {
//     console.log(j)
// }

// /*
//     3, 6, 9, 12, 15, .... 300
//     1, 2, 3, 4,  5, ......100
// */

// for(let k = 1; k <= 100; k++) {
//     console.log(k * 3)
// }

// // Print 25, 30, 35, 40, 45, 50, 55, 60, .... 100

// for (let a = 25; a <= 100; a = a + 5) {
//     console.log(a)
// }

// // 25, 30, 35, 40, 45, ...... 100
// // 5, 6, 7, 8, 9, ........... 20

// for(let a = 5; a <= 20; a++) {
//     console.log(a * 5)
// }

// Print 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, ..... 95
// subtract 8
//       0, 3, 6, 9, 12, 15, ...... 87
// divided by 3
//       0, 1, 2, 3, 4, 5, ........ 29
// for (let i = 0; i <= 29; i++) {
//     console.log( (i * 3) + 8);
// }

// Print 123, 118, 113, 108, 103, 98, 93, 88, ....... -7, -12
// subtract 3
//       120, 115, 110, 105, 100, 95, 90, 85, ....... -10, -15
// divided by 5
//       24, 23, 22, 21, ............................  -2, -3

for (let i = 24; i >= -3; i--) {
    console.log((i * 5) + 3);
}