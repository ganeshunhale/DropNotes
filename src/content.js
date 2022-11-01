
// dom  ===== document object modal

let colorDescDiv = document.querySelector("#content")

// let body = document.querySelector("#bodyTag")



colorDescArr = [

    {
        id: 1,
        colorName: "Blue",
        desc: `blue color really isn't that difficult to get right,if you know were to start`,
        icon: "shop",
        bgColor: "lightpink",


    },
    {
        id: 2,
        colorName: "red",
        desc: `Red  color really isn't that difficult to get right,if you know were to start`,
        icon: "delete_outline",
        bgColor: "lightgreen",


    },
    {
        id: 3,
        colorName: "green",
        desc: `green  color really isn't that difficult to get right,if you know were to start`,
        icon: "shop",
        bgColor: "lightyellow",


    },
    {
        id: 3,
        colorName: "green",
        desc: `green  color really isn't that difficult to get right,if you know were to start`,
        icon: "shop",
        bgColor: "gold",


    },
    {
        id: 3,
        colorName: "green",
        desc: `green  color really isn't that difficult to get right,if you know were to start`,
        icon: "shop",
        bgColor: "gold",


    }
]


//run once only after some time
// setTimeout(() => {
//     let mapcolorDesc = colorDescArr.map((item, index) => {

//         return `<div class="blue1" style="background-color: ${item.bgColor};>
//     <span class="material-icons"> ${item.icon} </span> <br />
//     ${item.colorName}
//     <br />
//     <p>
//      ${item.desc}
//     </p>
//     </div>`

//     })
//     colorDescDiv.innerHTML = mapcolorDesc
// }, 5000)

// run after give time infinitely
// setInterval(()=>{

// },time here in mili sec)


{/* <span class="material-icons"> ${item.icon} </span>  */ }
{/* <i class="bi-alarm"></i> */ }
{/* <span class="material-icons">
delete_outline
</span> */}
// window.addEventListener("mouseout", () => {})

let mapcolorDesc = colorDescArr.map((item, index) => {

    return `<div class="blue1" style="background-color: ${item.bgColor};">
    <span class="material-icons "> ${item.icon} </span>
        <br />
    ${item.colorName}
    <br />
    <p>
     ${item.desc}
    </p>
    </div>`

}).join('')
colorDescDiv.innerHTML = mapcolorDesc
// })

//---------------------------------------------------------

function myFunction1() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    console.log("x>>>", x);

    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
        localStorage.removeItem("numb")
    } else {
        text = "Input OK";

        localStorage.setItem("numb", x)
    }

    document.getElementById("demo").innerHTML = text;

}
window.addEventListener("load", () => {

    let numb = localStorage.getItem("numb")

    //    let naam ;document.getElementById("demo").innerHTML = numb

    document.getElementById("numb").value = numb



})

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    console.log("XvalidateForm..........", x, "docform", document.forms);
    if (x == "") {
        alert("Name must be filled out");
        // let name = prompt("enter name")
        // console.log("namevalidateForm", name);


        return false;
    }
}

const userList = document.querySelector(".userlist");


// const highlightedItems = userList.querySelectorAll("p");
const highlightedItems = document.querySelectorAll(".userlist > p");


console.log("highlightedItems", highlightedItems);
highlightedItems.forEach(function (userItem) {
    console.log("userItem", userItem);
    userItem.style.color = "red"

    userItem.style.fontSize = "30px"
    userItem.classList.add("p-bold")

    // userItem.style.visibility = "hidden"

    // userItem.style.display = "none"

});


const normalFont = () => {
    const highlightedItems = userList.querySelectorAll(".userlist > p");

    highlightedItems.forEach(function (userItem) {
        console.log("userItem", userItem);

        // userItem.classList.remove("p-bold")
        if (userItem.style.fontSize == "30px") (
            userItem.style.fontSize = "50px")
        else (userItem.style.fontSize = "30px")

        // userItem.style.display = "block"

    });




}

const toggleFont = () => {
    const highlightedItems = userList.querySelectorAll("p");

    highlightedItems.forEach(function (userItem) {
        console.log("userItem", userItem);

        userItem.classList.toggle("p-bold")

    });


}

// event listners

// document.getElementById("myDIV").addEventListener("click", myFunction, true);


function myFunction(e) {

    console.log(e);
    document.getElementById("demos").innerHTML = Math.round(Math.random() * 10);
}
document.getElementById("myDIV").addEventListener("mousemove", myFunction);


function removeHandler() {
    document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}

function getRandomNumberBetween(min, max) {


    return Math.round(Math.random() * (max - min) + min);
}

let getRandomNumberBetweenVal = getRandomNumberBetween(2, 6);
console.log("getRandomNumberBetweenVal", getRandomNumberBetweenVal, (Math.random() * 201) + 200);





// setInterval(() => {
//     const randomBGDiv = document.querySelector(".randomBG1");
//     randomBGDiv.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`

//     randomBGDiv.style.opacity = 0.7

// }, 500)







