import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../recoil/atoms'
import { activeTodoListState, completedTodoListState } from '../recoil/selectors'

import 'styles/components/TodoList.css'

import TodoSection from 'components/TodoSection'

function TodoList() {
    const todoList = useRecoilValue(todoListState);
    const activeTodos = useRecoilValue(activeTodoListState);
    const completedTodos = useRecoilValue(completedTodoListState);
    const [activeOn, setActiveOn] = useState(true); // NOTE: Active 토글 상태 관리
    const [completeOn, setCompleteOn] = useState(true); // NOTE: Completed 토글 상태 관리

    function handleToggleClick(type) {
        const toggleFunctions = {
            active: setActiveOn,
            complete: setCompleteOn
        };
        toggleFunctions[type]((prevStatus) => !prevStatus);
    }

    // 초기 데이터 확인
    useEffect(() => {
        console.log("★ init data loaded ★ : " + JSON.stringify(todoList));
    }, []);


    // 리스트에 변동 있을 때마다 localStorage에 저장
    useEffect(() => {
        const todos = todoList || [];
        localStorage.setItem('todoList', JSON.stringify(todos));
        console.log("★ data updated ★ : " + JSON.stringify(todos));
    }, [todoList]);

    return (
        <>
            <div>
                <TodoSection
                    id="active-toggle"
                    text="Active"
                    type="active"
                    isOn={activeOn}
                    todoList={activeTodos}
                    handleToggleClick={handleToggleClick}
                />
                <TodoSection
                    id="complete-toggle"
                    text="Completed"
                    type="complete"
                    isOn={completeOn}
                    todoList={completedTodos}
                    handleToggleClick={handleToggleClick}
                />
            </div>
        </>
    );
}

export default TodoList