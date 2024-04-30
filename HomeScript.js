let yes = true
const contents = ["Overcooked","PICO PARK","Player Unknown Battle Ground","Terraria","Resident Evil 4"];
for (let i = 0; i < 5; i++) {
  const a = document.createElement("a");
  const item = document.createElement("div");
  item.classList.add("gameitem");
  if (yes == true){
    item.classList.add("active");
    yes = false;
  }
  const images = document.createElement("img");
  images.classList.add("recentgamesimage");
  images.setAttribute( "height", "350px" );
  images.setAttribute( "width", "550px" );
  let gamelink = "gamehtmls/Game"+i+".html";
  a.setAttribute("target","_self")
  a.setAttribute("href",gamelink)
  let game = "Images/Game" + i + ".jpg";
  images.setAttribute("src",game);
  const description = document.createElement("div"); 
  description.classList.add("description");
  description.classList.add("active");
  const title = document.createElement("h1");
  const desc = document.createElement("p");
  title.innerHTML=contents[i];
  desc.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorum sunt nostrum non ea nihil sapiente repellendus explicabo iste maxime sed ipsam autem eligendi molestias itaque rem, voluptate dignissimos culpa velit fugit soluta quod ipsa. Quisquam mollitia aut dicta suscipit optio voluptate voluptatibus nisi. Corrupti commodi repellendus aperiam porro molestias.";
  const div = document.querySelector(".carousel");
  description.appendChild(title)
  description.appendChild(desc)
  item.appendChild(images)
  item.appendChild(description)
  a.appendChild(item)
  div.appendChild(a); 
}

const slides = document.querySelectorAll(".gameitem")
const slidesbtn = document.querySelectorAll(".change div")
const firstSlide = 0
const lastSlide = slides.length - 1
let activeSlide = 0

const goToPreviousSlide = () => {
  slides[activeSlide].classList.remove("active")
  slidesbtn[activeSlide].classList.remove("focus")
  if (activeSlide !== firstSlide) {
    activeSlide = activeSlide - 1
  } else {
    activeSlide = lastSlide
  }
  slides[activeSlide].classList.add("active")
  slidesbtn[activeSlide].classList.add("focus")
}

const goToNextSlide = () => {
  slides[activeSlide].classList.remove("active")
  slidesbtn[activeSlide].classList.remove("focus")
  if (activeSlide !== lastSlide) {
    activeSlide = activeSlide + 1
  } else {
    activeSlide = firstSlide
  }
  slides[activeSlide].classList.add("active")
  slidesbtn[activeSlide].classList.add("focus")
}

