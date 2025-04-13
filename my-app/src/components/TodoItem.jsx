import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms';
import todoItemStyle from 'styles/components/todo-item.module.css';

function TodoItem({ todo }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const [inputValue, setInputValue] = useState(todo.text);
    const [isEditting, setIsEditting] = useState(false);

    function handleItemClick(e, todo) {
        e.stopPropagation();
        if (isEditting) {
            return;
        }
        let newList = todoList.map(item => 
            item.id === todo.id ? { ...item, completed: !item.completed } : item
        );
        setTodoList(newList);
    }
    
    function handleDelClick(e, todo) {
        e.stopPropagation();
        let updatedTodoList = todoList.filter(list => list.id !== todo.id);
        setTodoList(updatedTodoList);
    }

    // input 값이 달라지면 바로 todoList 업데이트
    useEffect(() => {
        let newList = todoList.map(item => 
            item.id === todo.id ? { ...item, text: inputValue } : item
        );
        setTodoList(newList);
    }, [inputValue]);

    return (
        <>
            <div className={`d-flex ${todoItemStyle.item}`} onClick={(e) => handleItemClick(e, todo)}>
                <div className={`d-flex d-flex-align-center ${todoItemStyle.checkboxArea}`}>
                    <label className={`${todoItemStyle.btn} ${todoItemStyle.checkboxItem}`}>
                        <input type="checkbox" defaultChecked={todo.completed} />
                    </label>
                </div>
                <div className={todoItemStyle.contentArea}>
                    <input
                        className={`${todoItemStyle.inputContent} ${todo.completed ? todoItemStyle.completedContent : ''}`}
                        type="text"
                        value={inputValue}
                        maxLength="30"
                        onFocus={() => setIsEditting(true)}
                        onBlur={() => setIsEditting(false)}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <div className={`d-flex d-flex-align-center ${todoItemStyle.btnArea}`}>
                    {/* <button className={`btn edit-btn ${isEditting ? 'd-none' : ''}`} onClick={(e) => handleEditClick(e, todo)}></button> */}
                    <button className={`${todoItemStyle.btn} ${todoItemStyle.deleteBtn}`} onClick={(e) => handleDelClick(e, todo)}></button>
                </div>
            </div>
        </>
    );
}

export default TodoItem