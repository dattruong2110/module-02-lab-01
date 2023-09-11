var headerListItems = document.querySelectorAll(".header-list-item");
var modal = document.getElementById("modal");
var usernameInput = document.getElementsByName("username")[0];
var passwordInput = document.getElementsByName("password")[0];

headerListItems.forEach((headerListItem) => {
  var headerListItemLink = headerListItem.children[0];

  headerListItem.addEventListener("mouseover", () => {
    headerListItem.style.backgroundColor = "#F2F2F2";
    headerListItem.style.borderBottom = "1px solid red";
    headerListItemLink.style.color = "black";
  });

  headerListItem.addEventListener("mouseout", () => {
    headerListItem.style.backgroundColor = "";
    headerListItem.style.borderBottom = "";
    headerListItemLink.style.color = "";
  });
});

const openLoginForm = () => {
  modal.style.display = "flex";
};

const closeLoginForm = () => {
  modal.style.display = "none";
};

const loginSuccessful = () => {
  var enteredUsername = usernameInput.value;
  var enteredPassword = passwordInput.value;

  if (enteredUsername === "admin" && enteredPassword === "123456") {
    alert("Login successful");
  } else if (enteredUsername !== "admin") {
    alert("Account doesn't exist");
  } else if (enteredPassword !== "123456") {
    alert("Wrong password");
  }
};
