import TodoItemEmpty from "./TodoItemEmpty";
import TodoItem from "./TodoItem";

export default function TodoHeader({ todos, ...rest }) {
    return (
        <ul className='todo__list'>
            {/* todos가 없으면, TodoItemEmpty */}
            {todos.length === 0 && <TodoItemEmpty />}
            {/* todos가 있으면, TodoItem에 todos던지기 */}
            {todos.length > 0 &&
                // todos에서 하나씩 꺼내서 todo → <TodoItem todo = {todo} />
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} {...rest} />)
            }
        </ul>
    )
}