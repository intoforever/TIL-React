import 'styles/App.css'

import TodoList from 'components/TodoList'
import TodoForm from 'components/TodoForm'
import TodoFilter from 'components/TodoFilter'

function App() {
  return (
    <>
      <h1>TO-DO LIST</h1>
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