import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export class Navbar extends Component {
    render() {
        return (
            <div className='bg-secondary py-4'>
                <div className="container">
                    <div className="row justify-content-between px-4">

                        {/* Header Logo */}
                        <div className="sporteens-logo-header ">
                            LOGO
                        </div>

                        {/* Header Items */}
                        <div className="sporteens-items-header d-none d-md-block">
                            <span className='mr-md-3'>
                                Home
                            </span>
                            <span className='mr-md-3'>
                                Products
                            </span>
                            <span className='mr-md-3'>
                                Brands
                            </span>
                            <span className='mr-md-3'>
                                Cart
                            </span>   
                               
                        </div>

                        <div className='sporteens-items-mobile d-md-none'>
                            <span>
                                <FontAwesomeIcon icon={faBars}/>
                            </span> 
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
