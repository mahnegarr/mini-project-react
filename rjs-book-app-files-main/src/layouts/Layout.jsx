import React from 'react'
import styles from "./Layout.module.css"

function Layout({ children }) {
    return (
        <>
            <header className={styles.header} >
                <h1>Book App</h1>
                <h2><span>Botostart</span> | React.js Full Course</h2>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developed by Mah ♥</p>
            </footer>
        </>
    )
}

export default Layout