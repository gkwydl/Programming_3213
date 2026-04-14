import { useState } from "react";
import "./todolist.css"
import Button from "./components/Button.jsx"
import CheckBox from "./components/CheckBox.jsx";
import TodoItemEmpty from "./components/TodoItemEmpty.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import TodoAdder from "./components/TodoAdder.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TodoList from "./components/TodoList.jsx";

class  Todo {
    constructor(id, text, isCompleted) {
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted;
    }
}
function TodoListApp() {
    const [todos, setTodos] = useState([]);
    function addTodo(text) {
        // 이전 todos에 newTodo 만들어서 추가하자 -> 그것을 setTodos()로 함
        setTodos((todos) => [
            ...todos,   // todos에 있는 item을 다 꺼내서 새로운 리스트에 하나씩 넣어줌
            new Todo(
                Date.now(), // id: 고유 ID 시간을 이용.  == new Date().getTime() javaScript에서 시간을 숫자로 표현한 것
                text,   // text: 할 일 내용
                false   // isCompleted: 할 일의 완료 여부. 초기값은 false
            )
        ]);
    }

    return (
        <div className="todo">
            <TodoHeader><h1>ToDoToDo</h1></TodoHeader>
            <TodoAdder addTodo={addTodo} />
            <TodoList/>
        </div>
    );
}

export default TodoListApp;