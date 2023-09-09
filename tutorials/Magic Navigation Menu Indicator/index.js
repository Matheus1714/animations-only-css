const navagationItems = document.querySelectorAll(".list")
function activeLink() {
  navagationItems.forEach((navigationItem) => {
    navigationItem.classList.remove("active")
    this.classList.add("active")
  })
}
navagationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", activeLink)
})
