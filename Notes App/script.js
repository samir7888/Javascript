let data = JSON.parse(localStorage.getItem("notes")) || [];

function displayNote() {
  data.map((singleNote) => {
    if (singleNote) {
      addNote(singleNote);
    }
  });
}
displayNote();

document.getElementById("btn").addEventListener("click", () => {
  addNote();
});

function addNote(note = "") {
  console.log(note.date);
  let allNote = document.querySelector(".allNote");
  let divEle = document.createElement("div");
  divEle.setAttribute("class", "singleNote");
  let date = new Date().toLocaleString();

  divEle.innerHTML = `
     
      <div>
      <button class="editBtn">
      <span class="save  ${note ? "hidden" : ""}">Save</span>
      <span class="edt  ${note ? "" : "hidden"}">Edit</span></button>
      <button class="removeBtn">Remove</button>
      </div>
      <div>
      <div id="div" class="note ${note ? "" : "hidden"}">${note}</div>

      <textarea name="" class="note ${
        note ? "hidden" : ""
      }" id="txtA">${note}</textarea>
      </div>
      <div class="date">${date}</div>
      
      `;
  let editBtn = divEle.querySelector(".editBtn");
  let removeBtn = divEle.querySelector(".removeBtn");
  let txtA = divEle.querySelector("#txtA");
  let div = divEle.querySelector("#div");

  //   div.innerHTML = note;
  //   txtA.innerHTML = note;
  editBtn.addEventListener("click", () => {
    divEle.querySelector(".save").classList.toggle("hidden");
    divEle.querySelector(".edt").classList.toggle("hidden");
    div.innerHTML = txtA.value;
    txtA.classList.toggle("hidden");
    div.classList.toggle("hidden");
  });

  removeBtn.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.remove();
    //divEle.remove();
    updateStorage();
  });

  txtA.addEventListener("input", (e) => {
    updateStorage();
  });

  allNote.append(divEle);
}

function updateStorage() {
  let textarea = document.querySelectorAll("textarea");
  data = [];
  textarea.forEach((e) => {
    if (e) {
      data.push(e.value);
    }
  });
  localStorage.setItem("notes", JSON.stringify(data));
}
updateStorage();
