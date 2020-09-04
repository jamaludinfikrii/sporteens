import {
    faMinus,
    faPlus,
    faShoppingCart,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { Component } from "react";
  import { UncontrolledTooltip } from "reactstrap";
import Axios from "axios";
import apiUrl from "../supports/constants/apiUrl";
  
  class Cart extends Component {
    state = {
        dataCart : null,
        dataProduct : null
    }
    componentDidMount(){
        this.getDataCart()
    }

    getDataCart = () => {
        var idUser = localStorage.getItem('id')
        if(idUser){

            // get data cart by id User
            Axios.get(apiUrl + "carts?id_user=" + idUser)
            .then((res) => {
                // apiurl/products?id=1&id=5
                // res.data = [{id_products, id_user, qty}]
                var url = 'products?'
                res.data.forEach((val) => {
                    url += 'id=' + val.id_product + '&'
                })
                console.log(url)

                
                
                console.log(res.data)

                this.setState({dataCart : res.data})

                // get data products
                Axios.get(apiUrl + url)
                .then((res) => {
                    // dapet data product
                    console.log(res.data)
                    this.setState({dataProduct : res.data})
                })
                .catch((err) => {
                    console.log(err)
                })
                
            })
            .catch((err) =>{ 
                console.log(err)
            })
        }
    }

    renderDataToJsx = () => {
        return this.state.dataCart.map((val,index) => {
            return(
                <div className="col-12 mb-5 border-bottom pb-4">
                  <div className="row justify-content-between  h-100">
                    {/* CARt image section */}
                    <div className="col-4   ">
                      <img
                        src={this.state.dataProduct[index].image1}
                        alt=""
                        style={{
                          width: "170px",
                          height: "170px",
                        }}
                      />
                    </div>
                    {/* End of image Section */}
  
                    {/* Product qty section */}
                    <div className="col-7  cart-bg-color pb-4 pt-2 ">
                      <div className=" cart-title-font font-weight-bold">
                        {this.state.dataProduct[index].name}
                        <div className="cart-price-font">Rp.{this.state.dataProduct[index].price}</div>
                      </div>
                      <div className="d-flex flex-column h-75  justify-content-end ">
                        <div className=" d-flex justify-content-between">
                          <span>
                            <button className="btn btn-secondary rounded-circle">
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
  
                            <span className=" mx-2 product-list-title-font font-weight-bold text-success ">
                              {val.qty}
                            </span>
  
                            <button className="btn btn-info rounded-circle">
                              <FontAwesomeIcon icon={faMinus} size="1" />
                            </button>
                          </span>
                          <div>
                            <button
                              className="btn btn-danger rounded-pill"
                              id="RemoveCart"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <UncontrolledTooltip
                              placement="top"
                              target="RemoveCart"
                              color="red"
                            >
                              Remove from your cart?
                            </UncontrolledTooltip>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end of qty Section */}
                  </div>
                </div>
            )
        })
    }


    render() {
      return (
        <div className="container pt-5">
          <h2 className="cart-heading-title sporteens-main-dark text-center">
            Your Cart <FontAwesomeIcon icon={faShoppingCart} />
          </h2>
          <div className="row justify-content-between py-5   ">
            {/* Cart item and Qty Section */}
            <div className="col-md-6">
              <div className="row  ">
                {this.state.dataProduct === null || this.state.dataCart === null ? 'loading...' : this.renderDataToJsx()}
              </div>
            </div>
            <div
              className="col-md-5 d-flex border rounded flex-column justify-content-between pb-2 h-25 p-3  "
              
            >
              <h4 className="product-details-font-title font-weight-light sporteens-main-dark pt-2">
                Cart Summary{" "}
                (
                  4
                )
                <p className="product-list-title-font font-weight-bold text-secondary mt-4">
                  Total:
                10.000.000
                </p>
              </h4>
  
              <div>
                <button className="btn btn-info w-100 font-weight-bold rounded-pill">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Cart;