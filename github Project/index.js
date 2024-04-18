const btn = document.getElementById("mainBtn");
const userName = document.getElementById("userName");

async function fetchUser(userId) {
  let response = await fetch(`https://api.github.com/users/${userId}`);
  let result = await response.json();
  displayUser(result, userId);
}

btn.addEventListener("click", function () {
  document.getElementById("card").innerHTML = '<div class="loader"></div>';
  let userId = document.getElementById("name").value;
  fetchUser(userId);
});

function displayUser(result, userId) {
  if (!result.bio) {
    result.bio = "";
  }

  if (!result.avatar_url) {
    document.getElementById("card").innerHTML = "<h1>User not found</h1>";
  } else {
    document.getElementById("card").innerHTML = `<div class="userInfo">

 <img src="${result.avatar_url}"></img>
 <h2 id="userName">${result.name}</h2>
 <p>${result.bio}</p>
</div>


<div id="rightTab">

 <div id="detail">
   <div>

     <h3>Follower
       <div>${result.followers}</div></h3>
     </div>
     <div>

       <h3>Following<div>${result.following}</div></h3>
     </div>
     <div>

       <h3>Repo<div>${result.public_repos}</div></h3><br>
     </div>
 </div>
 <div>

   <a href=https://github.com/${userId} target="_blank"> 
   <button id="btn">View Profile</button>
   </a>
 </div>
</div>`;
  }
}
