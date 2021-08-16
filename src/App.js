import TodoList from './todo/TodoList';
import './App.css';

function App() {
  const todos=[
    {id:1,completed: false,title: 'Введите логин'},
    {id:2,completed: false,title: 'Введите пароль'}
   ]
  return (
      <div className='App-logo'>
        <h1> Форма авторизации</h1>
        <TodoList modos={todos}/>
      </div>
  );
}

export default App;
