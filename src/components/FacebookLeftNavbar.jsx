import React from "react";
import account from '../assets/images/account.jpg';

function FacebookLeftNavbar(){
    return(
        <div className="LeftNavBar " >
           <nav className="navbar navbar-expand-lg navbar-light">                
                    <ul className="navbar-nav  flex-column">
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><img src={account} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>Anitha Cherian</a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><i class="bi bi-circle"></i> Meta AI</a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><i class="bi bi-people-fill"></i> Friends</a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#">	<i class="bi bi-arrow-repeat"></i> Memories</a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><i class="bi bi-bookmark-fill"></i> Saved</a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><i class="fa-solid fa-clapperboard"></i> Reels</a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><i class="bi bi-shop-window"></i> Marketplace</a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><i class="bi bi-newspaper"></i> Feeds</a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><i class="bi bi-bar-chart-line-fill"></i> Ads Manager</a>
                        </li>
                        <li className="nav-item">
                            <a class="d-flex p-3" href="#"><i class="bi bi-chat-right-dots"></i> Chats with AI</a>
                        </li>
                        <li className="nav-item">
                            <a class="d-flex p-3" href="#"><i class="bi bi-calendar2-check"></i> Events</a>
                        </li>
                        <li className="nav-item">
                            <a class="d-flex p-3" href="#"><i class="bi bi-controller"></i> Gaming Video</a>
                        </li>
                        <li className="nav-item">
                            <a class="d-flex p-3" href="#"><i class="bi bi-messenger"></i> Messenger</a>
                        </li>
                        <li className="nav-item">
                            <a class="d-flex p-3" href="#"><i class="bi bi-credit-card-2-back-fill"></i> Order and Payments</a>
                        </li>
                    </ul>

           
            </nav>

        </div>
    )
};

export default FacebookLeftNavbar;