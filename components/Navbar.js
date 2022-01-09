import styles from "../styles/Navbar.module.css"
export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#resume">Resume</a>
        </div>
    )
}