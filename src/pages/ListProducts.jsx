import React, { Component } from 'react'
import './../supports/css/ListProducts.css'
import Axios from 'axios'
import apiUrl from '../supports/constants/apiUrl'
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'



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

    onChangeSort = () => {
        var sortBy = this.refs.sort.value
        var data = this.state.data
        if(sortBy === 'higherPrice'){
            data.sort((a,b) => {
                return b.price - a.price
            })
            // sort dari harga tertinggi
        }else if(sortBy === 'lowerPrice'){
            data.sort((a,b) => {
                return a.price - b.price
            })
            // sort dari harga terendah

        }else if(sortBy === 'discount'){
            data.sort((a,b) => {
                return b.discount - a.discount
            })
            // sort dari discount tertinggi

        }else if(sortBy === 'sort'){
            data.sort((a,b) => {
                return a.id - b.id
            })
            // ubah ke default
        }
        this.setState({data : data})
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
                    <div className='text-right'>
                       
                        <span className='sporteens-font-14 text-secondary sporteens-clickable-el'>Filter <FontAwesomeIcon icon={faChevronDown} /></span>
                        <select ref='sort' onChange={this.onChangeSort}  className='sporteens-font-14 text-secondary sporteens-clickable-el sporteens-dropdown ml-3'>
                            <option value="sort">Sort By</option>
                            <option value="higherPrice">Higher Price</option>
                            <option value="lowerPrice">Lower Price</option>
                            <option value="discount">Discount</option>
                        </select>
                    </div>
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

