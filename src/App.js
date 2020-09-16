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
import Checkout from './pages/Checkout'
import TransactionHistory from './pages/TransactionHistory'
import Axios from 'axios'
import apiUrl from './supports/constants/apiUrl'
import Statistics from './pages/Statistics'
import PageNotFound from './components/PageNotFound'
import ProductManagement from './pages/ProductManagement'
import ProductManagementDetail from './pages/ProductManagementDetail'
// 

export class App extends Component {
  state = {
    userRole : null
  }

  componentDidMount(){
    this.getUserRole()
  }

  getUserRole = () => {
    const id = localStorage.getItem('id')
    if(id){
      Axios.get(apiUrl + 'users/' + id)
      .then((res) => {
        this.setState({userRole : res.data.role})
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }else{
      this.setState({userRole : "guest"})
    }
  }


  render() {
    if(this.state.userRole === null){
      return(
        <p>loading ...</p>
      )
    }
    
    return (
      <BrowserRouter>
      
      <div>
        <Navbar />
        
        <Switch>
          <Route exact path='/' component={LandingPage} />
         
          <Route path='/brands' component={Brands} />
            {this.state.userRole === 'admin' ? <Route path='/stats' component={Statistics} /> : null}
            {this.state.userRole === 'admin' ? <Route path='/products' component={ListProducts} /> : null}
          <Route path='/cart' component={Cart} />
          <Route path='/register' component={Register} />
          <Route path='/checkout/:idTrans' component={Checkout} />
          <Route path='/transaction-history' component={TransactionHistory} />
          <Route path='/detail-product/:bebas' component={DetailProduct} />
          <Route path='/product-management/detail/:id' component={ProductManagementDetail} />
          <Route path='/product-management' component={ProductManagement} />
          <Route path='/create-password' component={CreatePassword} />
          <Route path='*' component={PageNotFound} />
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    )
  }
}

export default App
