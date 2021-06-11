let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

/* //CARD
<div class="card">
  <h2>Woody</h2>
  <img src=toy_image_url class="toy-avatar" />
  <p>4 Likes </p>
  <button class="like-btn">Like <3</button>
</div>
*/

/*
headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
}

body: JSON.stringify({
  "name": "Jessie",
  "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
  "likes": 0
})
*/

/*
function submitData(newName, newEmail) {
  const userUrl = "http://localhost:3000/users"

  const formData = {
    name: newName,
    email: newEmail
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch(userUrl, configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
    renderUsers(object);
  })
  .catch(function(error) {
    console.log(error.message);
    renderErrors(error)
  });
}

function renderUsers(newUser) {
  const newUserId = newUser.id;
  renderListItem(newUserId)
}

function renderErrors(error) {
  const errorMsg = error.message
  renderListItem(errorMsg)
}

function renderListItem (item) {
  if (!document.getElementById('userIds')) {
    const newUl = document.createElement('ul');
    document.body.appendChild(newUl).id = "userIds";
  }
  const ul = document.getElementById('userIds');
  const li = document.createElement('li');
  li.innerHTML = item;
  ul.appendChild(li);
  console.log(item);
}
*/
 
