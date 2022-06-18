import React from 'react';
import Todo from '../models/Todo'

interface Context {
    number: number
}

const todosContext = React.createContext<Context | null>(null)

export default todosContext