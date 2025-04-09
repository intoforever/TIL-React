import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms';

import 'styles/components/TodoItem.css'

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
        for (let i = 0; i < todoList.length; i++) {
            let list = todoList[i];
            if (list.id === todo.id) {
                let updatedTodoList = todoList.slice(0, i).concat(todoList.slice(i+1, todoList.length));
                setTodoList(updatedTodoList);
            }
        }
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
            <div className="item d-flex" onClick={(e) => handleItemClick(e, todo)}>
                <div className="checkbox-area d-flex d-flex-align-center">
                    <label className="checkbox-item btn">
                        <input type="checkbox" defaultChecked={todo.completed} />
                    </label>
                </div>
                <div className="content-area">
                    <input
                        className={`input-content ${todo.completed ? 'completed-content' : ''}`}
                        type="text"
                        value={inputValue}
                        maxLength="30"
                        onFocus={() => setIsEditting(true)}
                        onBlur={() => setIsEditting(false)}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <div className="btn-area d-flex d-flex-align-center">
                    {/* <button className={`btn edit-btn ${isEditting ? 'd-none' : ''}`} onClick={(e) => handleEditClick(e, todo)}></button> */}
                    <button className="btn delete-btn" onClick={(e) => handleDelClick(e, todo)}></button>
                </div>
            </div>
        </>
    );
}

export default TodoItem