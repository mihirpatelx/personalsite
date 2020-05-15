import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import dino from "../../static/dino.png"
const IndexPage = () => {

    return (
        <Layout>
             <h1> Hello! </h1>

             <img src= {dino} alt= "Hello"/>
            <h2> I'm Mihir, a full-stack developer, who enjoys working with React, NodeJS and Python. I Studied Computer Science and Physics at Rutgers University</h2>
            {/* <p> Need a developer? <a href="/contact"> Contact me. </a></p> */}
            <h3> Need a developer? <Link to="/contact"> Contact me. </Link> </h3>
            <p></p>
            <h3> Do you need to smile? Click  <a href="https://openpuppies.com/#6Kmg87X"> 😊</a> </h3>   
            

        </Layout>
    )
}

export default IndexPage