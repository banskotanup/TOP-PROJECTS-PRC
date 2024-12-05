const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click", () => {
    const items = input.value;
    input.value = '';

    const li = document.createElement("li");
    const span = document.createElement("span");
    const buttonOne = document.createElement("button");

    li.appendChild(span);
    span.textContent = items;
    li.appendChild(buttonOne);
    buttonOne.textContent = "Delete";

    ul.appendChild(li);

    buttonOne.addEventListener('click', () => {
        ul.removeChild(li);
      });

      input.focus();
});







