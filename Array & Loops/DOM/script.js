const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is dom manipulation";
container.appendChild(content);


const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

const head3 = document.createElement("h3");
head3.textContent = "Hey I'm blue h3!";
head3.style.color = "blue";
container.appendChild(head3);


const div = document.createElement("div");
const head1 = document.createElement("h1");
head1.textContent = "Hello I'm div";
div.appendChild(head1);
const p = document.createElement("p");
p.textContent = "ME TOO!";
div.appendChild(p);
div.setAttribute("style", "border: solid 1px black; background-color: pink;");
container.appendChild(div);

const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");   method2

// btn.addEventListener("click", () => {
//     alert("Hello World");
// });

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
    // console.log(e.target);
});