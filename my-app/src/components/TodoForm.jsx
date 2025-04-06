import { useState } from 'react'
import 'styles/components/TodoForm.css'

function TodoForm() {
    function handleClick() {
        console.log('버튼 클릭!!!');
    }

    return (
        <>
            <div className="form p-fixed">
                <button className="add-btn" onClick={() => handleClick()}></button>
                <label className="d-none">
                    <input type="text" />
                </label>
            </div>
        </>
    );
}

export default TodoForm