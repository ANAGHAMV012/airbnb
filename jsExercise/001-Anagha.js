// Array sum kandu pidikkuka. Oru array of numbers input aai eduth, avayile ella elements'nteyum sum thirike nalkunna oru function ezhuthuka.
const getSumOfNumbers = (arr) => {
    arr = [4,5,3,2,1,1]
    let sum=0
    arr.forEach(element => {
        sum += element
    });
    return sum
};
console.log(getSumOfNumbers())


// -----------------------------------------------
// Oru array input aai eduth, avayile numbers nte maathram sum kandu pidikkuchu thirike tharunna oru function ezhuthuka.
// Note: array il numbers maathram alla, string, or objects may also be present. Avayil, numbers nte maathram sum aanu kandu pidikkendeth.
const getSum = (arr) => {
    arr=[3,'hi',2,'hello',1,3,'this',5,4]
    let sum = 0
    arr.forEach(element => {
        if(typeof(element) === 'number'){
            sum += element
        }
    })
    return sum
};
console.log(getSum())

// -----------------------------------------------
// Largest value kandu pidikkuka. Oru array of numbers input aai eduth, athile largest number kandu pidich thirike tharunna function ezhuthuka.
const getLargestNumber = (arr) => {
    arr = [3,1,2,4,9,3]
    largest = Math.max(...arr)
    return largest
};
console.log(getLargestNumber())

// -----------------------------------------------
// Oru string input aai eduth, athile vowels(a, e, i, o, u) nte enanm count cheithu thirike tharunna oru function ezhuthuka.
const countVowels = (str) => {
    str='aeiouhsdaiunoibjd'
    const number = str.match(/[aeiou]/g) || [];
    return number.length
};
console.log(countVowels())

// -----------------------------------------------
// Oru array of numbers input aai eduth, athile duplicate items remove cheithu return cheyyunna oru function ezhuthuka.
// Ex: console.log(removeDuplicates([1,1,2])) should print [1,2]
const removeDuplicates = (arr) => {
    arr=[3,2,2,3,5,7,5]
    const once = [...new Set(arr)]
    return once
};
console.log(removeDuplicates())


// -----------------------------------------------
// Write a function that takes an array of objects (each object has a property "age") and a minimum age as input. Return a new array containing only objects with an age greater than or equal to the minimum age.
const filterByAge = (arr, minAge) => 
    arr.filter(obj => obj.age >= minAge);
    const people = [
        { name: 'personA', age: 25 },
        { name: 'personB', age: 17 },
        { name: 'personC', age: 30 }
    ];
console.log(filterByAge(people, 28));

// -----------------------------------------------
// Write a function that takes a string as input. Validate if the string has a valid email format (contains "@" and "."). Return true if valid, false otherwise.
const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
};
console.log(validateEmail('anaghamv@gmail.com'));
console.log(validateEmail('invalid-email'));
  
// -----------------------------------------------
// Write a function that takes an array of objects (each object has a property "name") as input. Return a new array containing the objects sorted alphabetically by name.
// (Hint: Use array sorting methods)
const sortByName = (arr) => {
    return arr.slice().sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
}
const data = [
    { name: "Charlie" },
    { name: "Alice" },
    { name: "Bob" }
];

// Call the function and log the result
console.log(sortByName(data));


// -----------------------------------------------
// Write a function that takes two sorted arrays of numbers as input and returns a new array containing all elements merged and sorted in ascending order.
const mergeSortedArrays = (arr1, arr2) => {
    arr1=[3,5,3,7,9]
    arr2=[4,6,8,3,2]
    const merged=[...arr1, ...arr2]
    merged.sort((a,b) => a-b)
    return merged
};
console.log(mergeSortedArrays())

// -----------------------------------------------
// Write a function that takes an array of objects (each object represents a product with properties "price" and "quantity") as input. Return the total price of all products (price * quantity).
const calculateProductPrice = (price, quantity) => {
    sale=[
        {price: '20', quantity: '50'},
        {price: '30', quantity: '60'},
        {price: '40', quantity: '70'}
    ]
    totalprice=0
    sale.forEach(({price, quantity}) => {
        totalprice = totalprice + price*quantity
    })
    return totalprice
};
console.log(calculateProductPrice())

