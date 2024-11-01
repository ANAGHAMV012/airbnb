const getSumOfNumbers = (arr) => {
    let sum = 0
    arr=[2,4,1,3]
    arr.forEach((val) => {
        sum += val
    })
    return sum
}
console.log(getSumOfNumbers())

const getSum = (arr) => {
    arr = [1, 4, 'hello', 2, 6]
    const numbers = arr.filter(value => typeof(value) === 'number');
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
};
console.log(getSum());

// const getLargestNumber = (arr) => {
//     arr = [2,4,6,1,3]
//     arr.forEach((a,b) => {
//         if(a>b){
//             console.log(a)
//         }
//     })
// }
// console.log(getLargestNumber())