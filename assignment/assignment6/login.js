window.onload = loginLoad
function loginLoad() {
  const forms = document.getElementById("myLogin")
  forms.onsubmit = checkLogin
}

function checkLogin() {
  const username = document.forms["myLogin"]["username"].value
  const password = document.forms["myLogin"]["password"].value

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const usernameParams = urlParams.get("username")
  const passwordParams = urlParams.get("password")

  if (username != usernameParams || password != passwordParams) {
    alert("กรอก Username หรือ Password ให้ถูกต้อง")
    return false
  }

  alert("Login Success")
}
