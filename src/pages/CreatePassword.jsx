import React, { Component } from 'react'
import Axios from 'axios'
import apiUrl from '../supports/constants/apiUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export class CreatePassword extends Component {
    state= {
        eyePassword : true,
        eyeConfirm : true
    }

    onSubmitBtnClick = () => {
        // get value
        let pass = this.refs.pass.value
        let passconfirm = this.refs.passconfirm.value

        if(pass && passconfirm){
            var id = this.props.location.pathname.split('/')[2]
    
            // check input 1 dan 2 harus sama
            if(pass === passconfirm){
                Axios.patch(apiUrl + 'users/' + id, {password : pass})
                .then((res) => {
                    console.log(res)
                    alert('create password success')
                    window.location = '/'
                })
                .catch((err) => {
                    console.log(err)
                })
                // kirim ke api
            }else{
                alert('Password and confirm password didnt match')
            }
        }

        // password harus lebih dari 8 digit
    }

    render() {
        return (
            <div className='py-5 px-3'>
                <h1 className='text-center'> Create Your Password Here !! </h1>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-4 p-5 sporteens-bg-main-dark rounded sporteens-shadow">
                        <div className='border bg-white d-flex px-2'>
                            <input style={{flex:'1',border:'none'}} className='p-2 sporteens-input' type={this.state.eyePassword ? 'password' : 'text'} ref='pass' placeholder='enter password'/>
                            <span><FontAwesomeIcon className='h-100' color='gray' onClick= {() => this.setState({eyePassword : !this.state.eyePassword})}  icon={faEye} /></span>
                        </div>
                        <div className='border bg-white d-flex px-2 mt-3'>
                            <input style={{flex:'1',border:'none'}} className='p-2 sporteens-input' type={this.state.eyeConfirm ? 'password' : 'text'} ref='passconfirm' placeholder='confirm password'/>
                            <span><FontAwesomeIcon className='h-100' color='gray' onClick={() => this.setState({eyeConfirm : ! this.state.eyeConfirm})}  icon={faEye} /></span>
                        </div>
                        
                        {/* <input type="password" ref='passconfirm' className='form-control mt-3' placeholder='confirm password'/> */}
                        <input type="button" onClick={this.onSubmitBtnClick} value="Submit" className='btn btn-white w-100 mt-5'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePassword
