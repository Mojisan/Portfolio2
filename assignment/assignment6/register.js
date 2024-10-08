window.onload = pageLoad
function pageLoad() {
  const forms = document.getElementById("myRegister")
  forms.onsubmit = validateForm
  forms.onreset = resetForm
}

function validateForm() {
  const fields = [
    "firstname",
    "lastname",
    "gender",
    "bday",
    "email",
    "username",
  ]
  const forms = document.forms["myRegister"]
  const password = forms["password"][0].value
  const reTypePassword = forms["password"][1].value
  const errorMsg = document.getElementById("errormsg")

  for (let field of fields) {
    if (!forms[field].value || !password || !reTypePassword) {
      errorMsg.innerHTML = "กรอกข้อมูลให้ครบถ้วน"
      return false
    }

    if (password != reTypePassword) {
      errorMsg.innerHTML = "กรอกรหัสผ่านให้ตรงกัน"
      return false
    }
  }
}

function resetForm() {
  document.getElementById("errormsg").innerHTML = ""
}
