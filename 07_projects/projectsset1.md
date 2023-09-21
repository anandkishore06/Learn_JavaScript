# Projects related to DOM

## Project Link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-cwa7f9?file=index.html)

# Solution Code

## Project 1 -  BackGround Color Changer

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
## Project 2 - Calculate BMI

```javascript
const form = document.querySelector('form');
// console.log(form)
// this useCase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a Valid Height ${height}`;
  }else if(weight == '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please Give a Valid weight ${weight}`
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the results

    results.innerHTML = `<span>${bmi}</span>`
  }

});

```
## Project 3 - Digital Clock

```javascript
const clock = document.getElementById('clock')
setInterval(() => {
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```