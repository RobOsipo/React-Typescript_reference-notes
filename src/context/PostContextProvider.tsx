import React from 'react'
import todosContext from './todos-context'

const TodosContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
  return (
    <todosContext.Provider value={{number: 0}}>{props.children}</todosContext.Provider>
  )
}

export default TodosContextProvider