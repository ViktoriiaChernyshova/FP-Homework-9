// - Вивести на сторінку в один рядок через кому числа від 10 до 20

// let count ='';
// for (let num = 10; num<21; num +=1) {
//     count = `${count} ${num},`;
// } 
// console.log(count);

// - Вивести квадрати чисел від 10 до 20

// let count ='';
// for (let num = 10; num<21; num +=1) {
//     count = `${count} ${num**2},`;
// }
// console.log(count);

// - Вивести таблицю множення на 7

// let count ='';
// for (let firstNum = 7, secondNum = 1; secondNum < 10; secondNum += 1) {
//   count = `${count}${firstNum}*${secondNum}=${firstNum * secondNum}\n`;
// }
// console.log(count);

// -Знайти суму всіх цілих чисел від 1 до 15

// let sum = 0;
// for (let num = 1; num<16; num +=1) {
//   sum += num;
// }
// console.log(sum);

// -Знайти добуток усіх цілих чисел від 15 до 35

// let count = 1;
// for (let num = 15; num<36; num +=1) {
//   count *= num;
// }
// console.log(count);

// -Знайти середнє арифметичне всіх цілих чисел від 1 до 500

// let count = 0;
// for (let num = 1; num<501; num += 1) {
//   count += num / 500;
// }
// console.log(count);

// -Вивести суму лише парних чисел в діапазоні від 30 до 80

// let count = 0;
// for (let num = 30; num<81; num += 1) {
//   count = count + (num % 2);
// }
// console.log(count);

//- Вивести всі числа в діапазоні від 100 до 200 кратні 3

// let count = '';
// for (let num = 100; num<201; num += 1) {
//   if (num % 3 === 0) {
//     count =`${count} ${num},`;
//   }
// }
// console.log(count);

//-Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// let count = '';
// let num = +prompt('Enter your number')
// for (let div = 1; div<=num; div +=1) {
//   if (num % div === 0) {
//     count = `${count} ${div},`
//   }
// }
// console.log(count);

// -Визначити кількість його парних дільників

// let count = '';
// let cycle = 0;
// let num = +prompt('Enter your number')
// for (let div = 1; div<=num; div +=1) {
//   if (div % 2 === 0) {
//     if (num % div === 0) {
//         count = `${count} ${div}`;
//       cycle++;
//     }
//   }
// }
// console.log(cycle);

// -Знайти суму його парних дільників

// let sumDiv = 0;
// let num = +prompt('Enter your number')
// for (let div = 1; div <= num; div +=1) {
//   if (div % 2 === 0) {
//     if (num % div === 0) {
//       sumDiv += div;
//     }
//   }
// }
// console.log(sumDiv);

// -Надрукувати повну таблицю множення від 1 до 10

let count = '';
for (let firstNum = 1; firstNum<11; firstNum += 1){
  for (let secondNum = 1; secondNum<11; secondNum += 1) {
    count = `${count}${firstNum}*${secondNum}=${firstNum * secondNum}\n`
  }
  count += `\n`;
}
console.log(count);