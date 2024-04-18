const btn = document.getElementById("genPass");
const newPass = document.getElementById("newPass");
const slider = document.getElementById("range");
const rangeVal = document.getElementById("rangeVal");
const upperCase = document.getElementById("capLet");
const lowerCase = document.getElementById("samLet");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const copyBtn = document.getElementById("copyBtn");

rangeVal.innerText = slider.value;
slider.addEventListener("input", (e) => {
  rangeVal.innerText = e.target.value;
});

btn.addEventListener("click", (e) => {
  let capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smallLetter = "abcdefghijklmnopqrstuvwxyz";
  let numberStr = "0123456789";
  let symbolsStr = '`~!@#$%^&*()_+{}:"<>?';

  let finalStr = "";
  if (upperCase.checked) {
    finalStr += capitalLetter;
  }
  if (lowerCase.checked) {
    finalStr += smallLetter;
  }
  if (number.checked) {
    finalStr += numberStr;
  }
  if (symbol.checked) {
    finalStr += symbolsStr;
  }

  if (finalStr === "") {
    alert("Please select at least one box");
  }

  let latestPass = "";

  for (let i = 0; i < slider.value; i++) {
    let randomNum = Math.floor(Math.random() * finalStr.length);
    latestPass += finalStr[randomNum];
  }
  if (finalStr.length != 0) {
    newPass.innerText = `${latestPass}`;
    e.preventDefault();
  }
});

//copy

copyBtn.addEventListener("click", () => {
  window.navigator.clipboard.writeText(newPass.innerText);
});
