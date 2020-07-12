import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import Home from '../pages/Home'
import Category from '../pages/Category'

export default function Router() {
  return (
    <BrowserRouter>
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
