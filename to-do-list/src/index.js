import MyTodo from "./my-todo";
import TodoInput from "./todo-input";
import TodoItem from "./todo-item";

window.customElements.define('todo-list', MyTodo);
window.customElements.define('todo-input', TodoInput);
window.customElements.define('todo-item', TodoItem);