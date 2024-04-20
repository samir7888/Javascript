const btn = document.getElementById("btn");
let keyWord = document.getElementById("keyWord");
let loadBtn = document.getElementById("moreImg");

let val;
let page = 1;
loadBtn.classList.add("hiddenBtn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  page = 1;
  document.querySelector(".secondDiv").innerHTML = "";
  val = keyWord.value;
  keyWord.value = "";
  fetchImg(val);
});

async function fetchImg(val) {
  let response = await fetch(
    `https://api.unsplash.com/search/photos?query=${val}&client_id=vh3DP2lsirlpfHbxN_8Tok1H7CP9Nesa5usE_v9y56g&page=${page}`
  );
  let result = await response.json();
  console.log(result);
  if (result.results.length < 1) {
    document.querySelector(".secondDiv").innerHTML = `<h2>Not Found</h2>`;
  } else {
    displayImg(result);
  }
}

function displayImg(res) {
  res.results.map((data) => {
    let div = document.createElement("div");
    div.setAttribute("class", "singleImg");
    div.innerHTML = `<div class="singleImg">
        <div class="firstWala">
          <img
            src=${data.user.profile_image.large}
            class="userImg"
          />
          <p class="userName">${data.user.name}</p>
        </div>
        <div class="secWala">
          <a href="https://unsplash.com/photos/${data.slug}">
          <img
            class="productImg"
            src=${data.urls.regular}
            class="mainImg"
          />
          </a>
          <p class="imgDes">${data.alt_description}</p>
        </div>
        </div>
    `;
    document.querySelector(".secondDiv").appendChild(div);
  });
  loadBtn.classList.add("btn");
}

loadBtn.addEventListener("click", () => {
  page++;
  fetchImg(val);
});
