var headerListItems = document.querySelectorAll(".header-list-item");
var headerListItemsLink = document.querySelectorAll(".header-list-item-link");
var modal = document.getElementById("modal");
var usernameInput = document.getElementsByName("username")[0];
var passwordInput = document.getElementsByName("password")[0];

headerListItems.forEach((headerListItem) => {
  // Mouseover event handler
  headerListItem.addEventListener("mouseover", () => {
    // Add your hover effect here (e.g., change background color)
    headerListItem.style.backgroundColor = "#F2F2F2";
    headerListItem.style.borderBottom = "1px solid red";
  });

  // Mouseout event handler
  headerListItem.addEventListener("mouseout", () => {
    // Remove the hover effect here (e.g., revert to the original background color)
    headerListItem.style.backgroundColor = "";
    headerListItem.style.borderBottom = "";
  });

  // headerListItemsLink.forEach((headerListItemLink) => {
  //   headerListItemLink.addEventListener("mouseover", () => {
  //     headerListItemLink.style.color = "black";
  //   });

  //   headerListItemLink.addEventListener("mouseout", () => {
  //     headerListItemLink.style.color = "";
  //   });
  // });
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
