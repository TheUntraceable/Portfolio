import styles from "../styles/Navbar.module.css"
export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>

                </li>
                <li>
                    <a href="#contact">Contact</a>    
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    )
}