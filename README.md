# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![Screenshot](images/screenshot.png)

### Links

- Live Site URL: [click here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [TailwindCss](https://tailwindcss.com/) - CSS framework

### What I learned

I learnt how to effectively manipulate the localStorage Api
I also learnt how to handle CRUD operation

```js
localStorage.setItem("todo-list", JSON.stringify(todos))
let todos = JSON.parse(localStorage.getItem("todo-list"))
```

## Author

- Frontend Mentor - [@Headbwoi](https://www.frontendmentor.io/profile/Headbwoi)
- Twitter - [@Headbwoi](https://www.twitter.com/headbwoi_1)
