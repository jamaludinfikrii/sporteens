import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Link} from 'react-router-dom'
import phoneValidator from './../supports/functions/phoneNumberValidator'
import emailValidator from './../supports/functions/emailValidator'

export class LoginModal extends Component {
    state = {
        modalOpen : false
    }

    onSubmitBtn = () => {
        var data = this.refs.data.value
        var pass = this.refs.password.value
        if(Number(data[0]) === 0){
            phoneValidator(data)
            // phone
        }else{
            emailValidator(data)
            // email
        }
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
                        <input type='text' ref='data' placeholder='enter your phone / email' className='form-control' />
                        <input type='password' ref='password' placeholder='enter your password' className='form-control mt-3' />
                        <input type="button" onClick={this.onSubmitBtn} className='btn btn-info mt-4' value='submit'/>

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
