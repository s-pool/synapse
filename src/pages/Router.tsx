import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('../wrap/LazyHome'))
const FAQEC = lazy(() => import('../wrap/LazyFAQEC'))
const Demo = lazy(() => import('../wrap/LazyDemo'))

const base = (process.env.NODE_ENV !== 'development') ? window.location.pathname.split('/').slice(1, 2)[0] : '.'

const Router = () => {
  return (
    // <HashRouter hashType='noslash'>
    <BrowserRouter basename={base}>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/faq' component={FAQEC} exact/>
          <Route path='/demo' component={Demo} exact/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export { Router }