// -----------------------------------------------
// Write a function that takes an array of objects (of any type) as input. Return a new object where keys are unique values of the "property" and values are arrays of objects belonging to that property.
// Example:
/*
const characters = [
{ name: "Daenerys Targaryen", family: "Targaryen" },
{ name: "Jon Snow", family: "Stark" },
{ name: "Tyrion Lannister", family: "Lannister" },
{ name: "Sansa Stark", family: "Stark" },
{ name: "Arya Stark", family: "Stark" },
{ name: "Cersei Lannister", family: "Lannister" },
{ name: "Jaime Lannister", family: "Lannister" },
{ name: "Theon Greyjoy", family: "Greyjoy" },
{ name: "Margaery Tyrell", family: "Tyrell" },
{ name: "Petyr Baelish", family: "Baelish" },
{ name: "Jorah Mormont", family: "Mormont" },
{ name: "Brienne of Tarth", family: "Tarth" },
{ name: "Davos Seaworth", family: "Seaworth" },
{ name: "Varys", family: "unknown" },
{ name: "Melisandre", family: "unknown" },
{ name: "Ramsay Bolton", family: "Bolton" },
{ name: "Littlefinger", family: "Baelish" },
{ name: "Hodor", family: "unknown" },
{ name: "Bran Stark", family: "Stark" },
{ name: "Ygritte", family: "Wildling" },
]

const groupedResult = groupByProperty(characters, 'family') // where 'family' is the name of the "property" using which you like to group the data

Now, if you log groupedResult, it should print the below: (note: the order of keys is not important)

{
'Targaryen': [{'name': 'Daenerys Targaryen', 'family': 'Targaryen'}],
'Stark': [{'name': 'Jon Snow', 'family': 'Stark'}, {'name': 'Sansa Stark', 'family': 'Stark'}, {'name': 'Arya Stark', 'family': 'Stark'}, {'name': 'Bran Stark', 'family': 'Stark'}],
'Lannister': [{'name': 'Tyrion Lannister', 'family': 'Lannister'}, {'name': 'Cersei Lannister', 'family': 'Lannister'}, {'name': 'Jaime Lannister', 'family': 'Lannister'}],
'Greyjoy': [{'name': 'Theon Greyjoy', 'family': 'Greyjoy'}],
'Tyrell': [{'name': 'Margaery Tyrell', 'family': 'Tyrell'}],
'Baelish': [{'name': 'Petyr Baelish', 'family': 'Baelish'}, {'name': 'Littlefinger', 'family': 'Baelish'}],
'Mormont': [{'name': 'Jorah Mormont', 'family': 'Mormont'}],
'Tarth': [{'name': 'Brienne of Tarth', 'family': 'Tarth'}],
'Seaworth': [{'name': 'Davos Seaworth', 'family': 'Seaworth'}],
'unknown': [{'name': 'Varys', 'family': 'unknown'}, {'name': 'Melisandre', 'family': 'unknown'}, {'name': 'Hodor', 'family': 'unknown'}],
'Bolton': [{'name': 'Ramsay Bolton', 'family': 'Bolton'}],
'Wildling': [{'name': 'Ygritte', 'family': 'Wildling'}]
}
*/

const groupByProperty = (arr, property) => {
    return arr.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) acc[key] = [];
        acc[key].push(obj);
        return acc;
    }, {});
};

const characters = [
    { name: "Daenerys Targaryen", family: "Targaryen" },
    { name: "Jon Snow", family: "Stark" },
    { name: "Tyrion Lannister", family: "Lannister" },
    { name: "Sansa Stark", family: "Stark" },
    { name: "Arya Stark", family: "Stark" },
    { name: "Cersei Lannister", family: "Lannister" },
    { name: "Jaime Lannister", family: "Lannister" },
    { name: "Theon Greyjoy", family: "Greyjoy" },
    { name: "Margaery Tyrell", family: "Tyrell" },
    { name: "Petyr Baelish", family: "Baelish" },
    { name: "Jorah Mormont", family: "Mormont" },
    { name: "Brienne of Tarth", family: "Tarth" },
    { name: "Davos Seaworth", family: "Seaworth" },
    { name: "Varys", family: "unknown" },
    { name: "Melisandre", family: "unknown" },
    { name: "Ramsay Bolton", family: "Bolton" },
    { name: "Littlefinger", family: "Baelish" },
    { name: "Hodor", family: "unknown" },
    { name: "Bran Stark", family: "Stark" },
    { name: "Ygritte", family: "Wildling" }
];

const groupedResult = groupByProperty(characters, 'family');
console.log(groupedResult);

// -----------------------------------------------
// Write a function to aggregate order data for reporting:
// You have a JSON array representing customer orders. Each order object has properties like "customerId" "items" (array of product objects), and "totalPrice."
// Write a function that takes the JSON array and a specific customer ID as input.
// Return a new object containing:
// - The customer ID (field name: customerId)
// - Total number of orders placed by the customer (field name: totalOrders)
// - Total amount spent by the customer (across all orders) (field name: totalAmount)
// - Most frequently purchased product (by quantity) and its total quantity (field name : mostFrequentProduct)
const aggregateOrders = (arr, customerId) => {
    const customerOrders = arr.filter(order => order.customerId === customerId);

    const totalOrders = customerOrders.length;
    const totalAmount = customerOrders.reduce((sum, order) => sum + order.totalPrice, 0);

    const productFrequency = {};

    customerOrders.forEach(order => {
        order.items.forEach(({ productId, quantity }) => {
            if (!productFrequency[productId]) {
                productFrequency[productId] = 0;
            }
            productFrequency[productId] += quantity;
        });
    });

    let mostFrequentProduct = null;
    let maxQuantity = 0;

    for (const [productId, quantity] of Object.entries(productFrequency)) {
        if (quantity > maxQuantity) {
            mostFrequentProduct = productId;
            maxQuantity = quantity;
        }
    }

    return {
        customerId,
        totalOrders,
        totalAmount,
        mostFrequentProduct: { productId: mostFrequentProduct, quantity: maxQuantity }
    };
};
