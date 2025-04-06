import { useState } from 'react'
import 'styles/components/TodoList.css'
import TodoItem from 'components/TodoItem'
import TodoForm from 'components/TodoForm'

function TodoList() {
    const [activeOn, setActiveOn] = useState(true);
    const [completeOn, setCompleteOn] = useState(true);

    function handleToggleClick({ type }) {
        const toggleFunctions = {
            active: setActiveOn,
            complete: setCompleteOn
        };
        toggleFunctions[type]((prevStatus) => !prevStatus);
    }

    function handleItemClick() {
        console.log('input박스 클릭!!!!');
    }

    return (
        <>
            <ul>
                <li>
                    <label className="font-20 bold">
                        <input className="toggle-switch" type="checkbox" id="active-toggle" onClick={() => handleToggleClick({type: 'active'})} />
                        Active
                    </label>
                    <div style={{display: activeOn ? "block" : "none"}}>
                        <TodoItem onItemClick={handleItemClick} />
                    </div>
                </li>
                <li>
                    <label className="font-20 bold">
                        <input className="toggle-switch" type="checkbox" id="complete-toggle" onClick={() => handleToggleClick({type: 'complete'})} />
                        Completed
                    </label>
                    <div style={{display: completeOn ? "block" : "none"}}>
                        <TodoItem onItemClick={handleItemClick} />
                    </div>
                </li>
            </ul>
        </>
    );
}

export default TodoList