// MVC -  Model, View, Controller

// todolist app, add todos, delete todos
// UI
// MVC
// db

// fetch("http://localhost:3000/comments")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

let idNumber = 1;

const APIs = (() => {
  const baseURL = "http://localhost:3000/todos";
  const getTodos = () => {
    return fetch(baseURL).then((res) => res.json());
  };

  const createTodo = (newTodo) => {
    return fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then((res) => res.json());
  };

  const deleteTodo = (id) => {
    return fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  return {
    getTodos,
    createTodo,
    deleteTodo,
  };
})();

const Model = (() => {
  class State {
    #todos;
    #onChange;
    constructor() {
      this.#todos = [];
    }

    get todos() {
      return this.#todos;
    }

    set todos(newTodos) {
      this.#todos = newTodos;
      this.#onChange();
    }

    subscribe(cb) {
      this.#onChange = cb;
    }
  }

  return { State };
})();

const View = (() => {
  const todolistEl = document.querySelector(".todo__list");
  const inputEl = document.querySelector(".todo__input");
  const addBtnEl = document.querySelector(".todo__add-btn");

  const getInputValue = () => {
    return inputEl.value;
  };

  const clearInput = () => {
    inputEl.value = "";
  };

  const renderTodos = (todos) => {
    let todosTemplate = "";
    todos.forEach((todo) => {
      const todoItem = `<li id=${todo.id}>
              <span>${todo.content}</span>
              <button class="todo__delete-btn">Delete</button>
            </li>`;
      todosTemplate += todoItem;
    });

    todolistEl.innerHTML = todosTemplate;
  };

  return {
    getInputValue,
    clearInput,
    renderTodos,
    addBtnEl,
  };
})();

const Controller = (() => {
  const state = new Model.State();

  const setUpAddHandler = () => {
    View.addBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      const inputValue = View.getInputValue();
      console.log(inputValue);
      const newTodo = {
        id: idNumber,
        content: inputValue,
      };
      APIs.createTodo(newTodo).then((data) => {
        console.log("create todo", data);
        state.todos = [...state.todos, data];
        // View.renderTodos(state.todos);
        View.clearInput();
      });
      idNumber++;
    });
  };

  const init = () => {
    state.subscribe(() => {
      View.renderTodos(state.todos);
    });

    APIs.getTodos().then((data) => {
      state.todos = data;
      // View.renderTodos(state.todos);
    });
    setUpAddHandler();
  };

  return {
    init,
  };
})(Model, View, APIs);

Controller.init();

// View.renderTodos();

// Evaluation
// requirement: use MVC pattern to implmenent an app with html, css, js, 3 hours
// submit a repo link before 5:30pm EST, commit all of your code before the deadline, late work is not accepted
// starter code will be provided, with json-server, live-server
