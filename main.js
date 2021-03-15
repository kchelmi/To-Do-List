const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h2 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const btn = `<button class="btncolor">x</button>`;

const removeTask = (e) => {
  e.target.parentNode.remove();
  taskNumber.textContent = listItems.length;

}

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask === "") return;

  const task = document.createElement('li');
  task.className = 'task';
  task.innerHTML = titleTask + btn;
  ul.appendChild(task);
  input.value = "";
  taskNumber.textContent = listItems.length;
  task.querySelector("button").addEventListener('click', removeTask);
}
form.addEventListener('submit', addTask);