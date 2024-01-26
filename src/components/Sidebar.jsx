import { PencilLine } from "phosphor-react"
import styles from "./Sidebar.module.css"
import { Avatar } from "./Avatar"

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={ styles.profile}>
                <Avatar src="https://github.com/Douglas-Mariano.png" />
                <strong>Douglas Mariano</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#" >
                    <PencilLine size={20} />
                    Editar Perfil
                </a>
            </footer>
        </aside>
    )
}