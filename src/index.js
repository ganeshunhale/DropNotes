
// let //local scope
// var //global scope
// const // constant 


// let a = 10
// var b = 20 //integer

const PI = 3.7 //float

// let c = "Ganesh" //String

// let d = "G" //Char

// console.log(typeof a, typeof b, typeof c, typeof d);



// if(1=="1") {
//     //returns true
//     //
// }
// if(1==="1") {
//     //returns false
//     //checks data type also
// }


let round = Math.round(PI)
let floor = Math.floor(PI)
let ceil = Math.ceil(PI)



console.log(round, floor, ceil);

let num = 1.4
let string = num.toString()
console.log(string);

let str = "2000h22..,./;1=-203"
let integer = parseInt(str)
console.log("convert to int", integer);


let imp = `'this is "good" 'book''`
console.log(imp);

let upper = "ajd  d".toUpperCase()
console.log(upper);

let bool = false
console.log(typeof bool);

//concatination
let stri = "Please locate where 'locate' occurs!";
let str1 = "Please  where  occurs!hhj";
let con = stri.concat(str1)
let con2 = stri + str1

let firstName = "John";
let lastName = "Doe";

console.log("welcome " + firstName + " " + lastName);

let backtick = `welcome ${firstName}`
console.log(backtick);

let x = 0.11;
let y = 0.11;
let fixed = x + y
console.log(fixed.toFixed(2));

let tofloat = parseInt("11")
console.log(tofloat);

// if(x>y || x<y) {

// if (x >= y) {
//     console.log("x is greater");
// }
// else if (x < y) {
//     console.log("Y is greater");
// }
// else if (x == y) {
//     console.log("both are equal");
// }
// }

// let a =true
// if(!a){
//     console.log(a);
// }

//ternary
let x1 = 13876;
let y1 = 4;

console.log(x1 > y1
    ? "x is greater"
    : x1 == y1
        ? "both are equal"
        : "Y is greater");

//modulus

// if (x1 % y1 == 0) {
//     console.log("divisible");
// }

if (x1 % 2 == 0) {
    console.log("even");
} else {

    console.log("odd");

}


console.log(1 + 2 / (2 * 3));

//arrays-------------------------------------------------------------
//index starts from 0
let arr = [1, 2, 3, 4]
// arr[4] = 5
arr[2] = 7
arr[arr.length] = 9
arr.push(10)
console.log(arr, arr.length);
let popped = arr.pop()
console.log(arr, popped);
// arr[-1] = 6
// arr.shift()
arr.unshift(6)
console.log(arr);
let bro = [1, 23, 3, 4, 5, 6, 7]


// let sliced = arr.slice(-3) //copy of array
let spliced = bro.splice(3, 2) //same arr


console.log(spliced);

let deleted = delete arr[4]
console.log(arr);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

let spread = [...myGirls, "Nilesh", ...myBoys]

console.log(spread, "String", myBoys.toString());


//objects-------------------------------------------------------
const person = {
    firstName: "John",
    lastName: "Doe",
    age: { birthage: 21, },
    eyeColor: "blue"
};


console.log(person.age.birthage, person["age"]);

// let person2 = person  //only name is different, object is same

//arrays and objects are reference types
// Object.assign({}, oldObj)
// Array.from(oldArr)



const person2 = Object.assign({}, person) //created new onject
// const person2 = _.cloneDeep({ ...person })
person2.eyeColor = "black"
person.eyeColor = "green"
person.age.birthage = 9
console.log(person, person2);


let keysArr = Object.keys(person)

let valuesArr = Object.values(person)

// console.log(keysArr, valuesArr);

// if (person.hasOwnProperty('hands')) {


//     console.log(person.hands)
// }

// or you can use?.Optional chaining to ensure no error is thrown
console.log(person?.hands)

const person3 = {
    Name: "usman",
    lastName: "kamaru",
    age: "25"

};
let person4 = { ...person3, is_champ: true }

console.log(person3, person4);

// switch (new Date().getDay()) {
//     case 6:
//         text = "Today is Saturday";
//         break;
//     case 0:
//         text = "Today is Sunday";
//         break;
//     default:
//         text = "Looking forward to the Weekend";
// }



// for (let i = 0; i <= 100; i++) {

//     console.log(i);
// }

let table = 6

for (let i = 1; i <= 10; i++) {

    console.log(i * table);

}


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]


// for (let i = 0; i < cars.length; i++) {

//     if (cars[i] !== "Ford") { console.log(cars[i]); }
//     else { console.warn("banned"); }
// }

for (let x in cars) {

    console.log(cars[x]);
}
for (let x of cars) {
    console.error(x);
}

const man = {
    firstName: "John",
    lastName: "Doe",
    age: { birthage: 21, },
    eyeColor: "blue"
};
for (let x in man) {
    console.warn(man[x]);
}

for (let i = 0; i < cars.length; i++) {

    if (cars[i] != "Ford") {
        console.log(cars[i]);

    }
    else {
        console.warn("banned");
        // continue // skip code below and got to next condition
        break // stop loop and dont run code below
    }


    console.log(cars);
}

//function declaration
function makeMyself(name, age) {//parameters

    console.log("My name is " + name + ". I am " + age + " years old");
}

//function call
makeMyself("Ganesh", 21)//arguments

// let makeMyselfArrow = (name, age) => {
//     console.log("My name is " + name + ". I am " + age + " years old");

// }

// makeMyselfArrow("Ganesh", 21)//arguments
















const Ufc = [

    {
        Name: "colby",
        lastName: "covington",
        age: "32"

    },
    {
        Name: "usman",
        lastName: "kamaru",
        age: "34",


        getFullName: function () { return this.Name + this.lastName }
    }
    , {
        Name: "brock",
        lastName: "lesnar",
        age: "32"

    }, {
        Name: "Conor",
        lastName: "Mc",
        age: "40"

    }]

console.log("useman", Ufc[1].getFullName());

let UfcNamesMap = Ufc.map((item, index, arr) => {

    return item.Name
    // return item.Name == "colby"


    console.log("This will not run");

})

console.log(UfcNamesMap);
let maxprimeAge = 35
let UfcNamesFilter = Ufc.filter((item, index) => {
    let numAge = parseInt(item.age)

    return numAge < maxprimeAge

})

console.log(UfcNamesFilter);

let UfcNamesSort = Ufc.sort((item1, item2) => {
    let numAge1 = parseInt(item1.age)
    let numAge2 = parseInt(item2.age)

    return numAge1 - numAge2

}
)
console.log(UfcNamesSort);







let Arr2D = [[1, 2],
[3, 4, 6],
[5, 6],
[7, 8]]


for (let i = 0; i < Arr2D.length; i++) {
    for (let j = 0; j < Arr2D[i].length; j++) {
        console.log(Arr2D[i][j]);

    }

}



// let star = "*";
// for (let i = 0; i <= 5; i++) {

//     console.log(star);

//     star += " *"


// }


// let numbers = ""
// for (let i = 1; i < 5; i++) {
//     // console.log(numbers + i);

//     for (let j = 1; j <= i; j++) {
//         numbers += j * 2

//     }

//     // console.log(numbers);

//     console.log(numbers);
//     numbers = ""

// }






const logger_N = (starCount, Symbol, slideSymbol) => {

    let repeatSymbol = "";



    for (let i = 1; i <= starCount; i++) {
        repeatSymbol += Symbol


        for (let j = 1; j <= i; j++) {

            repeatSymbol += " "
        }



        repeatSymbol += slideSymbol

        for (let k = starCount; k >= i; k--) {

            repeatSymbol += " "
        }
        repeatSymbol += Symbol
        console.log(repeatSymbol);
        repeatSymbol = "";


    }

}










// let Symbol = "| |"
// let slideSymbol = "\\ \\"
// let starCount = 6

// logger_N(starCount, Symbol, slideSymbol)

// module.exports = logger_N // old way
// export default logger_N //new es6 way



// shallow clone vs deepclone
// use lodash
// let a = "str1"
// let b = a

// b = "st2"
// console.log(a);

// let obj = { x: 1, y: 2, objInner: { a: 4, b: 5 } }

// // let obj2 = Object.assign({}, obj)

// let obj2 = { ...obj }

// obj2.y = 5
// // obj2.objInner.a = 3

// console.log(obj);






// class AgeC {
//     constructor(params) {

//         this.age = 5
//     }


var age = 5

const getAge = () => {

    // self=this
    let age = 10


    console.log("this.agethis.agethis.agethis.agethis.agethis.age", age)
}
getAge()

// }

// let a = [5]
// let b = [6]
const chacheloop = (anum, bnum) => {
    // for (let i = 0; i <= 10000000; i++) {

    console.log("gaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaga")
    // }
    return anum + bnum;
}

chacheloop(700, 800)
console.time("start")
console.timeEnd("end")

