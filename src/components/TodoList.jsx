import TodoItemEmpty from "./TodoItemEmpty";
import TodoItem from "./TodoItem";

export default function TodoHeader() {
    return (
        <ul className='todo__list'>
            <TodoItemEmpty />
            <TodoItem />
        </ul>
    )
}