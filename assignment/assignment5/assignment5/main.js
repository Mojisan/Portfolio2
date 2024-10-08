let topic = document.getElementById("topic")
let reply1 = document.getElementById("reply1")
let reply2 = document.getElementById("reply2")

let count = 1

function postFunction() {
    const message = document.getElementById("message").value
    if (count == 1) {
        document.getElementById("topic").innerHTML = message
    }
    else if (count == 2) {
        document.getElementById("reply1").innerHTML = message
    }
    else if (count == 3) {
        document.getElementById("reply2").innerHTML = message
    }
    count++
    document.getElementById("message").value = ""
}

function clearFunction() {
    document.getElementById("topic").innerHTML = ""
    document.getElementById("reply1").innerHTML = ""
    document.getElementById("reply2").innerHTML = ""
    document.getElementById("message").value = ""
    count = 1
}

window.onload = function() {
    document.getElementById("top").innerHTML = "Welcome to the Forum"
}