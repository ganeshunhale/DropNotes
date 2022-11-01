import { useContext, useEffect } from "react";
import { context } from "../contextapi";

// let dataBase = require("../db.json");
export function MockAPI() {
  const { allNotes } = useContext(context)
  const AllNotes = allNotes

  notesFunc(AllNotes)
  console.log("allNotes", AllNotes);

  return (
    <><h1>mock</h1></>
  )

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     switch (request.method) {
  //       case "get":
  //         resolve({ status: 200, data: allNotes });
  //         break;
  //       default:
  //         resolve({ status: 400, message: "Bad Request" });
  //     }
  //   }, 300);
  // });
}
export const notesFunc = (AllNotes) => {
  AllNotes = { AllNotes }
  console.log("AllNotes={AllNotes}", AllNotes);
}

// const editJsonFile = require('edit-json-file')
// let dataBase = editJsonFile(`../db2.json`, { autosave: true});

// export function mockAPI(request) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         switch (request.method) {
//           case 'get':
//             dataBase.set("planet", "Earth");
//             console.log(dataBase)
//               resolve({ status: 200, data: dataBase.get() });
//             break;
//           case 'post':
//               resolve({ status: 200, message: 'Added Post' });
//             break;
//           default:
//             resolve({ status: 400, message: 'Bad Request' });
//         }
//       }, 300);
//     });
//   }
