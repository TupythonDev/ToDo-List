import styles from './App.module.css'
import { Header } from './components/Header'
import './global.css'
import { TaskTab } from './components/Tasks/Tab'

export function App() {
    return (
        <div className={styles.Main}>
            <Header />
            <main>
                <TaskTab />
            </main>
        </div>
    )
}