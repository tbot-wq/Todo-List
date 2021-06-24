if (localStorage.getItem("end")) {
} else {
  localStorage.setItem("end", 0);
}

const content = document.getElementById("text");
const additem = document.getElementById("additem");
const deleitem = document.getElementById("deleitem");
const main = document.getElementById("element");

for (let index = parseInt(localStorage.getItem("end")); index > 0; index--) {
  const data = localStorage.getItem(index);
  var element = `
          <p class="${index}">${data}</p>
          <div class="buttons">
            <div class="small-item edit" onclick="editElement(this)"><i class="fas fa-edit"></i></div>
            <div class="small-item done" onclick="doneElement(this)">
              <i class="far fa-check-circle"></i>
            </div>
            <div class="small-item dele" onclick="deleElement(this)"><i class="fas fa-trash-alt"></i></div>
          </div>
`;
  var list = document.createElement("li");
  list.innerHTML = element;
  main.appendChild(list);
}

additem.addEventListener("click", () => {
  var text = content.value;
  content.value = "";
  var count = parseInt(localStorage.getItem("end")) + 1;
  localStorage.setItem(count, text);
  localStorage.setItem("end", count);
  var element = `
          <p class="${count}">${text}</p>
          <div class="buttons">
            <div class="small-item edit" onclick="editElement(this)"><i class="fas fa-edit"></i></div>
            <div class="small-item done" onclick="doneElement(this)">
              <i class="far fa-check-circle"></i>
            </div>
            <div class="small-item dele" onclick="deleElement(this)"><i class="fas fa-trash-alt"></i></div>
          </div>
`;
  var list = document.createElement("li");
  list.innerHTML = element;
  main.appendChild(list);
});

deleitem.addEventListener("click", () => {
  document.querySelectorAll("li").forEach((ele_del) => {
    main.removeChild(ele_del);
  });
  localStorage.clear();
  localStorage.setItem("end", 0);
});

function editElement(e) {
  var element = e.parentElement.parentElement.firstElementChild;
  var content = prompt("Edit The Content", element.innerText);
  element.innerText = content;
  localStorage.setItem(element.classList, content);
}
function doneElement(e) {
  var element = e.parentElement.parentElement.firstElementChild;
  element.classList.toggle("cross-text");
}
function deleElement(e) {
  var element = e.parentElement.parentElement;
  localStorage.removeItem(`${element.firstElementChild.classList}`);
  localStorage.setItem("end", parseInt(localStorage.getItem("end")) - 1);
  main.removeChild(element);
}
