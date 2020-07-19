import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import Home from '../pages/Home/HomeView'
import Category from '../pages/Category/CategoryView'
import Header from '../components/Header/Header'
import BookView from '../pages/BookView/View/BookView'
import FormBook from '../pages/BookView/Form/FormBook'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:categoryId">
            <Category />
          </Route>
          <Route path="/book/:id">
            <BookView />
          </Route>
          <Route path="/book">
            <FormBook />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}
