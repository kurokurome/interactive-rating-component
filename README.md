# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### Links

- Solution URL: [Github Repo](https://https://github.com/kurokurome/interactive-rating-component/)
- Live Site URL: [Github Pages](https://kurokurome.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learned how to use javascript to contain a value in ID and put it on another ID and adding class to element

```JS
let selected;

function numRating(id) {
  selected = id;
  console.log(selected);
}

function submit() {
  if (selected) {
    document.getElementById("rating-number").innerText = selected;
    document.getElementById("rating-state").classList.add("hide");
    document.getElementById("thank-state").classList.remove("hide");
    console.log(selected);
  } else {
  }
}
```
