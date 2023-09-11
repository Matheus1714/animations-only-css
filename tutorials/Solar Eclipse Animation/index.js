const numberOfStarts = 100

const body = document.body

for (let starIndex = 0; starIndex < numberOfStarts; starIndex++) {
  const star = document.createElement("div")
  star.classList.add("star")

  const x = Math.random() * 1000
  const y = Math.random() * 1000

  star.style.left = `${x}px`
  star.style.top = `${y}px`

  body.appendChild(star)
}
