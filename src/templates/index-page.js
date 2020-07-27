import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SiteOwner from '../../static/img/njp.jpg'
import BackgroundImage from "gatsby-background-image"

const IndexPage = (props) => (
  <Layout>
   
   
    <BackgroundImage
      className="masthead"
      fluid={props.data.indexImage.childImageSharp.fluid}
      fadeIn
    >
      <div className="black-overlay">
        <div className="content-box">
        <img style={{padding: "0px", margin:"0px"}} src={SiteOwner} alt="Nicholas Pitt"></img>
          <h1>Welcome to my website</h1>
          <h3>Enjoy your stay</h3>
        </div>
      </div>
    </BackgroundImage>
   
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "Falls.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;