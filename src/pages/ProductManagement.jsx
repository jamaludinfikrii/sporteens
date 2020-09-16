import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                <table>
                    {
                        this.state.data && this.state.data.map((val,index) => {
                            return(
                                    <tr>
                                        <td className='sporteens-main-dark font-weight-bold sporteens-font-16'>
                                            {index +1}.  {val.name}
                                        </td>
                                        <td className='pl-3 text-danger font-weight-light sporteens-font-12'>
                                        Rp.  {val.price.toLocaleString('id-ID')}
                                        </td>
                                        
                                        <td className='pl-3 text-info sporteens-clickable-el font-weight-light sporteens-font-12'>
                                            <Link to={'/product-management/detail/' + val.id}>
                                                <FontAwesomeIcon icon={faSearch} />
                                            </Link>
                                        </td>
                                        <td className='pl-3 text-warning sporteens-clickable-el font-weight-light sporteens-font-12'>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </td>
                                        <td className='pl-3 text-danger sporteens-clickable-el font-weight-light sporteens-font-12'>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </td>
                                    </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}

export default ProductManagement
