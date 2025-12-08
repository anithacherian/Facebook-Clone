import React from "react";
import account from '../assets/images/account.jpg';
import { Link } from "react-router-dom";
function FacebookTopMenu(){
return(
    <div className="container-fluid p-0" >            
            <div className="top-menubar p-1">
                <div className="logo-wrapper">
                    <a href="#" title="Home" className="float-start"><i className="bi bi-facebook "></i></a>
                    <span className="mt-1" style={{lineHeight:'44px'}}><i className="bi bi-search "></i></span>
                    
                </div>
                <div className="top_mainmenu">
                    <span><i className="fa-solid fa-house tooltips" data-toggle="tooltip" data-placement="bottom" title="Home"></i></span>
                    <span><i className="fa-solid fa-clapperboard tooltips" data-toggle="tooltip" data-placement="bottom" title="Reels"></i></span>
                    <span><i className="fa-solid fa-store tooltips" data-toggle="tooltip" data-placement="bottom" title="Marketplace"></i></span>
                    <span><i className="fa-solid fa-user-group tooltips" data-toggle="tooltip" data-placement="bottom" title="Groups"></i></span>
                    <span><i class="fa-solid fa-gamepad tooltips" data-toggle="tooltip" data-placement="bottom" title="Games"></i></span>
                </div>
                <div className="top-sidemenu pt-1">
                    <span type="button" className="btn btn-secondary tooltips" data-toggle="tooltip" data-placement="bottom" title="Menu"><i className="bi bi-grid-3x3-gap-fill"></i></span>
                    <span type="button" className="btn btn-secondary tooltips" data-toggle="tooltip" data-placement="bottom" title="Messenger"><i className="bi bi-messenger"></i></span>
                    <span type="button" className="btn btn-secondary tooltips" data-toggle="tooltip" data-placement="bottom" title="Notification"><i className="bi bi-bell-fill"></i></span>
                   <button className="btn account_dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={account} className="tooltips" data-toggle="tooltip" data-placement="bottom" title="Account" alt="" /><i class="bi bi-arrow-down-circle-fill"></i></button>
                   <ul className="dropdown-menu">
                        <li><button type="button" className="btn dropdown-item"><img src={account} alt=""  style={{display:'block',float:'left'}}/><span className="dropdown_label"> Anitha Cherian</span></button></li>
                        <li><button type="button" className="btn dropdown-item"><i className="bi bi-gear-fill circle"></i><span className="dropdown_label"> Setting & Privacy</span></button></li>
                        <li><button type="button" className="btn dropdown-item"><i className="bi bi-question-circle-fill circle"></i><span className="dropdown_label"> Help & Support</span></button></li>
                        <li><button type="button" className="btn dropdown-item"><i className="bi bi-moon-fill circle"></i><span className="dropdown_label"> Display & Accessability</span></button></li>
                        <li><Link to={'/'} className="btn dropdown-item"><i className="bi bi-door-open-fill circle"></i><span className="dropdown_label"> Log out</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
)};
export default FacebookTopMenu;