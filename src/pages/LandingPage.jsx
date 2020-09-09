import React, { Component } from 'react'
import './../supports/css/LandingPage.css'
import Image from './../supports/images/product_1.webp'
import Logo1 from './../supports/images/logo_brand_1.png'
import Logo2 from './../supports/images/logo_brand_2.webp'
import Axios from 'axios'
import apiUrl from '../supports/constants/apiUrl'
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom'


export class LandingPage extends Component {

    state = {
        data : null,
        bestsellerData : null
    }

    // render
    // compdidmount
    // render

    componentDidMount(){
        this.getAllProducts()
      
    }

    getAllProducts = () => {
        Axios.get(apiUrl + "products")
        .then((res) => {
            console.log(res.data)
            this.setState({data : res.data})
            this.getBestSellerProducts()
        })
        .catch((err) => {
            alert(err.message)
        })
    }


    getBestSellerProducts = () => {
        Axios.get(apiUrl + "transactions")
        .then((res) => {
            console.log(res.data)

            // count total 
            var sold = []
            res.data.forEach((val) => {
                val.detail.forEach((prod) => {
                    var isAda = false
                    var indexAda = null

                    // nyari prod udah ada di sold atau belum
                    for(var i =0 ; i < sold.length ; i ++){
                        if(sold[i].product_name === prod.product_name){
                            isAda = true
                            indexAda = i
                        }
                    }

                    if(isAda){
                        sold[indexAda].qty += prod.qty
                    }else{
                        sold.push(prod)
                    }
                })
            })

            sold.sort((a,b) => {
                return b.qty - a.qty
            })

      
            



           sold = sold.slice(0,4)
           sold.forEach((val,index) => {
                this.state.data.forEach((data) => {
                    if(val.product_name === data.name){
                        sold[index]['product_id'] = data.id
                    }
                })
           })
           console.log(sold)
        this.setState({bestsellerData : sold})
            
        })
        .catch((err) => {
            console.log(err)
        })
    }


    renderDataToJsx = () => {
        var jsx = this.state.data.map((val) => {
            if(val.discount){
                return(
                    <div className='d-inline-block mr-2' style={{width : "173px"}}>
                        <Link className='sporteens-link' to={'/detail-product/' + val.id} >
                        <img src={val.image1} width='100%'  alt="product"/>
                        <p className='p-0 m-0 sporteens-main-dark font-weight-bold'>{val.name.slice(0,15) + '...'}</p>
                        </Link>
                        <p className='p-0 m-0 text-danger'>{val.discount}% Off</p>
                        <p className='p-0 m-0 text-secondary'> <s>Rp. {val.price.toLocaleString('id-ID')}</s> </p>
                        <p className='p-0 m-0 sporteens-main-dark'> Rp. {(val.price - (val.price * (val.discount/100))).toLocaleString('id-ID')} </p>
                    </div>   
                )
            }
            return null
        } )

        return jsx
    }

    render() {
        return (
            <div>
                {/* Jumbotron Section */}
                <div className='sporteens-bg-secondary sporteens-jumbotron p-5'>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-md-6 text-center text-md-left">
                                <h1 className='sporteens-light'>Quality never goes out of style.</h1>
                                <p className='sporteens-light'>Explore your true style with Sporteeens</p>
                                <Link className='sporteens-link' to='/products'>
                                <button className='btn btn-white mt-4'>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Promo Section */}
                <div className='py-5 px-3'>
                    <div className="container mt-4 border p-3">
                        <h3 className='p-0 m-0'>Flash Sale</h3> 
                        <p>Grab it now !!</p>
                        <div style={{overflow:'auto',whiteSpace:'nowrap'}} className="mt-4 p-3">
                            {
                                this.state.data === null ? 
                                <div>
                                <Loader className='text-center p-0 m-0' type="ThreeDots" color="#364f6b" height={40} width={40} />
                                <p className='text-center sporteens-main-dark'>loading</p>
                                </div>
                                : 
                                this.renderDataToJsx()
                            }
                            
                        </div>
                    </div>
                </div>


                {/* Bestseller Section */}

                <div className="py-5 px-3 sporteens-bg-light-dark">
                    <div className="container mt-4">
                        <h3 className='p-0 m-0'>Bestseller</h3> 
                        <p>Get our Bestseller Products This Month</p>

                        <div className="row mt-4">
                            {
                                this.state.bestsellerData &&
                                this.state.bestsellerData.map((val) => {
                                    return(
                                        <div className="col-6 mt-3 mt-md-0 col-md-3 ">
                                            <div className='border bg-white p-3'>
                                            <Link to={'/detail-product/' + val.product_id} className='sporteens-link'>
                                                <img src={val.product_image} width='100%'  alt="product"/>
                                            </Link> 
                                                <p className='p-0 m-0 sporteens-main-dark font-weight-bold'>{val.product_name.slice(0,20) + '...'}</p>
                                                {/* <p className='p-0 m-0 text-secondary'> <s>Rp. 100000</s> </p> */}
                                                <p className='p-0 m-0 sporteens-main-dark'> Rp. {val.product_price.toLocaleString('id-ID')} </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>

                    </div>
                </div>


                {/* Brands Section */}


                <div className="py-5 px-3">
                    <div className="container mt-4">
                        <h3 className='p-0 m-0'>Brands</h3> 
                        <p>We sell Official Products from various Brands</p>
                        <div className="row mt-4  align-items-center">
                            <div className="col-4 col-md-2   h-100">
                                <img className='mx-2' alt='brand-logo' src={Logo1} width='100%'/>
                            </div>
                            <div className="col-4 col-md-2  h-100">
                                <img className='mx-2 ' alt='brand-logo' src={Logo2} width='100%'/>
                            </div>
                            <div className="col-4 col-md-2   h-100">
                                <img className='mx-2' alt='brand-logo' src={'https://www.freepngimg.com/thumb/puma_logo/6-2-puma-logo-png-clipart-thumb.png'} width='100%'/>
                            </div>
                            <div className="col-4 col-md-2  h-100">
                                <img className='mx-2 ' alt='brand-logo' src={'https://www.freepnglogos.com/uploads/new-balance-png-logo/womens-stylish-shoes-new-balance-png-logo-1.png'} width='100%'/>
                            </div>
                            <div className="col-4 col-md-2   h-100">
                                <img className='mx-2' alt='brand-logo' src={'https://cdn.freebiesupply.com/logos/large/2x/uhlsport-2-logo-svg-vector.svg'} width='100%'/>
                            </div>
                            <div className="col-4 col-md-2  h-100">
                                <img className='mx-2 ' alt='brand-logo' src={Logo2} width='100%'/>
                            </div>
                           
                        
                        </div>
                    </div>
                </div>


                {/* Banner Section Email Subscription */}
                <div className="py-5 px-3">
                    <div className="container mt-4 sporteens-bg-banner p-5 rounded">
                        <h3 className='text-white text-center'>
                            Subscribe to our newslater !!
                        </h3>
                        <p className='text-white text-center'>
                            Get interested offer from us 
                        </p>

                        <div className='text-center'>
                            <input type='button' className='btn btn-white' value='Subscribe Now !!' />
                        </div>
                    </div>
                </div>


                {/* Footer Section */}

                


            </div>
        )
    }
}

export default LandingPage
