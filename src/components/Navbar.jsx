import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className='bg-secondary py-4'>
                <div className="container">
                    <div className="row justify-content-between">

                        {/* Header Logo */}
                        <div className="sporteens-logo-header ">
                            LOGO
                        </div>

                        {/* Header Items */}
                        <div className="sporteens-items-header">
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

                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
