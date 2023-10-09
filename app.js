//task 1

// const side1 = 5; 
// const side2 = 6; 
// const side3 = 7; 
// console.log(side1 * side2 * side3);

//task 2

// let decimals = Math.floor(2100212.2);
// console.log(decimals / 10000 | 0);
// console.log(decimals / 1000 | 0);

//task 3

// const array1 = [12,34,56,1];
// const array2 = [-12,-34,0,-56,-1];

// console.log(Math.max(...array1));
// console.log(Math.max(...array2));

//task 4

// function is_Numeric(num){
//    return !isNaN(parseFloat(num)) && isFinite(num);
// }
// console.log(is_Numeric(-200.3));

//task 5

//* c2 = a2 + b2

// let a = 2;
// let b = 4;
// let c = Math.pow(a,2) + Math.pow(b, 2);
// console.log(Math.sqrt(c));

//task 6

// const is_Power_Of_Ten = num => Math.log10(num) % 1 === 0;
// console.log(is_Power_Of_Ten(1));
// console.log(is_Power_Of_Ten(10));
// console.log(is_Power_Of_Ten(30));
// console.log(is_Power_Of_Ten(100));
// console.log(is_Power_Of_Ten(90));
// console.log(is_Power_Of_Ten(1000));

//task 7

//! birinci usul -- function olmadan

// let str = "abcd";
// let len = str.length;
// let middle = Math.floor(len / 2.10);
// console.log(str[middle]);

//! ikinci usul -- function

// function middleString(str){
//    let len = str.length;
//    let middle = parseInt(len / 2,10);

//    document.write(str[middle]);
// }
// middleString("Murad");


//task 8


// function findMissedNumbers(num){
//    for(i = 0; i <= num.length + 1; i++){
//       if(num.indexOf(n) === -1){
//          return n;
//       }
//    }
// }


// let num = [1,3,4,5];
// console.log(findMissedNumbers)
