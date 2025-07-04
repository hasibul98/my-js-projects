const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
function addTodo(todo) {
  let todoText = input.value.replace(/\s+/g, " ");
  let completed = false;
  if (todo) {
    todoText = todo.text.replace(/\s+/g, " ");
    completed = todo.completed;
  }
  // console.log(todoText);
  if (todoText.trim()) {
    const todoEl = document.createElement("li");

    if (completed) {
      todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;
    todoEl.addEventListener("click", () => {
      if (todoEl.contentEditable === "true") return;
      todoEl.classList.toggle("completed");
      updateLS();
    });
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
    todoEl.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      todoEl.contentEditable = true;
      todoEl.focus();

      const finishEdit = (event) => {
        if (
          (event.type === "keydown" && event.key === "Enter") ||
          event.type === "blur"
        ) {
          if (event.type === "keydown") event.preventDefault();
          const newText = todoEl.innerText.replace(/\s+/g, " ").trim();
          console.log(newText);
          if (!newText) {
            todoEl.remove();
          } else {
            todoEl.innerText = newText;
            todoEl.contentEditable = false;
            todoEl.blur();
          }

          updateLS();
          // todoEl.blur();
          todoEl.removeEventListener("keydown", finishEdit);
          todoEl.removeEventListener("blur", finishEdit);
        }
      };
      todoEl.addEventListener("keydown", finishEdit);
      todoEl.addEventListener("blur", finishEdit);
    });
    todosUL.appendChild(todoEl);
    input.value = "";
  }

  updateLS();
}
function updateLS() {
  const todos = [];
  todosUL.querySelectorAll("li").forEach((li) => {
    todos.push({
      text: li.innerText,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
