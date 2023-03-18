import Task from "../Task/Task";
import styles from "./TaskList.module.css";

const TaskList = ({items, onDeleteTask}) => {
    return (
        <ul className={styles["task-list"]}>
            {items.map((task) =>
                <Task key={task.id} id={task.id} onDelete={onDeleteTask}>
                    {task.text}
                </Task>
            )}
        </ul>
    );
};

export default TaskList;
