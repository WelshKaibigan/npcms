import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/Falls.jpg')`,
          }}
        >
          <h1 className="blog-overlay">
          
            latest stories
          </h1>
        </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
