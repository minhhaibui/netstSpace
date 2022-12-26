AOS.init();

const btn_logout = document.querySelector(".btn_logout");
const header_login = document.querySelector(".header_login");
const header = document.getElementById("header");

const toggle = document.querySelector(".header_toggle");
// console.log(toggle);
const header_menu = document.querySelector(".header_menu");
const header_right = document.querySelector(".header_right");
toggle.addEventListener("click", function (e) {
  e.target.classList.toggle("fa-times");
  e.target.classList.toggle("fa-bars");
  header_menu.classList.toggle("show_menu");
  header.classList.toggle("header_bgr-toggle");
  header_right.classList.toggle("show_menu");
});

//login-logout

let isLogin = localStorage.getItem("isLogin");
let userNamePass = localStorage.getItem("userNamePass");
let user = document.querySelector(".user");
let headerLogin = document.querySelector(".header_login");
let btnLogOut = document.querySelector(".btn_logout");
let userTitle = document.querySelector(".user-title");

if (isLogin) {
  headerLogin.classList.add("remove_headerLogin");
  btnLogOut.classList.add("show_btnLogOut");
  userTitle.innerHTML = "xin chào " + userNamePass;
} else if (isLogin == null) {
  headerLogin.classList.remove("remove_headerLogin");
  btnLogOut.classList.remove("show_btnLogOut");
  user.classList.remove("active");
}
btnLogOut.addEventListener("click", logout);
function logout(e) {
  e.preventDefault;
  window.location.reload();
  localStorage.removeItem("isLogin");
  localStorage.removeItem("userNamePass");

  console.log("xinchao");
}

// scroll

window.onscroll = function () {
  console.log(document.documentElement.scrollTop);
  const header = document.querySelector(".header");
  if (document.documentElement.scrollTop > 30) {
    header.style.backgroundColor = "transparent";
  }
  if (document.documentElement.scrollTop > 90) {
    header.style.backgroundColor = "white";
  }
};
