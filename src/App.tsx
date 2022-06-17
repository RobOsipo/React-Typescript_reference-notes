import React from 'react';
import Todos from './Components/Todos'
import Todo from './models/Todo'


function App() {
  const todos = [
    new Todo("learn React"),
    new Todo("learn TSC"),
    new Todo("learn udda stuff")
  ]
  return (
    <div className="App">
     <Todos items={todos} />
    </div>
  );
}

export default App;
