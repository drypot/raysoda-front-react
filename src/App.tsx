import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import AboutSite from './about/AboutSite'
import ImageDetail from './image/ImageDetail'
import Header from './layout/Header'
import Footer from './layout/Footer'

export default function App() {
  return (
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

