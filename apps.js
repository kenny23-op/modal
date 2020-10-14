let modalbutton=document.querySelector(".mot");
let mentng=document.querySelector(".ment-ng");
let mentclose=document.querySelector(".close");
//open the modal
modalbutton.addEventListener("click",()=>{
    modalbg.classList.add("ment-ng,")
});
//close the modal
modalclose.addEventListener("click",()=>{
    modalbg.classList.remove("ment-ng,")
});