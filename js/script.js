function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
}
function filterProjects() {
  const searchInput = document.getElementById("search")
  const projectsList = document.querySelector("#projects ul")
  const projects = projectsList.querySelectorAll("li")

  const filter = searchInput.value.toUpperCase()

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i].querySelector("a p")
    const projectName = project.textContent || project.innerText
    if (projectName.toUpperCase().indexOf(filter) > -1) {
      projects[i].style.display = ""
    } else {
      projects[i].style.display = "none"
    }
  }
}
