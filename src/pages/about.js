import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import bookStyles from '.././components/books.module.scss'


import skate from "../../static/skate.png"

const aboutpage = () => {
    return (
        <Layout>

             <div className={bookStyles.icon}> 

                <img src= {skate} alt="" className = {bookStyles.responsive} max-width="25%"></img>

             </div>

             <h1>About Me</h1>
             

             <p> Hi I'm a software engineer who loves to code but also enjoys skateboarding, math, cooking, and playing fetch with my dog Ada (Named after <a href="https://en.wikipedia.org/wiki/Ada_Lovelace"> Ada Lovelace</a>) she's a German Shepherd and Beagle Mix!</p>
             <p> Sometimes I enjoy pulling pranks, going to parties, visiting new places. I'm an introvert so I prefer to hangout with a small group of friends or read a book at home after brewing a cup of tea.</p>
             <p> I'm a huge environmentalist, I try to reduce my carbon footprint as much as I can by buying reusuable, biking, and eating an eco-friendly diet.</p>
             <p> My favortie foods and where to find them  <a href=" http://places.singleplatform.com/punjab-23/menu?ref=googleplaces.singleplatform.com"> Amazing Samosas</a> , <a href="http://www.robertaspizza.com/"> Favorite Pizza</a> , <a href="https://vanleeuwenicecream.com/"> Best Ice Cream</a> <a href="http://www.vivavegan.com/"> Perfect Veggie Burgers</a> </p>
             <p> If you want to know about some of my other interests then I think a great way to know me is looking at my  <a href=" https://www.pinterest.com/mihirrx/"> Pinterest</a> </p>
             <b> Some charities I care about you should checkout <a href="https://www.sierraclub.org/"> Sierra Club,</a> <a href="http://boards4bros.org/"> BoardsforBros</a> , <a href="https://www.heartsofgold.org/"> Hearts of Gold</a>, <a href="https://www.aclu.org/"> ACLU</a>
             </b>
             <p></p>
             <p>If you wanna know more or just want to talk please <Link to="/contact"> send a message 😊</Link> </p>
      
        </Layout>
    )
}

export default aboutpage