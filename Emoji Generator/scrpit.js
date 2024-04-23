let emoji = document.getElementById("emoji");
let des = document.getElementById("des");

async function fetchEmoji() {
  let res = await fetch(
    `https://emoji-api.com/emojis?access_key=19ed912f881e32ba64563180838fd72fc8158cb8`
  );
  let result = await res.json();
  let random = Math.floor(Math.random() * result.length);

  emoji.innerHTML = result[random].character;

  let description = result[random].unicodeName.split(".");
  let des2 = description[1].substring(2, description[1].length);
  des.innerHTML = des2;
}
emoji.addEventListener("click", () => {
  fetchEmoji();
});
