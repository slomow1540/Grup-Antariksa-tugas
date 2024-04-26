let number = 0;
const contents = [["overcook","100"],["Pico Park","123"],["Player Unknown Battle Ground","233"],["Terraria","312"]];
for (let i = 0; i < 4; i++) {
  const item = document.createElement("div");
  const title = document.createElement("h2");
  const playtime = document.createElement("p");
  const playtitle = document.createElement("h3");
  const div = document.querySelector(".recentgames");
  playtitle.innerHTML="Playtime";
  item.classList.add("Content");
  title.classList.add("recentgamestitle");
  const images = document.createElement("img");
  images.classList.add("recentgamesimage");
  images.setAttribute( "height", "280px" );
  images.setAttribute( "width", "460px" );
  let game = "Images/Game" + i + ".jpg";
  images.setAttribute("src",game);
  title.innerHTML=contents[i][0];
  playtime.innerHTML=(contents[i][1] + " Hours");
  item.appendChild(images);
  item.appendChild(title);
  item.appendChild(playtitle);
  item.appendChild(playtime); 
  div.appendChild(item); 
  }
const div = document.querySelector(".recentgames");
div.appendChild(document.createElement("br"));
div.appendChild(document.createElement("br"));