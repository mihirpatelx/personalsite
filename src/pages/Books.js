import React from 'react'
import Layout from '../components/layout'
import bookStyles from '.././components/books.module.scss'

import b1 from "../../static/1.jpg"
import b2 from "../../static/2.jpg"
import b3 from "../../static/3.jpg"
import b4 from "../../static/4.jpg"
import b5 from "../../static/5.jpg"
import b6 from "../../static/6.jpg"
import b7 from "../../static/7.jpg"
import b8 from "../../static/8.jpg"
import b9 from "../../static/9.jpg"
import b10 from "../../static/10.jpg"
import b11 from "../../static/11.jpg"
import b12 from "../../static/12.jpg"
import b13 from "../../static/13.jpg"
import b14 from "../../static/14.jpg"

import read from "../../static/read.png"






const bookPage = () => {
    return ( 
        <Layout>
            <h1>You can tell a lot about a person by their favorite books. </h1>
            <h2>Here's what I've been reading!</h2>

            <div className={bookStyles.column}> 

            <img src= {read} alt="" className = {bookStyles.responsive} max-width="25%"></img>


            </div>


                 <div className={bookStyles.column}>
                     <img src= {b1} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>
                 <div className={bookStyles.column}>
                     <img src= {b2} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>
                 <div className={bookStyles.column}>
                     <img src= {b3} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>
                 <div className={bookStyles.column}>
                     <img src= {b4} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>

            <div className={bookStyles.column}>
                     <img src= {b5} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>
                 <div className={bookStyles.column}>
                     <img src= {b6} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>
                 <div className={bookStyles.column}>
                     <img src= {b9} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>
            <div className={bookStyles.column}>
                     <img src= {b8} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>
                 <div className={bookStyles.column}>
                     <img src= {b7} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>
                 <div className={bookStyles.column}>
                     <img src= {b10} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>
                 <div className={bookStyles.column}>
                     <img src= {b11} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>
                 <div className={bookStyles.column}>
                     <img src= {b12} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>
                 <div className={bookStyles.column}>
                     <img src= {b13} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>
                 <div className={bookStyles.column}>
                     <img src= {b14} alt="" className = {bookStyles.responsive} max-width="25%"></img>
                 </div>


            
        </Layout>
    )
}

export default bookPage

