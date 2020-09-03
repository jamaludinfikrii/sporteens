import React, { Component } from 'react'
import './../supports/css/ListProducts.css'
import Image from './../supports/images/product_1.webp'
import Axios from 'axios'
import apiUrl from '../supports/constants/apiUrl'
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom'


export class ListProducts extends Component {
    state = {
        data :null
    }

    componentDidMount(){
        this.getAllProducts()
    }

    getAllProducts = () => {
        Axios.get(apiUrl + "products")
        .then((res) => {
            this.setState({data : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderDataToJsx = () => {
        return this.state.data.map((val) => {
            return(
                <div className="col-6 mt-3 col-md-3 ">
                    <div className='border bg-white p-3 h-100'>
                        <Link to={'/detail-product/' + val.id} className='sporteens-link'>
                            <img className='sporteens-clickable-el' src={val.image1} width='100%'  alt="product"/>
                            <p  className='p-0 m-0 sporteens-main-dark font-weight-bold sporteens-clickable-el'>{val.name.slice(0,20) + '...' }</p>
                        </Link>
                        {
                            val.discount ? 
                            <span>
                                <p className='p-0 m-0 text-danger'>{val.discount}% Off</p>
                                <p className='p-0 m-0 text-secondary sporteens-font-14'> <s>Rp. {val.price.toLocaleString('id-ID')}</s> </p>
                                <p className='p-0 m-0 sporteens-main-dark '> Rp. {(val.price * (1 - val.discount/100)).toLocaleString('id-ID')} </p>
                            </span>
                            :
                            // <span className='d-flex border'>
                                <p className='p-0 m-0 sporteens-main-dark '> Rp. {val.price.toLocaleString('id-ID')} </p>
                            // </span>
                        }
                        
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {/* Jumbotron Section */}
                <div>
                    <div className="sporteens-jumbotron-list-products">
                        <div className="container h-100">
                            <div className="row align-items-center h-100">
                                <div className="col-md-12 text-center text-md-left sporteens-light">
                                    <h1 className="sporteens-jumbotron-title-list-products">Get Your Product Here</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Content Section */}

                <div className="container mt-4">
                    <div className="row mt-4">
                        {
                            this.state.data === null ?
                            <div className='col-12 my-5'>
                            <Loader className='text-center p-0 m-0' type="ThreeDots" color="#364f6b" height={40} width={40} />
                            <p className='text-center sporteens-main-dark'>loading</p>
                            </div>
                            :
                            this.renderDataToJsx()
                        }
                        
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ListProducts

