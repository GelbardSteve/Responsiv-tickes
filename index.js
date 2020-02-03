function user_object() {
  let message = "";
  object.forEach(users => {
    message += `
    <div class='userSection'>
      <div class='user-details'>
        <figure>
          <img src=${users.img}>
          <figcaption class='userPosition'>${users.position}</figcaption>
        </figure>
        <div class='userDetail'>
          <h3>${users.name}</h3>
          <div>
            <i class='fas fa-map-marker-alt'></i>
            <span>
              ${users.place}
            </span>
          </div>
          <p><b>${users.twitter}</b></p>
          <p class='description'>${users.description}</p>
          <p>${users.Telephon}</p>
        </div>
      </div>
      <div class='editbuttons'>
      <i class='editbutton far fa-edit'></i><i class='deletebutton fas fa-trash'></i></div>
      </div>
    </div>`;
  });
  output.innerHTML = message;
}
user_object();

add_user.addEventListener("click", () => {
  let new_user = {
    img: user_img.options[user_img.selectedIndex].text,
    position: user_position.value,
    name: user_name.value,
    place: user_place.value,
    twitter: user_twitter.value,
    description: user_description.value,
    Telephon: user_tel.value
  };
  object.push(new_user);
  user_object();
  clickButton();
});

function clickButton() {
  const deleteButton = document.querySelectorAll(".deletebutton");
  const editButton = document.querySelectorAll(".editbutton");

  //Will delete the section
  deleteButton.forEach((x, i) =>
    x.addEventListener("click", e => {
      if (e.target.className == "deletebutton" || "fa-trash") {
        object.splice(i, 1);
        user_object();
        clickButton();
      }
    })
  );

  //Will edit the section
  editButton.forEach(x =>
    x.addEventListener("click", e => {
      if (e.target.className == "editbutton" || "fa-edit") {
        let buttonE = event.target.parentNode.parentNode;
        buttonE.contentEditable = true;
      }
    })
  );
}
clickButton();

add_form_user.style.display = "none";
add_form.addEventListener("click", () => {
  add_form_user.style.display = "";
});

add_new_user.addEventListener("click", () => {
  add_form_user.style.display = "none";
});
