import { useEffect } from 'react'

// 리스트에 변동 있을 때마다 localStorage에 저장
function useLocalStorage(todoList) {
    useEffect(() => {
        const todos = todoList || [];
        localStorage.setItem('todoList', JSON.stringify(todos));
        console.log("★ data updated ★ : " + JSON.stringify(todos));
    }, [todoList]);
}

export default useLocalStorage