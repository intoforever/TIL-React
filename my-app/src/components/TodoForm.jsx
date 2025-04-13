import { useState, useEffect, useRef } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms';
import todoFormStyle from 'styles/components/todo-form.module.css'

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
            <div className={`p-fixed ${todoFormStyle.formArea} ${isFormOpen ? "d-flex" : "d-none"}`}>
                <form className="d-flex" id="todo-form" onSubmit={(e) => handleSubmit(e)}>
                    <label className={todoFormStyle.formContent}>
                        <input
                            className={`${todoFormStyle.formText} ${todoFormStyle.scrollbar}`}
                            type="text"
                            value={inputValue}
                            ref={formInputRef}
                            maxLength="30"
                            placeholder="30자까지 입력 가능합니다."
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </label>
                </form>
                <div className={`d-flex d-flex-align-center ${todoFormStyle.formBtnWrap}`}>
                    <button className={`${todoFormStyle.btn} ${todoFormStyle.confirmBtn}`} form="todo-form">입력</button>
                    <button className={`${todoFormStyle.btn} ${todoFormStyle.cancelBtn}`} onClick={() => initStatus()}>취소</button>
                </div>
            </div>
            <div className={`p-fixed ${todoFormStyle.btnArea} ${isFormOpen ? "d-none" : "d-flex"}`}>
                <button
                    className={todoFormStyle.addBtn}
                    onClick={() => setIsFormOpen(!isFormOpen)}
                >
                </button>
            </div>
        </>
    );
}

export default TodoForm