import Axios from 'axios'
import React, { Component } from 'react'
const APIURL = 'http://localhost:4000/'

export class ProductManagement extends Component {
    state = {
        data : null
    }
    componentDidMount(){
        this.getAllData()
    }

    getAllData = () => {
        Axios.get(APIURL + 'products')
        .then((res) => {
            console.log(res.data)
            this.setState({data : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className='container py-5'>
                <h1>Product Management With Real API</h1>
                {
                    this.state.data && this.state.data.map((val) => {
                        return(
                            <div>
                                <span className='sporteens-main font-weight-bold sporteens-font-14'>
                                    {val.name}
                                </span>
                                <span className='ml-2 text-danger font-weight-light sporteens-font-12'>
                                   Rp.  {val.price.toLocaleString('id-ID')}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ProductManagement
