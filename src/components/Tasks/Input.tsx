import { PlusCircle } from 'phosphor-react'
import styles from './Input.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface InputProps {
    onCreateNewTask: (newInputText: string) => void;
}

export function Input({ onCreateNewTask }: InputProps) {
    const [newInputText, setNewTaskText] = useState('');

    function handleCreateNewTaskInput(event: FormEvent) {
        event.preventDefault();

        if (newInputText.trim() === '') {
            return
        }

        onCreateNewTask(newInputText)
        setNewTaskText('')
    }
    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    return (
        <div className={styles.input}>
            <div className={styles.newInput}>
                <input
                    type='text'
                    placeholder='Adicione uma nova tarefa'
                    value={newInputText}
                    onChange={handleNewTaskChange}
                />
                <button type='submit' onClick={handleCreateNewTaskInput}>
                    Criar<PlusCircle />
                </button>
            </div>
        </div>
    )
}