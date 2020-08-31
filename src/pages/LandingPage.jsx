import React, { Component } from 'react'
import './../supports/css/LandingPage.css'
import Image from './../supports/images/product_1.webp'
import Logo1 from './../supports/images/logo_brand_1.png'
import Logo2 from './../supports/images/logo_brand_2.webp'

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
                        <h3 className='p-0 m-0'>Flash Sale</h3> 
                        <p>Grab it now !!</p>
                        <div style={{overflow:'auto',whiteSpace:'nowrap'}} className="mt-4 p-3">
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

                <div className="py-5 px-3 sporteens-bg-light-dark">
                    <div className="container mt-4">
                        <h3 className='p-0 m-0'>Bestseller</h3> 
                        <p>Get our Bestseller Products This Month</p>

                        <div className="row mt-4">
                            <div className="col-6 mt-3 mt-md-0 col-md-3 ">
                                <div className='border bg-white p-3'>
                                    <img src={Image} width='100%'  alt="product"/>
                                    <p className='p-0 m-0 sporteens-main-dark font-weight-bold'>Product Name</p>
                                    <p className='p-0 m-0 text-danger'>30% Off</p>
                                    <p className='p-0 m-0 text-secondary'> <s>Rp. 100000</s> </p>
                                    <p className='p-0 m-0 sporteens-main-dark'> Rp. 70000 </p>
                                </div>
                            </div>
                            <div className="col-6 mt-3 mt-md-0 col-md-3 ">
                                <div className='border bg-white p-3'>
                                    <img src={Image} width='100%'  alt="product"/>
                                    <p className='p-0 m-0 sporteens-main-dark font-weight-bold'>Product Name</p>
                                    <p className='p-0 m-0 text-danger'>30% Off</p>
                                    <p className='p-0 m-0 text-secondary'> <s>Rp. 100000</s> </p>
                                    <p className='p-0 m-0 sporteens-main-dark'> Rp. 70000 </p>
                                </div>
                            </div>
                            <div className="col-6 mt-3 mt-md-0 col-md-3 ">
                                <div className='border bg-white p-3'>
                                    <img src={Image} width='100%'  alt="product"/>
                                    <p className='p-0 m-0 sporteens-main-dark font-weight-bold'>Product Name</p>
                                    <p className='p-0 m-0 text-danger'>30% Off</p>
                                    <p className='p-0 m-0 text-secondary'> <s>Rp. 100000</s> </p>
                                    <p className='p-0 m-0 sporteens-main-dark'> Rp. 70000 </p>
                                </div>
                            </div>
                            <div className="col-6 mt-3 mt-md-0 col-md-3 ">
                                <div className='border bg-white p-3'>
                                    <img src={Image} width='100%'  alt="product"/>
                                    <p className='p-0 m-0 sporteens-main-dark font-weight-bold'>Product Name</p>
                                    <p className='p-0 m-0 text-danger'>30% Off</p>
                                    <p className='p-0 m-0 text-secondary'> <s>Rp. 100000</s> </p>
                                    <p className='p-0 m-0 sporteens-main-dark'> Rp. 70000 </p>
                                </div>
                            </div>
                            
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
                                <img className='mx-2' alt='brand-logo' src={Logo1} width='100%'/>
                            </div>
                            <div className="col-4 col-md-2  h-100">
                                <img className='mx-2 ' alt='brand-logo' src={Logo2} width='100%'/>
                            </div>
                            <div className="col-4 col-md-2   h-100">
                                <img className='mx-2' alt='brand-logo' src={Logo1} width='100%'/>
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

                <div className="py-5 px-3">
                    <div className="container border-top p-4">

                        <div className="row">
                            <div className="col-md-3">
                                <p className='sporteens-main-dark font-weight-bold p-0 m-0'> SITEMAP </p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0 mt-3'> Products </p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0'> Brands </p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0'> Careeers </p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0'> Privacy & Policy </p>
                            </div>

                            <div className="col-md-3">
                                <p className='sporteens-main-dark font-weight-bold p-0 m-0'> OUR STORE </p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0 mt-3'> Trunojoyo Street, Bandung, West Java, Postal Code 54312 </p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0 mt-2'> Green Office Park, Ground Floor, Serpong, Banten, Postal Code 54348 </p>
                             
                            </div>

                            <div className="col-md-3">
                                <p className='sporteens-main-dark font-weight-bold p-0 m-0'> CONTACT US </p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0 mt-3'>+62 836 7465 745</p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0'>+62 945 8453 123</p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0'>admin@sporteens.com</p>
                             
                            </div>

                            <div className="col-md-3">
                                <p className='sporteens-main-dark font-weight-bold p-0 m-0'> FIND US </p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0 mt-3'>Instagram</p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0'>Youtube</p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0'>Tokopedia</p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0'>Shopee</p>
                                <p className='text-secondary font-weight-light sporteens-font-14 p-0 m-0'>Amazon</p>
                             
                            </div>
                        </div>

                        <div className='text-center mt-4 sporteens-font-14'>
                            © 2009 - 2020, PT. Sporteens Indonesia.
                        </div>

                    </div>

                </div>


            </div>
        )
    }
}

export default LandingPage
