import "./todolist.css"
import Button from "./components/Button.jsx"
import CheckBox from "./components/CheckBox.jsx";
import TodoItemEmpty from "./components/TodoItemEmpty.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import TodoAdder from "./components/TodoAdder.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TodoList from "./components/TodoList.jsx";

function TodoListApp() {
    return (
        <div className="todo">
            <TodoHeader><h1>ToDoToDo</h1></TodoHeader>
            <TodoAdder/>
            <TodoList/>
        </div>
    );
}

export default TodoListApp;