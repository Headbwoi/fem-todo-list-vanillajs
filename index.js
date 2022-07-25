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
//todos
const ulElement = document.querySelector("ul")

let todos = JSON.parse(localStorage.getItem("todo-list")) //fetches the todos onload

const userInput = document.querySelector("#textinput")
const itemsLeft = document.querySelector("[data-itemleft]")

let statusItems
if (window.screen.width < 768) {
  statusItems = document.querySelectorAll(".status-mobile p")
} else if (window.screen.width > 768) {
  statusItems = document.querySelectorAll(".status p")
}
const removeActiveClass = () => {
  statusItems.forEach((item) => {
    item.classList.remove("active")
  })
}
statusItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveClass()
    item.classList.add("active")
    showTodo(item.dataset.status)
  })
})
//receives input as you type
userInput.addEventListener("keyup", (e) => {
  let userInputTask = userInput.value.trim() //trims value

  if (e.key == "Enter" && userInputTask) {
    //makes sure the user enters something before submitting
    if (!todos) {
      todos = []
    }
    // !todos ? (todos = []) : todos //if there are no todos render empty array else render the todos
    userInput.value = "" //resets the user input
    let userTask = { name: userInputTask, status: "active" } //creates todo object
    todos.push(userTask) //pushes todo object to array

    localStorage.setItem("todo-list", JSON.stringify(todos)) //sets the item in localstorage
  }
  if (window.screen.width < 768) {
    showTodo(
      document.querySelector(".status-mobile p.active").innerText.toLowerCase()
    )
  } else if (window.screen.width > 768) {
    showTodo(document.querySelector(".status p.active").innerText.toLowerCase())
  }

  //calls showTodo function
})

//shos the todo when called
const showTodo = (filter) => {
  let liEl = ""

  if (todos) {
    todos.forEach((todo, index) => {
      //if todos at the index of the clicked todo status is completed add checked to the input element else add ""
      let isCompleted = todo.status == "completed" ? "checked" : ""
      if (filter == todo.status || filter == "all") {
        liEl += `
            <li
                class="flex items-center justify-start h-[3.25rem] md:h-[4.0625rem] pl-6 pr-5 border-b border-Light_Grayish_Blue_light dark:border-b dark:border-Very_Dark_Grayish_Blue_dark1 relative overflow-hidden group cursor-pointer ${isCompleted}"
              >
                <label for="${index}">
                  <input type="checkbox" id="${index}" class="todo hidden" ${isCompleted} onclick="updateStatus(this)"/>
                  <span
                    class="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 mr-3 md:mr-6 w-5 h-5 md:h-6 md:w-6 rounded-full ring-1 ring-Light_Grayish_Blue_light dark:ring-Very_Dark_Grayish_Blue_dark2 cursor-pointer grid place-items-center group-hover:border-l group-hover:border-l-gradient_1 group-hover:border-r group-hover:border-r-gradient_2"
                  >
                    <svg
                      class="text-Very_Light_Gray dark:text-Very_Dark_Desaturated_Blue"
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="9"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        d="M1 4.304L3.696 7l6-6"
                      />
                    </svg>
                  </span>
  
                  <p
                    class="text-Very_Dark_Grayish_Blue_light dark:text-Light_Grayish_Blue_dark hover:dark:text-Light_Grayish_Blue_hover md:text-[1.09375rem] first-letter:uppercase relative pl-8 md:pl-12 font-normal cursor-pointer"
                  >
                    ${todo.name}
                  </p>
                </label>
              <!-- check icon -->
                <div
                  class="ml-auto h-6 w-6 relative md:opacity-0 group-hover:opacity-100 check"
                  onclick="deleteTodo(${index}, '${filter}')"
                >
                  <span
                    class="absolute top-1/2 -translate-y-1/2 w-full h-[1px] cursor-pointer bg-Light_Grayish_Blue_light dark:bg-Very_Dark_Grayish_Blue_dark1 block rotate-45"
                  ></span>
                  <span
                    class="absolute top-1/2 -translate-y-1/2 w-full h-[1px] cursor-pointer bg-Light_Grayish_Blue_light dark:bg-Very_Dark_Grayish_Blue_dark1 block -rotate-45"
                  ></span>
                </div>
          </li>
     `
      }

      ulElement.innerHTML =
        liEl ||
        `<span class="flex items-center justify-center text-Very_Dark_Grayish_Blue_light dark:text-Very_Dark_Grayish_Blue_dark1"> you dont have any item here </span>`
    })
  }
  itemsLeft.innerText = todos.length
}
showTodo("all")

const updateStatus = (selectedTask) => {
  if (selectedTask.checked) {
    selectedTask.classList.add("active")
    //updates selectedTask status to completed
    todos[selectedTask.id].status = "completed"
  } else {
    selectedTask.classList.remove("active")
    //updates selectedTask status to active
    todos[selectedTask.id].status = "active"
  } //updates the localstorage
  localStorage.setItem("todo-list", JSON.stringify(todos))
}

const deleteTodo = (deleteIndex, filter) => {
  todos.splice(deleteIndex, 1) //removes/deletes todo at the clicked index
  localStorage.setItem("todo-list", JSON.stringify(todos)) //updates the todos in localstorage
  showTodo(filter)
}
