import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import bookStyles from '.././components/books.module.scss'

import air from "../../static/air.png"

const contactpage = () => {
    return (
        <Layout>
             <h1>Contact Me</h1>
             <p> </p>
             <p> </p>

                <div className={bookStyles.column}> 

                    <img src= {air} alt="" className = {bookStyles.responsive} max-width="25%"></img>

                </div>

             <p> </p>
                 <h4> The best way to reach me is on Twitter <a href="https://twitter.com/_mihirpatel" target="_blank" >@_mihirpatel 🐦</a></h4>
                <p></p>
                 <h4> You coud also <a href="mailto:mihirpatelx@gmail.com"> email me ✉️ </a> </h4>   
                 <h4> Here's my <a href="https://github.com/mihirpatelx"> Github 💻</a> </h4>   

                 <h4> If you want to make my day or really want to grab my attention <a href="https://www.buymeacoffee.com/Mihir2020"> click here</a> </h4>   
                <p></p>
                <p></p>
        </Layout>
    )
}

export default contactpage