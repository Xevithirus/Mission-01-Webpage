// make drop down visible
function openLoginDropdownMenu() {
    var dropdown = document.getElementById("login-dropdown");
    dropdown.classList.toggle("show");
}

// login function 
function login() {
    // login functionality needs to be implemented here later
    // toggles login state to alter icon text
    var loginIcon = document.getElementById("login-icon");
    loginIcon.innerHTML = "🔓";
    loginIcon.setAttribute("onclick", "logout()");
    var dropdown = document.getElementById("login-dropdown");
    dropdown.classList.remove("show");
}

function logout() {
    // logout functionality here
    var loginIcon = document.getElementById("login-icon");
    loginIcon.innerHTML = "🔒";
    loginIcon.setAttribute("onclick", "openLoginDropdownMenu()");
}

// zoom function for map image
function zoomIn() {
    console.log("Zoom function called.");
    var worldMap = document.getElementById("world-map");
    // toggle setting
    worldMap.classList.toggle("zoomed");
}

// binds zoomIn funtion to click event of image
document.addEventListener("DOMContentLoaded", function () {
    var worldMap = document.getElementById("world-map");
    worldMap.addEventListener("click", zoomIn);
});