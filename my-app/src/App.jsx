/**
 * 1. 사용자가 할 일을 입력하고 추가할 수 있다.
 * 2. 추가된 할 일 목록을 화면에 표시한다.
 * 3. 할 일을 클릭하면 완료 상태로 변경된다. (완료를 재클릭시 다시 취소)
 * 4. 완료된 할 일은 취소선으로 표시된다.
 * 5. 할 일을 삭제할 수 있다.
 */


import 'styles/App.css'
import TodoList from 'components/TodoList'
import TodoForm from 'components/TodoForm'
import TodoFilter from 'components/TodoFilter'

function App() {
  return (
    <>
      <h1 className="test">TO-DO LIST</h1>
      <div className="line"></div>
      
      <div>
        <TodoList />
        <TodoForm />
        <TodoFilter />
      </div>
      
    </>
  )
}

export default App