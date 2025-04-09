import ToDoList from "./component/ToDoList";
import styles from "./StudyCenter.module.css"

export default function StudyCenter() {

    return (
        <div className={styles.StudyCenter}>
            <h1>Study Log</h1>
            <ToDoList/>
        </div>
    );
}