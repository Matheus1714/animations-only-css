const html = document.documentElement
const classColors = ["", "red", "yellow", "green", "blue", "pink"]
const randomIndexColor = Math.floor(Math.random() * classColors.length)
const color = classColors[randomIndexColor]
if (!!color) html.classList.add(color)
