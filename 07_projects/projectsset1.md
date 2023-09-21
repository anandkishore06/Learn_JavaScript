# Projects related to DOM

## Project Link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-cwa7f9?file=index.html)

# Solutin Code

## Project 1

```javascript
console.log("Anand")
const buttons = document.querySelectorAll('.button')
// console.log(buttons)

const body = document.querySelector('body')

buttons.forEach( (button) => {
  // console.log(button)
  button.addEventListener('click', (e) => {
    console.log(e)
    console.log(e.target)
    if(e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})


```