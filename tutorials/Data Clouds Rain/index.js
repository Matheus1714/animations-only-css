function randomText() {
  const text = `!@#$%¨&*()_+=-|?{}[]`
  const letter = text[Math.floor(Math.random() * text.length)]
  return letter
}

function rain() {
  const cloud = document.querySelector(".cloud")
  const drop = document.createElement("div")

  const left = Math.floor(Math.random() * 290)
  const size = 0.5 + Math.random() * 1.5
  const duration = 1 + Math.random() * 1

  drop.classList.add("drop")
  drop.innerText = randomText()
  drop.style.left = `${left}px`
  drop.style.fontSize = `${size}em`
  drop.style.animationDuration = `${duration}s`

  cloud.appendChild(drop)

  setTimeout(() => {
    cloud.removeChild(drop)
  }, 2000)
}
setInterval(() => {
  rain()
}, 20)
