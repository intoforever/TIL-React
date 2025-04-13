import appStyle from 'styles/app.module.css';
import TodoList from 'components/TodoList';
import TodoForm from 'components/TodoForm';

function App() {
  return (
    <>
      <h1>TO-DO LIST</h1>
      <div className={appStyle.line}></div>
      <div>
        <TodoList />
        <TodoForm />
      </div>
    </>
  )
}

export default App