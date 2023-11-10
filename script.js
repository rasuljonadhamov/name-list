const name = document.getElementById("name");
const persons = document.getElementById("persons");
const age = document.getElementById("age");
const email = document.getElementById("email");
const btn = document.getElementById("btn");
const editBtn = document.getElementById("edit");
const deleteBtn = document.getElementById("delete");
const form = document.getElementById("form-wrapper");

// ozgaruvchi

let user = {};

// functions
function checkValues() {
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  ValidateEmail(email.value);

  if (!name.value) {
    name.style.outlineColor = "red";
    name.focus();
    return;
  }

  if (!age.value) {
    age.style.outlineColor = "red";
    age.focus();
    return;
  }

  if (!email.value) {
    email.style.outlineColor = "red";
    email.focus();
    return;
  }
}

function showUsers(name, age, email) {
  // Name
  const inputNameEl = document.createElement("input");
  inputNameEl.type = "text";
  inputNameEl.value = name.value;

  // Age
  const inputAgeEl = document.createElement("input");
  inputAgeEl.type = "text";
  inputAgeEl.value = age.value;

  // Email
  const inputEmailEl = document.createElement("input");
  inputEmailEl.type = "text";
  inputEmailEl.value = email.value;

  persons.appendChild(inputNameEl);
  persons.appendChild(inputEmailEl);
  persons.appendChild(inputAgeEl);
}

function saveToLoacalStorage() {
  let data = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  user.id = data.length;
  user.name = name.value;
  user.age = age.value;
  user.email = email.value;

  data.push(user);

  localStorage.setItem("users", JSON.stringify(data));
}

// Events
btn.addEventListener("click", function (e) {
  e.preventDefault();

  checkValues();
  showUsers(name, age, email);
  saveToLoacalStorage();

  form.reset();
});
