const gameContainer=document.querySelector(".container");
const userResult=document.querySelector(".user_image img");
const compResult=document.querySelector(".computer_image img");
const textResult=document.querySelector(".result_text");

const itemImages=document.querySelectorAll(".item_image");
itemImages.forEach((image, index)=>{
    image.addEventListener("click",()=>{
        image.classList.add("active");
           
        itemImages.forEach((image2, index2)=>{
              index !== index2 &&  image2.classList.remove("active");
        })
    });
});