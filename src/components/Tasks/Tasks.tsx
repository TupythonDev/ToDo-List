import { Trash } from 'phosphor-react';
import styles from './Tasks.module.css';

interface TasksProps {
    tasks: string[];
    checkedTasks: string[];
    onCheckedTasksChange: (checkedTasks: string[]) => void;
    onDeleteTask: (task: string) => void;
}

export function Tasks({ tasks, checkedTasks, onCheckedTasksChange, onDeleteTask }: TasksProps) {
    function handleCheckboxChange(task: string) {
        const newCheckedTasks = checkedTasks.includes(task) ? checkedTasks.filter((checkedTask) => checkedTask !== task) : [...checkedTasks, task];

        onCheckedTasksChange(newCheckedTasks);
    }

    return (
        <div className={styles.Tabs}>
            {tasks.map((task) => (
                <div key={task} className={styles.Task}>
                    <label>
                        <input
                            type="checkbox"
                            checked={checkedTasks.includes(task)}
                            onChange={() => handleCheckboxChange(task)}
                        />
                        <p className={checkedTasks.includes(task) ? styles.checkedText : styles.uncheckedText}>{task}</p>
                        <button type='button' onClick={() => onDeleteTask(task)}><Trash size={24} /></button>
                    </label>
                </div>
            ))}
        </div>
    );
}
