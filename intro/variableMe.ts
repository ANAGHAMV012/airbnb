// let greetings:string="anagha mv";
// let mynum=6
// greetings.toLowerCase()
// console.log(greetings);
// export{}

// let userId = 334455.3
// userId.toFixed()
// let isLoggedIn: boolean = false

// let hero;
// function getHero(){
//     return "thor"
// }
// hero = getHero()

// function addTwo(num: number): number{
//     // return num+2
//     return "hello"
// }
// function getUpper(val: string){
//     return val.toUpperCase()
// }
// function signUpUser(name: string, email:string, isPaid: boolean){}
// addTwo(5)
// getUpper("hitesh")
// signUpUser("hitesh","hitesh@lco.dev",false)
// loginUser("h", "h@h.com")

// // function getValue(myVal: number){
// //     if(myVal > 5){
// //         return true
// //     }
// //     return "200 Ok"
// // }

// const getHello=(s: string):string =>{
//     return ""
// }
// // const heros=["thor", "spiderman", "ironman"]
// const heros=[1, 2, 3]
// heros.map((hero): string => {
//     return `hero is ${hero}`
// })
// function consoleError(errormsg: string): void{
//     console.log(errmsg);
// }
// function handleError(errmsg: string): void{
//     throw new Error(errmsg);
// }
// export {}

// const user = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isAlive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = ({name: "hitesh", isPaid: false, email: "h@h.com"})
// createUser(newUser)


// function createCourse(){name: string, price: number}:{
//     return {name: "reactjs", price:399}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return{name: "", email: "", isActive: true}
// }
// createUser({name: "", email: "", isActive: true})

// export {}


// console.log('Hello world')

// let age: number = 30;
// age='a';

// type User = {
//     readonly_id: string
//     name: string
//     email: string
//     isActive: boolean
// }
// function createUser(u: User){}

// let myUser: User = {
//     id: "1245",
//     name: "h",
//     email: "h@h.com",
//     isActive: false
// }
// myUser.email="h@h.com"

let age: number=30;
if (age<50)
    age += 10;
console.log(age)


let sales = 123_456_789
let course: string = 'Typescript'
let is_published: boolean = true
let level;
function render(document){
    console.log(document)
}

function calculateTax(income: number){
    if(income<50_000)
        return income * 1.2;
}


function calculateTax(income: number): number{
    let x;
    if(income<50_000)
        return income * 1.2
    return income * 1.3
}
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date)
    }
}

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);
    }
}