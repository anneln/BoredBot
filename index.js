document.getElementById("btn-section").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("activity-name").textContent = data.activity;
      document.getElementById("btn-section").textContent = "👀 ";
      document.getElementById("title").textContent = "🤪 CrazyBot 🤪";
      document.body.classList.add("fun");
    });
});
