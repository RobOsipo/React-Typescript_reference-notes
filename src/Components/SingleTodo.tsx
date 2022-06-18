
interface Props {
    id: string;
    text: string;
    onDelete: (id: string) => void;
}


const SingleTodo = ({ id, text, onDelete } : Props) => {
  return (
      <>
    <li key={id}>
        {text}
    </li>
    <button onClick={() => onDelete(id)} >Delete</button>
    </>
  )
}

export default SingleTodo