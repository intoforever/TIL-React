import { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms';
import 'styles/components/TodoForm.css'

function TodoForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const setTodoList = useSetRecoilState(todoListState);

    function handleClick(inputValue) {
        const newTodo = {id: Date.now(), text: inputValue, completed: false};
        setTodoList((todoList) => [...todoList, newTodo]);
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <TodoFormModal isModalOpen={isModalOpen} handleClick={handleClick} />
            <div className={`add-btn-area p-fixed  ${isModalOpen ? "d-none" : "d-block"}`}>
                <button
                    className="add-btn"
                    onClick={() => setIsModalOpen(!isModalOpen)}
                >
                </button>
            </div>
        </>
    );
}

function TodoFormModal({ isModalOpen, handleClick }) {
    const [inputValue, setInputValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); // 기본 form 제출 동작 방지
        handleClick(inputValue); // 입력된 값을 handleClick에 전달
        setInputValue(""); // 입력값 초기화
    }

    return (
        <>
            <div className="form-modal">
                <form
                    action=""
                    className={`form-modal ${isModalOpen ? "d-flex" : "d-none"}`}
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <label className="form-modal-content">
                        <input
                            type="text"
                            className="form-modal-text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </label>
                    <button type="submit">확인</button>
                </form>
            </div>
        </>
    );
}

export default TodoForm