import React, { Component } from 'react';
import './../supports/css/Register.css';
import emailValidator from '../supports/functions/emailValidator';
import phoneNumberValidator from '../supports/functions/phoneNumberValidator';
import Axios from 'axios';
import apiUrl from '../supports/constants/apiUrl';

class Register extends Component{
    state= {
        errorMessage : ""
    }

    onSubmitBtnClick = () => {
        // get value from input
        var value = this.refs.emailOrPhone.value

        if(Number(value[0]) >= 0){
            var phoneValidatorResult = phoneNumberValidator(value)
            if(phoneValidatorResult === true){
                this.sendDataToApi({phone : value, email : ""})
                // kirim ke api
            }else{
                this.setState({errorMessage : phoneValidatorResult})
                // munculin error message
            }
        }else{
            if(emailValidator(value) === true){
                this.sendDataToApi({email : value , phone : ""})

                // kirim ke api
            }else{
                this.setState({errorMessage : 'Email format wrong !!'})

                // munculin error message
            }
            
        }

       
        // validasi input
        // kirim ke api
    }

    sendDataToApi = (data) => {
        var dataToSend = data
        dataToSend.password = ''

        var datatype = data.phone ? 'phone' : 'email'
        var datavalue = data.phone ? data.phone : data.email

        console.log(datatype)
        console.log(datavalue)


        Axios.get(apiUrl + 'users?' + datatype + '=' + datavalue)
        .then((res) => {
            if(res.data.length === 0) {
                Axios.post(apiUrl + 'users' , dataToSend )
                .then((res) => {
                    console.log(res)
                    alert('register success')
                    window.location = '/create-password/' + res.data.id
                    localStorage.setItem('id',res.data.id)
                })
                .catch((err) => {
                    this.setState({errorMessage : err.message })
                })
                // available
            }else{
                this.setState({errorMessage : datatype + ' already taken, try another !!!!'})
            }
        })

        .catch((err) => {
            this.setState({errorMessage : err.message})
        })
    }



    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        {/* Image */}
                        <div className="myfsid-register-image col-12 col-md-6 d-none d-md-block">
                            
                        </div>
                        
                        {/* Register */}
                        <div className="col-12 col-md-6 pt-5 pt-md-0 text-center">
                            <div className="row justify-content-center px-5">
                                <div className="col-12 col-md-8">
                                    {
                                        this.state.errorMessage ? 
                                            <div className="alert alert-danger"> {this.state.errorMessage} </div>
                                        :
                                        null
                                    }
                                    
                                    {/* Register */}
                                    <h5 className="font-weight-bolder mb-4">Daftar Disini</h5>
                                    <input type="text" ref='emailOrPhone' className="form-control rounded-0 mb-3 px-5" placeholder="Masukan Nomor Handphone / Email" />
                                    <input onClick={this.onSubmitBtnClick} type="button" value="Submit" className="btn rounded-0 w-100 sporteens-bg-main-dark text-white" />
                                    
                                    {/* Register With Google */}
                                    <h5 className="font-weight-bolder my-4">Atau</h5>
                                    <input type="button" value="Daftar Dengan Akun Google" className="btn rounded-0 w-100 mb-1 btn-danger text-white" />
                                    <span>Sudah Punya Akun? <b>Masuk</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register


// validasi phone number atau email gak boleh sama