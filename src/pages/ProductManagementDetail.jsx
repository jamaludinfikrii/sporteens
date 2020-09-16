import Axios from 'axios'
import React, { Component } from 'react'
import LoadingPage from '../components/LoadingPage'

export class ProductManagementDetail extends Component {
    state ={
        data : null
    }
    componentDidMount(){
        this.getDataDetailProd()
    }

    getDataDetailProd = () => {
        const id = this.props.match.params.id
        Axios.get('http://localhost:4000/product/' + id)
        .then((res) => {
            console.log(res.data)
            if(typeof(res.data) === 'string'){
                alert(res.data)
            }else{
                this.setState({data:  res.data[0]})
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        if(this.state.data === null){
            return <LoadingPage />
        }

        var {name,price,images_1,images_2,images_3,stock,category_id} = this.state.data
        return (
            
            <div className='container py-5'>
                <h1>{name}</h1>
                <p>{price}</p>
                <p>{images_1}</p>
                <p>{images_2}</p>
                <p>{images_3}</p>
                <p>{stock}</p>
                <p>{category_id}</p>
            </div>
        )
    }
}

export default ProductManagementDetail
