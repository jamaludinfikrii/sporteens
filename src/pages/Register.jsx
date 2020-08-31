import React, { Component } from 'react';
import './../supports/css/Register.css';

class Register extends Component{
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
                                    {/* Register */}
                                    <h5 className="font-weight-bolder mb-4">Daftar Disini</h5>
                                    <input type="text" className="form-control rounded-0 mb-3 px-5" placeholder="Masukan Nomor Handphone / Email" />
                                    <input type="button" value="Submit" className="btn rounded-0 w-100 sporteens-bg-main-dark text-white" />
                                    
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