import React, { Component } from 'react'
import './../supports/LandingPage.css'
import Image from './../supports/images/product_1.webp'

export class LandingPage extends Component {
    render() {
        return (
            <div>
                {/* Jumbotron Section */}
                <div className='sporteens-bg-secondary sporteens-jumbotron p-5'>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-md-6 text-center text-md-left">
                                <h1 className='sporteens-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <button className='btn btn-success mt-4'>Get It Now</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Promo Section */}
                <div className='py-5 px-3'>
                    <div className="container mt-4 border p-3">
                        <h3>Flash Sale</h3> 
                        <div style={{overflow:'auto',whiteSpace:'nowrap'}} className="mt-4 pb-3">
                            <div className='d-inline-block mr-2' style={{width : "173px"}}>
                                <img src={Image} width='100%'  alt="product"/>
                                <p className='p-0 m-0 sporteens-main-dark font-weight-bold'>Product Name</p>
                                <p className='p-0 m-0 text-danger'>30% Off</p>
                                <p className='p-0 m-0 text-secondary'> <s>Rp. 100000</s> </p>
                                <p className='p-0 m-0 sporteens-main-dark'> Rp. 70000 </p>
                            </div>   
                            
                        </div>
                    </div>
                </div>


                {/* Bestseller Section */}


            </div>
        )
    }
}

export default LandingPage
