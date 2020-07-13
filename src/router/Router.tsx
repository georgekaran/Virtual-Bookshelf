import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import Home from '../pages/Home/HomeView'
import Category from '../pages/Category/CategoryView'
import Header from '../components/Header/Header'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:name">
            <Category />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}
