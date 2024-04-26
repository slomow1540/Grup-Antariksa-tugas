let number = 0;
const contents = [["overcook","100"],["Pico Park","123"],["Player Unknown Battle Ground","233"],["Terraria","312"]]
const item = document.createElement("div")
item.classList.add("Content")
const images = document.createElement("img")
images.classList.add("recentgamesimage")
images.setAttribute( "height", "280px" );
images.setAttribute( "width", "460px" );
for (let i = 0; i < 4; i++) {
    let game = "Images/Game" + i + ".jpg";
    console.log(game)
    item.appendChild(images)
    images.setAttribute("src",game)
  }