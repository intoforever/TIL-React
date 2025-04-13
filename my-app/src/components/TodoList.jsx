import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, activeOnState, completeOnState } from '../recoil/atoms';
import { activeTodoListState, completedTodoListState } from '../recoil/selectors';
import todoListStyle from 'styles/components/todo-list.module.css';
import TodoSection from 'components/TodoSection';
import useLocalStorage from '../hook/useLocalStorage';

function TodoList() {
    const todoList = useRecoilValue(todoListState);
    const activeTodos = useRecoilValue(activeTodoListState);
    const completedTodos = useRecoilValue(completedTodoListState);
    const [activeOn, setActiveOn] = useRecoilState(activeOnState); // NOTE: Active 토글 상태 관리
    const [completeOn, setCompleteOn] = useRecoilState(completeOnState); // NOTE: Completed 토글 상태 관리

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
    useLocalStorage(todoList);

    return (
        <>
            <div className={todoListStyle.listWrap}>
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