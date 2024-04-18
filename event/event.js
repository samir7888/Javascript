const btn = document.getElementById("btn");
// btn.ondblclick = () => {
//   console.log("ayyo aaayo");   //eventhandler
// };

btn.addEventListener("click", (e) => {
  //   console.log("from event listener");
  //   document.body.style.backgroundColor = "red";
  //   e.target.innerText = "fuckkk";
  //   e.target.innerHTML = "<b>ahhhh</b>";
  //   console.log("harderrr bepyy");

  const isChanged = confirm("Are you sure you want to change the color");
  const colorN = prompt("name the color");
  if (isChanged) {
    document.body.style.backgroundColor = `${colorN}`;
  }
});
