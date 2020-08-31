import React, { Component } from 'react'
import Axios from 'axios'
import apiUrl from '../supports/constants/apiUrl'

export class CreatePassword extends Component {
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
                        <input type="password" ref='pass' className='form-control' placeholder='enter password'/>
                        <input type="password" ref='passconfirm' className='form-control mt-3' placeholder='confirm password'/>
                        <input type="button" onClick={this.onSubmitBtnClick} value="Submit" className='btn btn-white w-100 mt-5'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePassword
