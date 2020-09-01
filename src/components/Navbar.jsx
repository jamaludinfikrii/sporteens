import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    state ={
        openToggle : false,
        isLogin : true
    }

    render() {
        return (
            <div className='sporteens-bg-main-dark py-4'>
                <div className="container">
                    <div className="row justify-content-between px-4">

                        {/* Header Logo */}
                        <div className="sporteens-light sporteens-logo-header sporteens-clickable-el ">
                            <Link to='/' className='sporteens-link'>
                                Logo
                            </Link>
                        </div>

                        {/* Header Items */}
                        <div className="sporteens-light sporteens-items-header d-none d-md-block">
                            <span className='mr-md-3 sporteens-clickable-el'>
                                <Link to='/' className='sporteens-link'>
                                    Home
                                </Link>
                            </span>
                            <span className='mr-md-3 sporteens-clickable-el'>
                                <Link to='/products' className='sporteens-link'>
                                    Products
                                </Link>
                            </span>
                            <span className='mr-md-3 sporteens-clickable-el'>
                                <Link to='/brands' className='sporteens-link'>

                                Brands
                                </Link>
                            </span>

                            {this.state.isLogin ? 
                                <span>
                                    <span className='mr-md-3 sporteens-clickable-el' >
                                        <Link to='/cart' className='sporteens-link'>

                                        Cart
                                        </Link>
                                    </span>   
                                    <span className='d-inline-block mr-md-3 sporteens-clickable-el' >
                                        <img width='30px' className='mr-2' src='https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png' alt='avatar-circle' />
                                        <Link to='/user-detail' className='sporteens-link h-100 d-inline-block'>
                                            Fikri
                                        </Link>
                                    </span>
                                </span>
                                :
                                <span>
                                    <span className='mr-md-3 sporteens-clickable-el' >
                                        <Link to='/register' className='sporteens-link'>
                                            Login
                                        </Link>
                                    </span>  
                                    <span className='mr-md-3 sporteens-clickable-el' >
                                        <Link to='/register' className='sporteens-link'>
                                            Register
                                        </Link>
                                    </span>  
                                </span>
                            
                            }

                               
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
