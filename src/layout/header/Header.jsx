import React from "react"
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <header className={styles.header}>Header</header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </>

    )
}

export default Header