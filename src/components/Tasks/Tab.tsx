import styles from './Tab.module.css'
import { useState } from 'react';

import { Header } from './Header';
import { Input } from './Input';
import { Tasks } from './Tasks';
import { Empty } from './Empty';

export function TaskTab() {
    const [tasks, setTasks] = useState<string[]>([])
    const [checkedTasks, setCheckedTasks] = useState<string[]>([])

    function handleCreateNewTask(newTaskText: string) {
        setTasks([...tasks, newTaskText]);
    }

    function handleCheckedTasksChange(newCheckedTasks: string[]) {
        setCheckedTasks(newCheckedTasks)
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeleted = tasks.filter(task => task !== taskToDelete);
        setTasks(tasksWithoutDeleted);

        setCheckedTasks(prevCheckedTasks => prevCheckedTasks.filter(task => task !== taskToDelete))
    }

    return (
        <div className={styles.Tab}>
            <Input onCreateNewTask={handleCreateNewTask} />
            <div className={styles.Tasks}>
                <Header
                    tasks={tasks}
                    checkedTasks={checkedTasks}
                />
                {tasks.length !== 0 ? (
                    <Tasks
                        tasks={tasks}
                        checkedTasks={checkedTasks}
                        onCheckedTasksChange={handleCheckedTasksChange}
                        onDeleteTask={deleteTask}
                    />
                ) : (<Empty />)}
            </div>
        </div>
    )
}