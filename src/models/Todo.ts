
//! Each todo will be an object with an auto generated ID key and a text key
class Todo {
    id: string;
    text: string;
    

    constructor(text: string) {
        this.text = text
        this.id = new Date().toISOString();
    }
}

export default Todo