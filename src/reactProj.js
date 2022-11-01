//
// const showAlert = (show = false, type = '', msg = '') => {
//     setAlert({ show, type, msg });
// };

//spread operator
// setList([...wholeArr, newItem]);

// setList({ ...allObjKeys, newKeyorExisting });

// //to get random ids
// const newItem = { id: new Date().getTime().toString(), title: name };

// let a = [5]
// let b = [6]
// for (let i = 0; i = 10000; i++) {
//     console.log("gaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaga", a + b);

// }

let practiceClass = document.querySelector(".practice");
const ganesh = { 0: { a: 1, b: 2, c: 3 }, 1: { g: 4, a: 5 } };

// const ganeshUpdate = () => {
//     let g = [1, 2, 3]
//     //    let ganesh2=Object.values(ganesh)
//     for (const key in ganesh) {
//         if (Object.hasOwnProperty.call(ganesh, key)) {
//             const element = ganesh[key];
//             console.log("element", element);
//             return element
//         }
//     }
//     //   .map((val, index, arr) => {
//     //      console.log("val", val);
//     //   })
//     return g
// };
// console.log("ganeshUpdate", ganeshUpdate());
// const ganCopy = [...ganesh]

// const ganeshUpdate2 = () => {
//     return ganesh.splice(3, 0, 3.5);
// };
// let ganeshSlice1 = [...ganesh.slice(0, 3), 3.5, ...ganesh.slice(3)]
// console.log("ganeshUpdate2", ganeshUpdate2(), ganesh);
practiceClass.innerHTML = ganesh;

const func1 = (total) => console.log("func1", total);
const func2 = (a, b, func1) => {
    let result = a + b;
    func1(result);
};
func2(1, 2, func1);
