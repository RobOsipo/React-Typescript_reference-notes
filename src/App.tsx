import React, {useState} from 'react';
import NewTodo from './Components/NewTodo'
import Todos from './Components/Todos'
import Todo from './models/Todo'

interface State {
  id: string;
  text: string;
}
// Since initialized as an empty array I need to 
// create an interface telling TSC what will goin the array
function App() {
  const [todos, setTodos] = useState<State[]>([])

  const onAddTodo = (text: string) => {
      setTodos(prevState => [new Todo(text), ...prevState])
  }

  const onDeleteTodo = (id: string) => {
    setTodos(prevState => {
      let stateCopy = [...prevState]
     let filteredState = stateCopy.filter((todo) => {
        return todo.id !== id
      })
      return filteredState
    })
    
}
 
  return (
    <div className="App">
      <NewTodo onAddTodo={onAddTodo} />
     <Todos onDelete={onDeleteTodo} items={todos} />
    </div>
  );
}

export default App;
