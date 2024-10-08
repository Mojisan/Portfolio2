window.onload = pageLoad

function pageLoad() {
  const project = document.getElementById("project")
  const assignment = document.getElementById("assignment")
  const work = document.getElementById("work")

  const projectUI = document.getElementById("project-ui")
  const assignmentUI = document.getElementById("assignment-ui")
  const workUI = document.getElementById("work-ui")

  project.onclick = function () {
    assignmentUI.classList.add("hidden")
    workUI.classList.add("hidden")
    projectUI.classList.remove("hidden")
  }

  assignment.onclick = function () {
    projectUI.classList.add("hidden")
    workUI.classList.add("hidden")
    assignmentUI.classList.remove("hidden")
  }

  work.onclick = function () {
    projectUI.classList.add("hidden")
    assignmentUI.classList.add("hidden")
    workUI.classList.remove("hidden")
  }
}
