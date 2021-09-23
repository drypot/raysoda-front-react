import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import AboutSite from './about/AboutSite'
import ImageDetail from './image/ImageDetail'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { config } from './lib/config'
import AboutAd from './about/AboutAd'
import AboutCompany from './about/AboutCompany'
import AboutPrivacy from './about/AboutPrivacy'
import AboutHelp from './about/AboutHelp'

export default function App() {

  return (
    <HelmetProvider>
    <div>
      <Helmet defaultTitle={config.appName} titleTemplate={ "%s - " + config.appName }>
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
          <Route path="*">
            <NormalPage/>
          </Route>
        </Switch>
      </Router>
    </div>
    </HelmetProvider>
  )
}

function NormalPage() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/about/site"><AboutSite/></Route>
        <Route path="/about/company"><AboutCompany/></Route>
        <Route path="/about/ad"><AboutAd/></Route>
        <Route path="/about/privacy"><AboutPrivacy/></Route>
        <Route path="/about/help"><AboutHelp/></Route>
      </Switch>
      <Footer/>
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

