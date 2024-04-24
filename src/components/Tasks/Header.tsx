import styles from './Header.module.css'

interface TasksProps {
    tasks: string[];
    checkedTasks: string[];
}

export function Header({ tasks, checkedTasks }: TasksProps) {
    return (
        <div className={styles.Header}>
            <div className={styles.createdTasks}>
                <p className={styles.text}>Tarefas criadas</p>
                <p className={styles.number}>{tasks.length}</p>
            </div>

            <div className={styles.completedTasks}>
                <p className={styles.text}>Concluidas</p>
                <p className={styles.number}>{checkedTasks.length} de {tasks.length}</p>
            </div>
        </div>
    )
}