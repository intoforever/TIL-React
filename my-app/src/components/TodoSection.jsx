import TodoItem from 'components/TodoItem'
import ToggleButton from 'components/ToggleButton'

function ToggleSection({ id, text, type, isOn, todos, onToggleClick, onItemClick }) {
    return (
        <>
            <div>
                <ToggleButton
                    id={id}
                    text={text}
                    type={type}
                    onToggleClick={onToggleClick}
                />
                <div style={{display: isOn ? "block" : "none"}}>
                    <ul>
                        {todos.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onItemClick={onItemClick}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );  
}

export default ToggleSection