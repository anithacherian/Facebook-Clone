import React from "react";
import logo from '../assets/images/facebook-logo.png';
import {Link} from  "react-router-dom"


function CreateAccount(){
    return(
            
            <div>
                <div className="w-100 text-center  mb-3">
                    <img src={logo} className="mx-auto d-block" alt="" />
                </div>
                <div className="login-card signup-card">
                    <h4 className="text-center"><b>Create a new account</b></h4>
                    <h6 className="text-center">It's quick and easy</h6>
                    <hr className="text-secondary"></hr>
                    <form action="">
                        <div className="row mb-3">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" required/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Surname" aria-label="Surname" required/>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <label htmlFor="DOB" className="form-label"><b>Date of birth <button type="button" className="btn btn-secondary tooltips" data-toggle="tooltip" data-placement="bottom" title="Click for more information"><i className="bi bi-question-circle-fill"></i></button></b></label>
                            <div className="col">
                                <select className="form-select" aria-label="Default select example"  required>
                                    <option defaultValue value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            </div>
                            <div className="col">
                                <select className="form-select" aria-label="Default select example" required>
                                    <option defaultValue value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                            </div>
                            <div className="col">
                                <select className="form-select" aria-label="Default select example" required>
                                    <option defaultValue value="2025">2025</option>
                                    <option value="2">2024</option>
                                    <option value="3">2023</option>
                                    <option value="4">2022</option>
                                    <option value="5">2021</option>
                                    <option value="6">2020</option>
                                    <option value="7">2019</option>
                                    <option value="8">2018</option>
                                    <option value="9">2017</option>
                                    <option value="10">2016</option>
                                    <option value="11">2015</option>
                                    <option value="12">2014</option>
                                </select>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <label htmlFor="gender" className="form-label"><b>Gender <button type="button" className="btn btn-secondary tooltips" data-toggle="tooltip" data-placement="bottom" title="Click for more information"><i className="bi bi-question-circle-fill"></i></button></b></label>
                            <div className="col">
                                <label className="form-check-label" htmlFor="female">Female </label>
                                <input className="form-check-input" style={{marginLeft: '0.75rem'}} type="radio" name="inlineRadioOptions" id="female" value="option1"/>
                            </div>
                            <div className="col">
                                <label className="form-check-label ml-3" htmlFor="male">Male </label>
                                <input className="form-check-input ml-3" style={{marginLeft: '0.75rem'}} type="radio" name="inlineRadioOptions" id="male" value="option1"/>
                            </div>
                            <div className="col">
                                <label className="form-check-label" htmlFor="Custom">Custom </label>
                                <input className="form-check-input ml-3" style={{marginLeft: '0.75rem'}} type="radio" name="inlineRadioOptions" id="Custom" value="option1"/>
                            </div>
                        </div>
                        <div className="row  mb-3 signup-mobile">
                            <input type="email" className="form-control " id="exampleInputEmail1" placeholder="Mobile number or email address" required />
                        </div>
                        <div className="row  mb-3 signup-mobile">
                            <input type="password" className="form-control" id="password" placeholder="New password" required aria-describedby="emailHelp"/>
                        </div>
                        <div className="row  mb-3">
                            <p>People who use our service may have uploaded your contact information to Facebook. <a href="#">Learn more</a>.</p>
                            <p>By clicking Sign Up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time</p>
                        </div>
                        <div className="row  mb-3">
                            <button type="button" className="btn btn-primary new-account" >Sign Up</button>
                        </div>
                        <div className="row" style={{color:'#4867a8',textAlign:'center'}}>
                            <h6><Link to={'/'}>Already have an account?</Link></h6>
                        </div>

                    </form>

                </div>
            </div>
          
    )};

export default CreateAccount;