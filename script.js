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

sun.addEventListener("click", () => changeTheme("sun"))
moon.addEventListener("click", () => changeTheme("moon"))

const changeTheme = (svg) => {
  if (svg === "moon") {
    setThemeTwo()
    localStorage.setItem("theme", JSON.stringify("dark"))
  } else if (svg === "sun") {
    setThemeOne()
    localStorage.setItem("theme", JSON.stringify(null))
  }
}

//input
const userInput = document.querySelector("#textinput")

let todos = JSON.parse(localStorage.getItem("todo-list"))

userInput.addEventListener("keyup", (e) => {
  let userInputTask = userInput.value.trim()

  if (e.key == "Enter" && userInputTask) {
    if (!todos) {
      todos = [];
    }
    userInput.value = "";
    let userTask = { name: userInputTask, status: "pending" }
    todos.push(userTask)

    localStorage.setItem("todo-list", JSON.stringify(todos))
  }
  showTodo()
})
