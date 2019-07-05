import React from 'react'
import Layout from '../components/Layout'
import RequestAQuote from '../components/RequestAQuote'
import fourOhFour from '../img/undraw_warning_cyit.svg'

const NotFoundPage = () => (
  <Layout>
    <div className="container m-auto py-24 text-center">
      <img className="w-2/3 md:w-1/4 m-auto mb-6" src={fourOhFour} alt="404" />
      <h1 className="text-2xl">404: NOT FOUND</h1>
      <p className="text-lg">There isn&#39;t a page here</p>
    </div>
    <RequestAQuote />
  </Layout>
)

export default NotFoundPage
