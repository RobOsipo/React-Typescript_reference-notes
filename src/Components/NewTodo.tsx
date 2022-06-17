import {useRef} from 'react'

const NewTodo = () => {
//! All dom elements have built in elements 
//! just like the input element my ref is attached to.
//! EX. useRef<HTMLInputElement>(null)
//! So if I attach my useRef to another DOM element
//! besides an input will have to find the correct
//! corresponding replacement for HTMLInputElement
//! For a button it would be <HTMLButtonElement> 
//! For a paragraph it would be <HTMLParagraphElement> and so on....
const inputRef = useRef<HTMLInputElement>(null)

//! Special type provided by react for form events
//! React.FormEvent = form submission
//! React.MouseEvent = onClick 

 const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault() //! need to always have ? to access inputs value
        //! but if we know for sure the input wont be null, I can use ! instead
        const enteredText = inputRef.current!.value

    }
  return (
    <form onSubmit={onSubmitHandler}>
        <label htmlFor="text">Todo text</label>
        <input ref={inputRef} type="text" id="text" />
        <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodo