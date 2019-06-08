var message = "";
var users;

var output = document.querySelector(".sectionContainer");

for (let i = 0; i < object.length; i++) {
  users = object[i];
  message += "<div class='userSection'>";
  message += "<div class='user-details'>";
  message += "<figure>";
  message += "<img src=" + users.img + ">";
  message += "<figcaption class='userPosition'>" + users.position + "</figcaption>";
  message += "</figure>";
  message += "<div class='userDetail'>";
  message += "<h3>" + users.name + "</h3>";
  message += "<div><i class='fas fa-map-marker-alt'></i><span>" + users.place + "</span></div>";
  message += "<p><b>" + users.twitter + "</b></p>";
  message += "<p class='description'>" + users.description + "</p>";
  message += "<p>" + users.Telephon + "</p>";
  message += "</div>";
  message += "</div>";
  message += "<div class='editbuttons'><i class='editbutton far fa-edit'></i><i class='deletebutton fas fa-trash'></i></div>";
  message += "</div>";
  message += "</div>";
}
output.innerHTML = message;

function clickButton() {
const deleteButton = document.querySelectorAll(".deletebutton");
const editButton = document.querySelectorAll(".editbutton");

//Will delete the section
  deleteButton.forEach(x =>
    x.addEventListener("click", e => {
      if (e.target.className == "deletebutton" || "fa-trash") {
        let buttonP = event.target.parentNode.parentNode;
        let Div = buttonP.parentNode;
        Div.removeChild(buttonP);
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