import {useState} from "react";

import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";

const TaskInput = ({onAddTask}) => {
    const [inputText, setInputText] = useState("");
    const [isInputValid, setIsInputValid] = useState(true);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (inputText.trim().length > 0) {
            onAddTask(inputText);
        } else {
            setIsInputValid(false);
        }
        setInputText('');
    };

    const pointerEnterHandler = (event) => {
        setIsInputValid(true);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles["form-control"]} ${isInputValid ? '' : styles["invalid"]}`}>
                <label
                    // style={{color: isInputValid ? "black" : "red"}}
                >Задачи</label>
                <input
                    //     style={{
                    //     backgroundColor: isInputValid ? "transparent" : "lightcoral",
                    //     borderColor: isInputValid ? "black" : "lightcoral"
                    // }}
                    onPointerDown={pointerEnterHandler} type="text"
                    value={inputText} onChange={event => setInputText(event.target.value)}/>
            </div>
            <Button type="submit">Добавить Задачу</Button>
        </form>
    );
};
export default TaskInput;
