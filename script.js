const sun = document.querySelector(".sun"),
  moon = document.querySelector(".moon")
const d = document.body

d.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark")
  }
})

const changeTheme = (svg) => {
  if (svg === "moon") {
    moon.classList.add("hidden")
    sun.classList.remove("hidden")
  } else if (svg === "sun") {
    moon.classList.remove("hidden")
    sun.classList.add("hidden")
  }
}

sun.addEventListener("click", () => changeTheme("sun"))
moon.addEventListener("click", () => changeTheme("moon"))

const li = document.querySelector("ul")
const todo = li.querySelector(".todo")
todo.addEventListener("click", () => {
    todo.classList.toggle("active")
})


