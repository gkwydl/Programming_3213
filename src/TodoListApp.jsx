import "./todolist.css"
import Button from "./components/Button.jsx"
import CheckBox from "./components/CheckBox.jsx";
import TodoitemEmpty from "./components/TodoItemEmpty.jsx";

function TodoListApp() {
    return (
        <div className="todo">
            <h1 className="todo__title">ToDoToDo</h1>
            <form className="todo__form">
                <input type="text" className='todo__input' placeholder='할 일을 입력하세용' />
                <Button type='submit' className='todo__button todo__button--add'>Add</Button>
            </form> 

            <ul className='todo__list'>
                <TodoItemEmpty/>
                <li className='todo__item todo__item--complete'>
                    <CheckBox type="checkbox" className='todo__check' id="1" />
                    <Button className='todo__button todo__button--edit'>🤺</Button>
                    <Button className='todo__button todo__button--delete'>🗑️</Button>
                </li>
            </ul>
        </div>
    );
}

export default TodoListApp;