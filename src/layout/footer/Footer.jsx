import React from "react"
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>Footer</footer>
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

export default Footer