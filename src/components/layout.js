import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'
import LayoutStyles from './layout.module.scss'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


const Layout = (props) => {
    return (
        <div className= {LayoutStyles.container}>
            <div className={LayoutStyles.content}>
                <Header />
                 {props.children}
            </div>
            <Footer />
        </div>
    )
}


class MyComponent extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
    )
  }
}



export default Layout