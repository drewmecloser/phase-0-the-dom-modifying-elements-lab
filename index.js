const element = document.createElement("div");
document.body.append(element);

const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
}
element.append(ul);

element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

element.classList.remove("dog");
element.classList.add("cat", "sale");

const secondChild = ul.querySelector("li:nth-child(2)");

if (secondChild) {
    ul.removeChild(secondChild);
}

ul.remove();

const championDiv = document.createElement('div');
championDiv.textContent = "ASPE is the champion";

document.body.append(championDiv);
