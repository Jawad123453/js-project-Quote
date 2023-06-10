let mainbtn=document.querySelector(".mainbtn");
let mainthing=document.querySelector(".mainthing p")
let caler=document.querySelector(".caler p");
let tok=document.querySelector(".tok");
let ccv=document.querySelector(".ccv");

mainbtn.addEventListener("click",function(){
  fetch("https://api.quotable.io/random").then((res)=>res.json()).then((reult)=>{
    mainthing.innerText=reult.content;
    caler.innerText=reult.author;
  })
})
tok.addEventListener("click",function(){
  let newtaker=new SpeechSynthesisUtterance(`${mainthing.innerText} by ${caler.innerText}`)
  speechSynthesis.speak(newtaker);
})
ccv.addEventListener("click",function(){
  navigator.clipboard.writeText(mainthing.innerText);
})