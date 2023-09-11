const rootStyles = getComputedStyle(document.documentElement)

function rain() {
  const cloud = document.querySelector(".cloud")
  const drop = document.createElement("div")

  const dropOriginPosition = Math.floor(Math.random() * 300)
  const dropWidth = 0.5 + Math.random() * 5
  const dropHeight = 0.5 + Math.random() * 50
  const dropDuration = 1 + Math.random() * 0.5

  drop.classList.add("drop")

  drop.style.left = `${dropOriginPosition}px`
  drop.style.width = `${dropWidth}px`
  drop.style.height = `${dropHeight}px`
  drop.style.animationDuration = `${dropDuration}s`

  cloud.appendChild(drop)

  setTimeout(() => {
    cloud.removeChild(drop)
  }, 2000)
}
setInterval(() => {
  rain()
}, 20)
