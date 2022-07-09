const init = async () => {
  const data = await fetch("/api/places")
    .then((data) => data.json())
    .then((data) => console.log("Data: ", data));
};

function addTrip(trip) {
  const comment_text = document.querySelector("location").value.trim();
  const location = document.querySelector("comments").value.trim();
  console.log(location);
  console.log(comment_text);
}

document.querySelector(".btn-add-trip").addEventListener("submit", (e) => {
  e.preventDefault();
  addTrip();
});

init();
