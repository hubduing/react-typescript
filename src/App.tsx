import React, {useState} from 'react';
import { ITodo } from './components/interfaces';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import {TodoList} from './components/TodoList'


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false

    }
    // setTodos([newTodo, ...todos])
    setTodos( prev => {
      return [newTodo, ...todos]
    })
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, 
          completed: !todo.completed
        }
      }
      return todo
    })
    )
  }
  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter( elem => elem.id !== id ))
  }

  return (
    <>
      <Navbar/>
      <div className="container">
        <TodoForm onAdd={addHandler}/>
        
        <TodoList 
        todos={todos} 
        onRemove={removeHandler} 
        onToggle={toggleHandler} 
        />
      </div>
    </>
  );
}

export default App;
