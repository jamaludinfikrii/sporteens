import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Link} from 'react-router-dom'


export class LoginModal extends Component {
    state = {
        modalOpen : false
    }

   
    
    render() {
        return (
            <span>
                <span onClick={() => this.setState({modalOpen : true})} className={this.props.className}>{this.props.isi}</span>
                <Modal toggle={() => this.setState({modalOpen : false})} isOpen={this.state.modalOpen}>
                    <ModalHeader toggle={() => this.setState({modalOpen : false})}>
                        Login Here
                    </ModalHeader>
                    <ModalBody>
                        <input type='text' placeholder='enter your phone / email' className='form-control' />
                        <input type='password' placeholder='enter your password' className='form-control mt-3' />
                        <input type="button" className='btn btn-info mt-4' value='submit'/>

                    </ModalBody>
                    <ModalFooter>
                    <p className='text-center sporteens-font-14'>Don't have account yet? <Link to='/register' className='sporteens-link'> <span className='sporteens-clickable-el sporteens-main-dark font-weight-bold'> Register here </span> </Link></p>

                    </ModalFooter>
                </Modal>
            </span>
        )
    }
}

export default LoginModal
