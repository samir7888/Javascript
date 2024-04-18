const body = document.querySelector("body");

function colorChange() {
  let colorString = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let randNum = Math.floor(Math.random() * colorString.length);
    color += colorString[randNum];
  }
  document.body.style.backgroundColor = `#${color}`;
  console.log(color);
}

// setInterval(colorChange, 100);
