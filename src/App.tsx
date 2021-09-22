import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import AboutSite from './about/AboutSite'
import ImageDetail from './image/ImageDetail'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Helmet } from 'react-helmet'
import { config, pageTitle } from './lib/config'

export default function App() {

  return (
    <div>
      <Helmet>
        <title>{ pageTitle() }</title>
        <meta name="description" content={ config.appDesc }/>
        <meta property="og:site_name" content={ config.appName }/>
        <link rel="icon" type="image/png" href={ '/static/favicon/' + config.appNamel + '.png?v=1.0.1' }/>
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header/><Home/><Footer/>
          </Route>
          <Route path="/image/:id">
            <ImageDetail/>
          </Route>
          <Route path="/about/site">
            <Header/><AboutSite/><Footer/>
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

// /support/banner

// /about/site
// /about/company
// /about/ad
// /about/privacy
// /about/help

// /support/counter

// /
// /image
// /image/:id([0-9]+)/update
// /image/upload
// /images/:id([0-9]+)

