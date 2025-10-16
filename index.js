/**
Challenge: 

- Start building out the BoredBot Skeleton however you'd like. 
    That will include:
    - A title for the app ("BoredBot" might be a good start 😉)
    - A placeholder element that will be populated with the random 
      idea we get from the API
    - A button to click for triggering the GET request to the Bored API. 
      (Don't worry about implementing the button quite yet)
*/
document.getElementById('btn-section').addEventListener('click', function(){
  fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
     .then(data => {         
      document.getElementById("activity-name").textContent = data.activity
      document.getElementById('btn-section').textContent = "👀 "
      document.getElementById("title").textContent = "🤪 CrazyBot 🤪"
      document.body.classList.add('fun')
     })
})
