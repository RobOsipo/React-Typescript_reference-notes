
interface Props {
    id: string;
    text: string;
}

const SingleTodo = ({ id, text } : Props) => {
  return (
    <li key={id}>
        {text}
    </li>
  )
}

export default SingleTodo