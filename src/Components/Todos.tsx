import Todo from '../models/Todo'
import SingleTodo from './SingleTodo'

interface TodosProps {
    items: Todo[];
    onDelete: (id: string) => void;
}


//! React.FC allows you to use the children prop, then I can define my own props
//! added as a custom type or an interface placed inside <> next to React.FC
//! BUT in this case my class model can double as an interface or custom type
const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul>
        {props.items.map((item) => {
            return <SingleTodo onDelete={props.onDelete} id={item.id} text={item.text} />
        })}
    </ul>
  )
}

export default Todos

//! Example using interface instead of class model if peops was an array of strings
interface Props {
    items: string[]
}
//! const Todos: React.FC<Props> = (props) => {}