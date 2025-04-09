import { useContext } from "react"
import { AppContext } from "../AppContextProvider";
import styles from "./ToDoList.module.css";

export default function ToDoList() {

    const appcontext = useContext(AppContext)
    console.log(appcontext)
    const todos = appcontext.todos;
    const InputValue = appcontext.InputValue;
    console.log(todos)

    const TaskList = todos.map((todo, index) => (
        <li key={index}>
            <label className={styles.taskName}>
                <input type="checkbox" checked={todo.isComplete} onChange={(e) => appcontext.handleTodoStatusChanged(index, e.target.checked)}></input>
                {todo.description}
            </label>
            <label className={styles.taskStatus} >{todo.isComplete ? "Done" : ""}</label>
            <button className={styles.btn} onClick={() => appcontext.deleteTodo(index)} >remove</button>
        </li>
    ));

    return (
        <ul className={styles.ul}>
            {TaskList}
            <li>
                <input defaultValue={InputValue} onChange={e => appcontext.setInputValue(e.target.value)} type="text" /><button onClick={() => appcontext.addTodo(InputValue)} >sumbit</button>
            </li>
        </ul>
    );
};
