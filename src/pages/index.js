import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <p>Expected: [1, 2, 3]</p>
    <p>Result: {JSON.stringify([...new Set([1, 2, 2, 3])])}</p>
  </Layout>
)

export default IndexPage
