import { useState } from 'react'
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms';
import 'styles/components/TodoItem.css'

function TodoItem({ todo, onItemClick }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    function handleEditClick(e, todo) {
        e.stopPropagation();
        console.log("편집!!!");
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

    function handleChangeCheckBox(todo) {
        
    }

    return (
        <>
            <div className="item d-flex" onClick={() => onItemClick({todo})}>
                <div className="checkbox-area d-flex d-flex-align-center">
                    <label className="checkbox-item">
                        <input type="checkbox" defaultChecked={todo.completed} />
                    </label>
                </div>
                <div className={`content-area ${todo.completed ? 'completed-content' : ''}`}>{todo.text}</div>
                <div className="btn-area d-flex d-flex-align-center">
                    <button className="btn edit-btn" onClick={(e) => handleEditClick(e, todo)}></button>
                    <button className="btn delete-btn" onClick={(e) => handleDelClick(e, todo)}></button>
                </div>
            </div>
        </>
    );
}

export default TodoItem