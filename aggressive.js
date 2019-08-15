// grab the element by id
const snippets = document.getElementById('snippets');

// setTimeout(() => {
//   snippets.style.backgroundColor = 'red';
// }, 2000);

// const h2 = snippets.querySelector('h2');
// const h2s = snippets.querySelectorAll('h2'); // array of h2
// h2s.forEach(h2 => (h2.style.fontSize = '5px'));

// setTimeout(() => {
//   snippets.innerHTML = `<p>Welcome to the snippets page yo</p>`;
// }, 2000);

setInterval(() => {
  // create a new element
  const button = document.createElement('button');
  // set its text
  button.innerText = 'Answer survey';

  // add event listeners
  button.addEventListener('click', survey);

  // add it to the body
  document.body.append(button);
}, 2000);

function survey() {
  prompt('How are you enjoying your time?');
  // sends response to server
}

function aggressiveButton(button) {
  button.innerHTML = `${button.innerHTML.toUpperCase()} pleaaaase`;
  // console.log(event.target);
}
