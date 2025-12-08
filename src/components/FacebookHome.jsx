import React from "react";
import logo from '../assets/images/facebook-logo.png';
import {Link,useNavigate} from  "react-router-dom"


function FacebookHome(){
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/Facebook')
    }
    return(
            <div className="container-fluid login-wrapper">
                <div className="login-content">
                    <div className="logo-section">
                        <span><img src={logo} alt="" /></span>
                        <p>Facebook helps you connect and share with the people in your life.</p>
                    </div>
                    <div className="login-form-section">
                        <div className="login-card">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <input type="tel" pattern="[0-9]*"  inputMode="numeric"  className="form-control" id="login-mobile" placeholder="Enter Mobile Number" required/>
                                </div>
                                <div className="mb-4">
                                    <input type="password"  className="form-control" id="login-password" placeholder="Enter Password" required/>
                                </div>
                                 <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                </div>
                                <div className="mt-3">
                                    <h6><a href="#" style={{color:'#4867a8'}}>Forgotten password?</a></h6>
                                </div>
                                <div className="mt-3">
                                    <Link to={'/SignUp'} className="btn btn-primary new-account" >Create new account</Link>
                                </div>
                            </form>
                        </div>
                        <div className="mb-4">
                            <h6><a href="#"><b>Create a Page</b></a> for a celebrity, brand or business</h6>
                        </div>

                    </div>
                </div>
            </div>
          
    )};

export default FacebookHome;