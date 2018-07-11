/**
* @fileOverview Contains logic of Deaf Grandma
*/
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
* Put all the code here which would facilitate your conversation
* with the Deaf Grandma.
*
* You can make use of the
* 1. prompt function to get input from the user
* 2. print function to print text on to the console
*/
//
// let byecount = 0;
// print('What do you want to say to Grandma!!');
// let mes = prompt();
// for (;;) {
//   if (isUppercase(mes)) {
//     if (mes === 'BYE') {
//       byecount += 1;
//       if (byecount >= 3) {
//         break;
//       }
//     }
//     let messtr = 'NO, NOT SINCE ';
//     messtr += getRandomValue(1930, 1950);
//     print(messtr);
//   } else {
//     byecount = 0;
//     print('HUH?! SPEAK UP, SONNY!');
//   }
//   mes = prompt();
// }
let byecount = 0;
let mes;
print('What do you want to say to Grandma!!');
let flag = true;
while (flag === true) {
  mes = prompt();
  if (isUppercase(mes)) {
    if (mes === 'BYE') {
      byecount += 1;
    }
    if (byecount < 3) {
      let messtr = 'NO, NOT SINCE ';
      messtr += getRandomValue(1930, 1950);
      print(messtr);
    } else {
      flag = false;
    }
  } else {
    byecount = 0;
    print('HUH?! SPEAK UP, SONNY!');
  }
}
