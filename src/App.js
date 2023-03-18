import {useState} from "react";
import {v4 as uuidV4} from 'uuid';

import TaskList from "./components/Tasks/TaskList/TaskList";
import TaskInput from "./components/Tasks/TaskInput/TaskInput";
import "./App.css";

const App = () => {

    const initialTasksList = [
        {text: "Создание курса - 1 час", id: "t1"},
        {text: "Разминка 15 мин", id: "t2"},
        {text: "Создание курса - 1 час", id: "t3"},
    ];

    const [tasks, setTasks] = useState(initialTasksList);

    const addTaskHandler = (inputText) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks.unshift({text: inputText, id: uuidV4()});
            return updatedTasks;
        });
    };

    const deleteTaskHandler = (taskId) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
            return updatedTasks;
        });
    };

    return (
        <div>
            <section id="task-form">
                <TaskInput onAddTask={addTaskHandler}/>
            </section>
            <section id="tasks">{
                tasks.length > 0
                    ?
                    <TaskList items={tasks} onDeleteTask={deleteTaskHandler}/>
                    :
                    <p style={{textAlign: "center"}}>Задач не найдено! Добавить?</p>
            }</section>
        </div>
    );
};
export default App;
