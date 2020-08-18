import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Dummy, FAQEC, Home } from '../pages'

const base = window.location.pathname.split('/').slice(1, 2)[0] || '.'

const Router = () => {
  return (
    // <HashRouter hashType='noslash'>
    <BrowserRouter basename={base}>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/faq' component={FAQEC} exact/>
        <Route path='/demo' component={Dummy} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export { Router }
