const body = document.body
const sun = document.querySelector(".sun"),
  moon = document.querySelector(".moon")

const setThemeOne = () => {
  body.classList.remove("dark")
  moon.classList.remove("hidden")
  sun.classList.add("hidden")
}
const setThemeTwo = () => {
  body.classList.add("dark")
  moon.classList.add("hidden")
  sun.classList.remove("hidden")
}

const d = document
d.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setThemeTwo()
  } else {
    setThemeOne()
  }
  if (JSON.parse(localStorage.getItem("theme")) === "dark") {
    setThemeTwo()
  } else if (JSON.parse(localStorage.getItem("theme")) === null) {
    setThemeOne()
  }
})

//input
const userInput = document.querySelector("#textinput")

userInput.addEventListener("keyup", (e) => {
  let userInputTask = e.target.value
  if (e.key === "Enter") {
    createTodo(userInputTask)
  }
})

sun.addEventListener("click", () => changeTheme("sun"))
moon.addEventListener("click", () => changeTheme("moon"))

const changeTheme = (svg) => {
  if (svg === "moon") {
    moon.classList.add("hidden")
    sun.classList.remove("hidden")
    body.classList.add("dark")
    localStorage.setItem("theme", JSON.stringify("dark"))
  } else if (svg === "sun") {
    moon.classList.remove("hidden")
    sun.classList.add("hidden")
    body.classList.remove("dark")
    localStorage.setItem("theme", JSON.stringify(null))
  }
}
