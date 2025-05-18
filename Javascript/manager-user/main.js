const body = document.querySelector("body");
const searchSection = document.querySelector(".search-section");
const addBtn = document.querySelector(".add-btn");
const userSection = document.querySelector(".user-section")
const editUser = document.querySelector(".edit-user");
const firstNameInput = document.querySelector('#first');
const emailInput = document.querySelector('#mail');
const btnSubmit = document.querySelector(".save");
const btnCancel = document.querySelector(".cancel");

const user = document.querySelector(".user");

// user.onmouseover = function() {mouseOver()};
// user.onmouseout = function() {moureOut()};

addBtn.addEventListener("click", addFuntion);
btnCancel.addEventListener("click", cancelEdit);
btnSubmit.addEventListener("click", saveEdit);




function addFuntion() {
  editUser.style.display = "block";
  editUser.style.display = "flex";
  searchSection.style.filter = "blur(4px)";
  userSection.style.filter = "blur(4px)";
}

function cancelEdit() {
  if (!confirm("are you sure to exit?")) return
  editUser.style.display = "none";
  searchSection.style.filter = "blur(0px)";
  userSection.style.filter = "blur(0px)";
}
function saveEdit() {
  let newUser = document.createElement("div");
  let userPic = document.createElement("div");
  let userName = document.createElement("h3");
  let userEmail = document.createElement("p");

  newUser.classList.add("user");
  userPic.classList.add("pic");

  userSection.appendChild(newUser);
  newUser.appendChild(userPic);
  newUser.appendChild(userName);
  newUser.appendChild(userEmail);


  userName.textContent = firstNameInput.value;
  userEmail.textContent = emailInput.value;

  editUser.style.display = "none";
  searchSection.style.filter = "blur(0px)";
  userSection.style.filter = "blur(0px)";

  firstNameInput.value = "";
  emailInput.value = "";

  newUser.addEventListener("click", function () {

    const askUser = prompt("do you want to delete or edit the accout?  delete/edit")
    if (askUser === "edit".toLocaleLowerCase()) {
      edit()
    }
    if (askUser === "delete".toLocaleLowerCase()) {
      deleteUser()
    }
  })
  return { newUser, userName, userEmail }
}

function edit() {

  addFuntion();

  firstNameInput.defaultValue = userName.textContent;
  emailInput.defaultValue = userEmail.textContent;

  userName.textContent = firstNameInput.value;
  userEmail.textContent = emailInput.value;

  editUser.style.display = "none";
  searchSection.style.filter = "blur(0px)";
  userSection.style.filter = "blur(0px)";

  firstNameInput.value = "";
  emailInput.value = "";
}

function deleteUser() {

  const confirmation = prompt("are you sure to delete you account ?  yes/no")
  if (confirmation === "yes".toLocaleLowerCase()) [
    userSection.removeChild(newUser)
  ]
  else {
    return null
  }
}

