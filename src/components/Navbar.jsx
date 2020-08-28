import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export class Navbar extends Component {

    state ={
        openToggle : false
    }

    render() {
        return (
            <div className='sporteens-bg-main-dark py-4'>
                <div className="container">
                    <div className="row justify-content-between px-4">

                        {/* Header Logo */}
                        <div className="sporteens-light sporteens-logo-header sporteens-clickable-el ">
                            LOGO
                        </div>

                        {/* Header Items */}
                        <div className="sporteens-light sporteens-items-header d-none d-md-block">
                            <span className='mr-md-3 sporteens-clickable-el'>
                                Home
                            </span>
                            <span className='mr-md-3 sporteens-clickable-el'>
                                Products
                            </span>
                            <span className='mr-md-3 sporteens-clickable-el'>
                                Brands
                            </span>
                            <span className='mr-md-3 sporteens-clickable-el' >
                                Cart
                            </span>   
                               
                        </div>


                        {/* Header Icons Mobile */}
                        <div className='sporteens-light sporteens-items-mobile d-md-none'>
                            {
                                this.state.openToggle ?
                                <span onClick={ () =>this.setState({openToggle : false})} className='sporteens-clickable-el'>
                                    <FontAwesomeIcon icon={faTimes}/>
                                </span> 
                                :
                                <span onClick={ () =>this.setState({openToggle : true})} className='sporteens-clickable-el'>
                                    <FontAwesomeIcon icon={faBars}/>
                                </span> 

                            }
                        </div>


                    </div>


                    {/* Header Items Mobile */}
                    {
                        this.state.openToggle ?
                            <div className="sporteens-light sporteens-header-items-mobile px-2 d-md-none">
                                <div className="mt-3 border-bottom sporteens-clickable-el">
                                    Home
                                </div>
                                <div className="mt-3 border-bottom sporteens-clickable-el">
                                    Products
                                </div>
                                <div className="mt-3 border-bottom sporteens-clickable-el">
                                    Brands
                                </div>
                                <div className="mt-3 border-bottom sporteens-clickable-el">
                                    Carts
                                </div>
                            </div>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default Navbar
