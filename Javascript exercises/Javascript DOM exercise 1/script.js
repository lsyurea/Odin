//Dom manipulation exercise 1

const red = document.createElement("p");
red.textContent = "Hey I'm red!"
red.style.color = 'red'

const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3!";
blue.style.color = 'blue'
const div = document.createElement('div');
div.innerHTML = `<h1>I'm in a div</h1>\n<p>Me Too!</p>`;
div.style.borderColor = 'black';
div.style.borderStyle = 'solid'; 
div.style.backgroundColor = 'pink';

// document.body.append(red);
// document.body.append(blue);
// document.body.append(div);


//Dom manipulation exercse 2
