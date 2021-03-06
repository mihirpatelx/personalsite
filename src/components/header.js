import React from 'react'
import { Link } from 'gatsby'

// import  './header.module.scss'
import headerStyles from './header.module.scss'
const header = () => {
    return (
        <header>
            <h1>
                <Link className= {headerStyles.title} to="/"> Mihir Patel</Link>
                </h1>
            <nav>
                <ul className= {headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
     
                    <li>
                        <Link className={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem}  to="/about">About</Link>
                    </li>
                    <li>
                         <Link className={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem}  to="/contact">Contact</Link>
                    </li>
                    <li>
                         <Link className={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem}  to="/books">Books</Link>
                    </li>
                    <li>
                         <a    className={headerStyles.navItem} href="https://medium.com/@mihirpatelx" target="_blank" >Blog </a>
                        {/* <Link className={headerStyles.navItem} activeClassName = {headerStyles.activeNavItem}  to="/blog">Blog</Link> */}
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default header