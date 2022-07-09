
async function addTrip(trip) {
  const comment_text = document.getElementById("comments").value.trim();
  const location = document.getElementById("location").value.trim();
  console.log(location);
  console.log(comment_text);
  // http://localhost:3004/api/wishlist/New%20York
  const results= await fetch(`/api/wishlist/${location}`, {
    method:'GET',
    headers: {
        'Content-Type' : 'application/json'
    }
}).then(response => response.json())
//.then(data => console.log(data));
console.log(results);
addCard(results);
}

function addCard(loco) {
    const location= document.getElementById("cardLocation");
    const name=document.createElement("div");
    name.classList.add("card-body");
    name.src = loco.location;
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = loco.photo;
    location.appendChild(name);
   // console.log(name);
    //const nameLocation= document.getElementById("cardLocation");
    location.appendChild(img);

    //cardLocation
}

document.getElementById("tripbtn").addEventListener("click", (e) => {
  e.preventDefault();
  addTrip();
});


