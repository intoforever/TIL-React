import { useState, useEffect, useRef } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms';

import 'styles/components/TodoForm.css'

function TodoForm() {
    const setTodoList = useSetRecoilState(todoListState);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const formInputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const newTodo = {id: Date.now(), text: inputValue, completed: false};
        setTodoList((todoList) => [...todoList, newTodo]);
        initStatus();
    }

    function initStatus() {
        setIsFormOpen(!isFormOpen);
        setInputValue("");
    }

    // form이 켜져 있다면 input에 포커싱
    useEffect(() => {
        if (!isFormOpen) {
            return;
        }
        formInputRef.current.focus();
    }, [isFormOpen]);

    return (
        <>
            <div className={`form-area p-fixed ${isFormOpen ? "d-flex" : "d-none"}`}>
                <form className="d-flex" id="todo-form" onSubmit={(e) => handleSubmit(e)}>
                    <label className="form-content">
                        <input
                            className="form-text scrollbar"
                            type="text"
                            value={inputValue}
                            ref={formInputRef}
                            maxLength="30"
                            placeholder="30자까지 입력 가능합니다."
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </label>
                </form>
                <div className="form-btn-wrap d-flex d-flex-align-center">
                    <button className="btn confirm-btn" form="todo-form">입력</button>
                    <button className="btn cancel-btn" onClick={() => initStatus()}>취소</button>
                </div>
            </div>
            <div className={`btn-area p-fixed  ${isFormOpen ? "d-none" : "d-flex"}`}>
                <button
                    className="add-btn"
                    onClick={() => setIsFormOpen(!isFormOpen)}
                >
                </button>
            </div>
        </>
    );
}

export default TodoForm