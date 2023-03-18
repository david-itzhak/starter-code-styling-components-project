import styles from "./Task.module.css";

const Task = ({onDelete, id, children}) => {
    // const [deleteText, setDeleteText] = useState('');

    // const deleteHandler = () => {
    //     // setDeleteText('(Deleted!)');
    //     onDelete(id);
    // };

    return (
        <li className={styles["task-item"]} onClick={() => onDelete(id)}>
            {children}
        </li>
    );
};
export default Task;
