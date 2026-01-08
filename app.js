// // let div=document.querySelector("div");
// // let ul=document.querySelector("ul");
// // let lis=document.querySelectorAll("li");
// // div.addEventListener("click",function(){
// // console.log("div was clicked");
// // })
// // ul.addEventListener("click",function(event){
// //     event.stopPropagation();
// // console.log("ul was clicked");
// // })
// // for(li of lis){
// //    li.addEventListener("click",function(event){
// //      event.stopPropagation();
// // console.log("li was clicked");
// // })
// // }
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");
// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//     item.innerText=inp.value;
//     let deletebtn=document.createElement("button");
//     deletebtn.innerText="delete";
//     deletebtn.classList.add("delete");
//     item.appendChild(deletebtn);
//     ul.appendChild(item);
//     inp.value="";
// });
// ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
// let listitem=event.target.parentElement;
// console.log(listitem);
// listitem.remove();
//     }
// });
// // let deletebtns=document.querySelectorAll(".delete");
// // for(deletebtn of deletebtns){
// //     deletebtn.addEventListener("click",function(){
// // let par=deletebtn.parentElement;
// // par.remove();
// //     });
// //}
let gameseq=[];
let userseq=[];
let started=false;
let btns=["red","yellow","blue","green"];
let level=0;
let highscore=0;


let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
if(started==false){
    console.log(" game is started");
    started=true;
    levelUp();
}
});

function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
btn.classList.remove("flash");
},250);
}

function userflash(btn){
btn.classList.add("userflash");
setTimeout(function(){
btn.classList.remove("userflash");
},250);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random choosing button
    let ranIdx=Math.floor(Math.random()*3);
    let ranColor=btns[ranIdx];
    let ranbtn=document.querySelector(`.${ranColor}`);

    gameseq.push(ranColor);
    console.log(gameseq);
    gameflash(ranbtn);
}

function checkAns(idx){
  //  console.log("curr level : ",level);

if(userseq[idx]==gameseq[idx]){
    // setTimeout(levelUp,1000);
  if(userseq.length==gameseq.length){
    setTimeout(levelUp,1000);
  }
}
else{
    if(level>highscore){
        highscore=level;
    }
    h2.innerHTML=`Game Over!Your Score Was <b>${level}</b><br> <br>High Score is: <b>${highscore}</b><br>Press any key to start.....`;
   document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
document.querySelector("body").style.backgroundColor="white";
   },150);
    reset();
}
}

function btnpress(){
let btn=this;
userflash(btn);
usercolor=btn.getAttribute("id");
console.log(usercolor);
userseq.push(usercolor);
 checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
