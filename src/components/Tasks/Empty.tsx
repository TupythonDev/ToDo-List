import { ClipboardText } from 'phosphor-react';
import styles from './Empty.module.css'

export function Empty() {
    return (
        <div className={styles.empty}>
            <div className={styles.icon}>
                <ClipboardText size={54} />
            </div>
            <div className={styles.text}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}