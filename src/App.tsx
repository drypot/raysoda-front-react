import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import About from './home/About'
import { ImageDetail } from './image/ImageDetail'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { config } from './lib/config'
import Ad from './home/Ad'
import Company from './home/Company'
import Privacy from './home/Privacy'
import Help from './home/Help'
import ImageList from './image/ImageList'

export default function App() {

  return (
    <HelmetProvider>
      <div>
        <Helmet defaultTitle={config.appName} titleTemplate={'%s - ' + config.appName}>
          <meta name="description" content={config.appDesc}/>
          <meta property="og:site_name" content={config.appName}/>
          <link rel="icon" type="image/png" href={'/static/favicon/' + config.appNamel + '.png?v=1.0.1'}/>
        </Helmet>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/><Footer/>
            </Route>
            <Route exact path="/image-list">
              <ImageList/><Footer/>
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
        <Route path="/about"><About/></Route>
        <Route path="/company"><Company/></Route>
        <Route path="/ad"><Ad/></Route>
        <Route path="/privacy"><Privacy/></Route>
        <Route path="/help"><Help/></Route>
      </Switch>
      <Footer/>
    </div>
  )
}

// /support/banner

// /support/counter

// /
// /image
// /image/:id([0-9]+)/update
// /image/upload
// /images/:id([0-9]+)

