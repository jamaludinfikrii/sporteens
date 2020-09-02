import React, { Component } from 'react'
import Navbar from './components/Navbar'
import './supports/css/Components.css'
import './supports/css/LandingPage.css'
import './supports/css/Utils.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ListProducts from './pages/ListProducts'
import Brands from './pages/Brands'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Footer from './components/Footer'
import CreatePassword from './pages/CreatePassword'
import DetailProduct from './pages/DetailProduct'
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
          <Route path='/register' component={Register} />
          <Route path='/detail-product/:bebas' component={DetailProduct} />
          <Route path='/create-password' component={CreatePassword} />
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    )
  }
}

export default App
