import TodoItem from 'components/TodoItem';
import ToggleButton from 'components/ToggleButton';

function ToggleSection({ id, text, type, handleToggleClick, isOn, todoList }) {
    return (
        <>
            <div>
                <ToggleButton
                    id={id}
                    text={text}
                    type={type}
                    handleToggleClick={handleToggleClick}
                />
                <div style={{display: isOn ? "block" : "none"}}>
                    <ul>
                        {todoList.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );  
}

export default ToggleSection