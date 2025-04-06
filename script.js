const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_image img");
const compResult = document.querySelector(".computer_image img");
const textResult = document.querySelector(".result_text");

const itemImages = document.querySelectorAll(".item_image");
itemImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    userResult.src= compResult.src="assests/rock.png";
    textResult.textContent='Loading.....';
    itemImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });
    gameContainer.classList.add("start");
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      //get the image source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);

      let compImgsrc = itemImages[randomNumber];
      let compSrc = compImgsrc.querySelector("img").src;
      compResult.src = compSrc;
      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];
      let outcomes = {
        RR: "Draw",
        RP: "Computer",
        PR: "User",
        PP: "Draw",
        RS: "User",
        SR: "Computer",
        SS: "Draw",
        PS: "Computer",
        SP: "User",
      };
      let outComeValue = outcomes[userValue + cpuValue];
      textResult.textContent =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!!`;
      //set a timeout to display the result;
    }, 2500);
  });
});
