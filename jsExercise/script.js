// const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;
// console.log(isEqualTo100(100,0));
// console.log(isEqualTo100(0,100));
// console.log(isEqualTo100(90,0));
// console.log(isEqualTo100(90,10));

// const getFileExtension = (abc) => abc.slice(abc.lastIndexOf('.'));
// console.log(getFileExtension('index.html'));
// console.log(getFileExtension('webpack.config.js'));

// const moveCharsForward = (str) => str.split('').map(char => char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1)).join('');
// console.log(moveCharsForward('zmzfgz'));
// console.log(moveCharsForward('fzxzsgqh'));
// console.log(moveCharsForward('zmfdk'));

// const formatDate = (date = new Date()) => {
//     const days = date.getDate();
//     const months = date.getMonth() + 1;
//     const years = date.getFullYear();
//     return `${days}/${months}/${years}`;
// }
// console.log(formatDate());

// const addNew = (str) =>
//     str.indexOf('New!') === 0 ? str : `New! ${str}`;
// console.log(addNew('Offers'));

// const string = (str) => str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
// console.log(string('abc'));
// console.log(string('anahjkldfggha'));
// console.log(string('aj'));

// const firstHalf = (str) => str.slice(0, str.length / 2)
// console.log(firstHalf('temp'))

// const concat = (str1, str2) => str1.slice(1) + str2.slice(1)
// console.log(concat('zanagha', 'zmv'))

// const nearvalue = (a, b) => (Math.abs(100 - a) < Math.abs(100 - b)) ? a : b;
// console.log(nearvalue(125, 26))

// const countChars = (str, char) => str.split('').filter(ch => ch === char).length;
// const contains2To4 = (str, char) => 2 && countChars(str, char) >= 2 && countChars(str, char) <= 4;
// console.log(contains2To4('ooooh!', 'o'))

// const isAscending = (arr) => {
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i+1] < arr[i]) return false;
//     }
//     return true;
// }
// console.log(isAscending([1,2,3,4,5,6]));

// const replaceFirstDigit = (str) => str.replace(/[0-9]/g, '$');
// console.log(replaceFirstDigit('A4na4ghA9m7v2'));

// const isLeapYear = (year) => year % 4 === 0;
// console.log(isLeapYear(2024))

// const objA = { a: 1, b:2, c:1 };
// const objB = { a:1, b:1, c:1 };
// const objC = { a:1, b:1, c:1 };
// const objectsEqual = (a,b) => {
//     Object.keys(a).every(key => b[key]);
// }
// console.log(objectsEqual(objA, objC));

// const parseCSV = (csvString) =>
//     csvString.split('\n').map(row => row.split(','))
// const str = `abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza`
// console.log(parseCSV(str))

// const getRandomHexNumber = () =>
//     Math.floor(Math.random() * 16).toString(16);
// const getRandomHexColor = () => '#' + Array.from(
//     { length: 6}).map(getRandomHexNumber).join('')
// console.log(getRandomHexColor())

// const isEveryElem = (arr, fn) => {
//     fro (let i = 0; i<arr.length; i+=1) {
//         if(fn(arr[i])) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isEveryElem([1,2,3,4,5], (x) => x > 0))
// console.log(isEveryElem([1,2,3,4,5], (x) => x > 3))
// const alphabeticalOrder = (str) => 
//     str.split('').sort((a,b) => a > b ? 1: -1).join('')
// console.log(alphabeticalOrder('javascript'))

// const countLetters = (
//     str, letters = ['a', 'e', 'i', 'o', 'u']) => 
//         str
//             .split('')
//             .filters(s => letters.indexOf(s) > -1)
//             .length
// console.log(countLetters('abcde'))
// console.log(countLetters('abcde', ['c']))

// const countCoins = (money, coins = [25, 10, 5, 2, 1]) => {
//     const totalCoins = []
//     for (let i =0; i< coins.length; i+=1){
//         const thisCoinNum = Math.floor(money / coins[i])
//         for(let y=0; y<thisCoinNum; y+=1){
//             totalCoins.push(coins[i])
//         }
//         money -= coins[i] * thisCoinNum;
//     }
//     return totalCoins;
// }
// console.log(countCoins(46))

// const getUniqueChars = (str) =>
//     str.split('').filter(
//         (item, index, arr) =>
//             arr.slice(index + 1).indexOf(item) === -1
//     );
// console.log(getUniqueChars('aaaaabbccc'));

// const getUniqueChars = (str) =>
//     [...new Set(str.split(''))]
// console.log(getUniqueChars('aaaabbbccc'));

// const getNonRepeatedChars = (str) =>
//     str.split('')
//         .filter((arrItem => arrItem === item).length === 1
//         );
// console.log(getNonRepeatedChars('abacddbec'))