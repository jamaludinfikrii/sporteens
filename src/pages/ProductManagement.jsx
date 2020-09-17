import { faEdit, faPlus, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
const APIURL = 'http://localhost:4000/'

export class ProductManagement extends Component {
    state = {
        data : null,
        modalAddOpen : false
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
    onAddClick = () => {
        // ambil semua value
        var name = this.productName.value
        var price = this.productPrice.value
        var images_1 = this.images1.value
        var images_2 = this.images2.value
        var images_3 = this.images3.value
        var stock = this.stock.value
        var category_id = this.categoryid.value

        // cek null value
        if(name && price && images_1 && images_2 && images_3 && stock && category_id){
        // send value ke api
        var data = {name,price,images_1,images_2,images_3,stock,category_id}
        Axios.post('http://localhost:4000/product',data)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
        

        }else{
            alert('form cannot be null')
        }
    }
    render() {
        return (
            <div className='container py-5'>
                <h1>Product Management With Real API</h1>
                <Modal toggle={() => this.setState({modalAddOpen : false})} isOpen={this.state.modalAddOpen}>
                    <ModalHeader toggle={() => this.setState({modalAddOpen : false})}>
                        Add New Product
                    </ModalHeader>
                    <ModalBody>
                        <input type="text" ref={(el) => this.productName = el} className='form-control mt-3' placeholder='Product Name'/>
                        <input type="number" ref={(el) => this.productPrice = el} className='form-control mt-3' placeholder='Product Price'/>
                        <input type="text"  ref={(el) => this.images1 = el} className='form-control mt-3' placeholder='Images 1'/>
                        <input type="text" ref={(el) => this.images2 = el} className='form-control mt-3' placeholder='Images 2'/>
                        <input type="text" ref={(el) => this.images3 = el} className='form-control mt-3' placeholder='Images 3'/>
                        <input type="text" ref={(el) => this.stock = el} className='form-control mt-3' placeholder='Stock'/>
                        <input type="text" ref={(el) => this.categoryid = el} className='form-control mt-3' placeholder='Category Id'/>
                    </ModalBody>
                    <ModalFooter>
                        <input type='button' onClick={this.onAddClick} className='btn btn-info' value='Add'/>
                    </ModalFooter>
                </Modal>
                <FontAwesomeIcon onClick={() => this.setState({modalAddOpen : true})} icon={faPlus}/>

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
