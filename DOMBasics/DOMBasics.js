const container = document.querySelector('#container');
let redText = document.createElement('p')
const h3ELement = document.createElement('h3')
const pinkContainer = document.createElement('div');
const h1Intern = document.createElement('h1');
const pIntern =document.createElement('p');
const  myBtns = document.querySelectorAll('button');

redText.innerText = "Hey I'm red!";
redText.setAttribute('style','color:red');


h3ELement.innerText = "I'm a blue H3";
h3ELement.setAttribute('style','color:blue');

pinkContainer.setAttribute('style','border:1px black solid; background-color:pink')
h1Intern.innerText='Im in a div';
pIntern.innerText = 'ME TOO';

pinkContainer.appendChild(h1Intern);
pinkContainer.appendChild(pIntern);

container.appendChild(redText);
container.appendChild(h3ELement);
container.appendChild(pinkContainer);

myBtns.forEach( button => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})


