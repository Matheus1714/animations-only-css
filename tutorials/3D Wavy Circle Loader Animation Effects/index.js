const loader = document.querySelector(".loader")

const numberOfArcs = 15
const arcSize = 10

for (let i = 0; i < numberOfArcs; i++) {
  const arcCicle = document.createElement("span")

  const delay = (numberOfArcs - i) * 0.1
  const position = arcSize * i

  arcCicle.style.animationDelay = `${delay}s`
  arcCicle.style.top = `${position}px`
  arcCicle.style.bottom = `${position}px`
  arcCicle.style.left = `${position}px`
  arcCicle.style.right = `${position}px`

  loader.appendChild(arcCicle)
}
