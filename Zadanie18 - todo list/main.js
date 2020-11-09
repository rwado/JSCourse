const form = document.querySelector('form');

const input = document.querySelector("input.search");
const ul = document.querySelector("ul");
const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));
}

const removeTask = (e) => {
    e.target.parentNode.remove();
}

const addTask = (e) => {
    e.preventDefault();
    const input = document.querySelector('input.add');
    const newTaskTitle = input.value;
    if (newTaskTitle === "") {
        return;
    }
    const newLi = document.createElement('li');
    newLi.className = "shopping-list";
    ul.appendChild(newLi);
    input.value = "";

    newLi.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);

input.addEventListener('input', searchTask);