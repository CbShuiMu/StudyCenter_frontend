import { useContext } from "react"
import { AppContext } from "../AppContextProvider";

export default function ToDoList() {

    const appcontext = useContext(AppContext)
    console.log(appcontext)
    const todos=appcontext.todos;
    console.log(todos)

    const TaskList = todos.map((todo,index)=>(
        <li key={index}>
            <input type="checkbox" checked={todo.isComplete} onChange={(e) => appcontext.handleTodoStatusChanged(index, e.target.checked)}></input>
            {todo.description}  {todo.isComplete?"Done":""}
            <button onClick={()=>appcontext.deleteTodo(index)} >remove</button>
        </li>
    ));

    return (
        <ul>
            {TaskList}
        </ul>
    );
};
