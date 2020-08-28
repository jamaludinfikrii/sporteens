import React, { Component } from 'react'
import Navbar from './components/Navbar'
import './supports/Components.css'
import './supports/Utils.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ListProducts from './pages/ListProducts'
import Brands from './pages/Brands'
import Cart from './pages/Cart'
// 

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/products' component={ListProducts} />
          <Route path='/brands' component={Brands} />
          <Route path='/carts' component={Cart} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App
