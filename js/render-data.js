const projects = [
  {
    name: "3D Book Hover Effects",
    description:
      "A collection of interactive book covers with 3D hover effects.",
    ref: "./tutorials/3D Book Hover Effects/index.html",
  },
  {
    name: "3D Rotation",
    description: "Explore objects rotating in 3D space with smooth animations.",
    ref: "./tutorials/3D Rotation/index.html",
  },
  {
    name: "Animated Background Image Loop Animation",
    description: "Create captivating backgrounds with looping animated images.",
    ref: "./tutorials/Animated Background Image Loop Animation/index.html",
  },
  {
    name: "Anime JS Background Animation Effects",
    description: "Utilize Anime JS library for background animation effects.",
    ref: "./tutorials/Anime JS Background Animation Effects/index.html",
  },
  {
    name: "Clock",
    description: "A simple digital clock with stylish display.",
    ref: "./tutorials/Clock/index.html",
  },
  {
    name: "Earth and Mars Animation",
    description: "Visualize the animation of Earth and Mars orbiting the sun.",
    ref: "./tutorials/Earth and Mars Animation/index.html",
  },
  {
    name: "FontAwesome Icon Background Animation Effects",
    description: "Combine FontAwesome icons with background animations.",
    ref: "./tutorials/FontAwesome Icon Background Animation Effects/index.html",
  },
  {
    name: "Hot Cup of Tea",
    description: "Enjoy the animation of a steaming hot cup of tea.",
    ref: "./tutorials/Hot Cup of Tea/index.html",
  },
  {
    name: "Laser",
    description: "Simulate laser light effects with dynamic visuals.",
    ref: "./tutorials/Laser/index.html",
  },
  {
    name: "Loading Page",
    description: "Add flair to loading screens with animated elements.",
    ref: "./tutorials/Loading Page/index.html",
  },
  {
    name: "Text Reveal From Smoke Animation",
    description:
      "Reveal text using smoke-like animations for a mysterious effect.",
    ref: "./tutorials/Text Reveal From Smoke Animation/index.html",
  },
  {
    name: "Wavy Circle Loader Animation Effects",
    description: "Create loaders with wavy animations to captivate users.",
    ref: "./tutorials/Wavy Circle Loader Animation Effects/index.html",
  },
  {
    name: "Dark Neumorphism Cards",
    description: "Create dark neumorphism cards",
    ref: "./tutorials/Dark Neumorphism Cards/index.html",
  },
  {
    name: "3D Wavy Circle Loader Animation Effects",
    description: "Create 3D Wavy Circle Loader Animation Effects",
    ref: "./tutorials/3D Wavy Circle Loader Animation Effects/index.html",
  },
  {
    name: "Climbing Square",
    description: "Create Climbing Square",
    ref: "./tutorials/Climbing Square/index.html",
  },
  {
    name: "Magic Navigation Menu Indicator",
    description:
      "Magic Navigation Menu Indicator using Html CSS & Javascript | Curve Outside Effects",
    ref: "./tutorials/Magic Navigation Menu Indicator/index.html",
  },
]
const projectsList = document.querySelector("#projects ul")
for (let project of projects) {
  const projectItem = document.createElement("li")
  const projectLink = document.createElement("a")
  const projectTitle = document.createElement("p")

  projectTitle.textContent = project.name

  projectLink.href = project.ref
  projectLink.target = "_blank"

  projectLink.appendChild(projectTitle)
  projectItem.appendChild(projectLink)
  projectsList.appendChild(projectItem)
}
