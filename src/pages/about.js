import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="Hiperative · About — Software & Design Studio" />
    <h1>About Page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
