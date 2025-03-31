import { useContext } from "react"
import { AppContext } from "../AppContextProvider";
import styles from "./ToDoList.module.css";

export default function ToDoList() {

    const appcontext = useContext(AppContext)
    console.log(appcontext)
    const todos=appcontext.todos;
    console.log(todos)

    const TaskList = todos.map((todo,index)=>(
        <li key={index} className={styles.li}>
            <label>
            <input className={styles.input} type="checkbox" checked={todo.isComplete} onChange={(e) => appcontext.handleTodoStatusChanged(index, e.target.checked)}></input>
            {todo.description}
            </label>
            <label className={styles.label} >{todo.isComplete?"Done":""}</label>
            <button className={styles.btn} onClick={()=>appcontext.deleteTodo(index)} >remove</button>
        </li>
    ));

    return (
        <ul className={styles.ul}>
            {TaskList}
        </ul>
    );
};
