
//result checking using the operators 


// let score = prompt("Enter a score")
// if (score>= 90 && score<=100){
//     console.log("A")
// }else if (score>= 70 && score<=89){
//     console.log("B");
// }
// else if (score>= 60 && score<=69){
//     console.log("c");
// }
// else if (score>= 50 && score<=59){
//     console.log("D");
// }else{
//     console.log("F");
// }

//program of the string 

// let fullName = prompt("Enter your name");
// let username = "@" + fullName + fullName.length ;
// // console.log(`username should be @${fullName}${fullName.length}`);
// console.log(username);



//calculate average of marks of the students

// let arr = [85,97,44,37,76,60];
// let sum = 0;
// for (const mark of arr) {
// sum += mark;
// }
// let average = sum / arr.length;
// console.log(average);
    
// let nums = [1,2,3,4,5,6,7,8,9];

// let mul = nums.map((val)=>{
//  return val*2;
// })
// console.log(mul);


// let msg = document.querySelector("h1");
// msg.innerText += "from apna college";



// let divs = document.querySelectorAll(".box");
//  let i = 1;
//  for (const div of divs) {
//     div.innerText += `the value of this div is ${i}`;
//     i++;
//  }

// console.log(divs)
// divs[0].innerText += "hiiiii"
// divs[1].innerText += "hiiijhggii"



// let btn = document.createElement("button");
// btn.innerText = "click me";
// btn.style.backgroundColor ="red";
// btn.style.color ="white";


// document.body.prepend(btn);


// let paraa = document.querySelector("p");
// paraa.classList.add("class1");



//toggle


let btn = document.querySelector("button");
let body = document.querySelector("body");
let bg='light';

btn.addEventListener("mouseover",()=>{
    if(bg=="light"){
        bg="dark";
       body.classList.add("dark");
       body.classList.remove("light");
    }
        else{
            bg= "light";
           body.classList.add("light");
           body.classList.remove("dark");
        }
        console.log(bg);
})



