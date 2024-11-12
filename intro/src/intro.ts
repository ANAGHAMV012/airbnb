// let age: number=21
// if(age<50)
//     age += 10

// let sales=123_456_789
// let course='Typescript'
// let is_published=true
// let level
// function render(document){
//     console.log(document)
// }

// let user: [number, string, boolean, number]=[1, 'Mosh', true, 0];
// user.push(1)

// enum Size{ Small=1, Medium, Large }
// let mySize: Size = Size.Medium
// console.log(mySize)

// function calculateTax(income: number, taxyear: 2022): number {
//     if(taxyear<2022)
//         return income * 1.2
//     return income * 1.3
// }

let employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date)
    }
}
employee.id=0