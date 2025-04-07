import { useState } from 'react'
import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms';
import { activeTodoListState, completedTodoListState } from '../recoil/selectors';
import 'styles/components/TodoList.css'
import TodoSection from 'components/TodoSection'


function TodoList() {
    const [activeOn, setActiveOn] = useState(true);
    const [completeOn, setCompleteOn] = useState(true);
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const activeTodos = useRecoilValue(activeTodoListState);
    const completedTodos = useRecoilValue(completedTodoListState);

    function handleItemClick({ todo }) {
        let temp = todoList.map(item => 
            item.id === todo.id ? { ...item, completed: !item.completed } : item
        );
        setTodoList(temp);
    }

    function handleToggleClick({ type }) {
        const toggleFunctions = {
            active: setActiveOn,
            complete: setCompleteOn
        };
        toggleFunctions[type]((prevStatus) => !prevStatus);
    }

    return (
        <>
            <div>
            <TodoSection
                id="active-toggle"
                text="Active"
                type="active"
                isOn={activeOn}
                todos={activeTodos}
                onToggleClick={handleToggleClick}
                onItemClick={handleItemClick}
            />
            <TodoSection
                id="complete-toggle"
                text="Completed"
                type="complete"
                isOn={completeOn}
                todos={completedTodos}
                onToggleClick={handleToggleClick}
                onItemClick={handleItemClick}
            />
            </div>
        </>
    );
}

export default TodoList