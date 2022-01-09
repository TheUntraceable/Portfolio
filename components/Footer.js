import styles from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>&copy; 2022 The Untraceable</p>
            <p><a href="https://github.com/TheUntraceable">Github</a></p>
            <p><a href="https://github.com/TheUntraceable/Portfolio">Source Code</a></p>
            
        </div>
    )
}