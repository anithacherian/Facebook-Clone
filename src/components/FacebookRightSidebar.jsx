import React from "react";
import account from '../assets/images/account.png';
import advertisment1 from '../assets/images/advertisment1.jpg'
import advertisment2 from '../assets/images/advertisment2.jpg'
import post_profile1 from '../assets/images/post_profile1.png';
import post_profile2 from '../assets/images/post_profile2.png';
import post_profile3 from '../assets/images/post_profile3.png';
import post_profile4 from '../assets/images/post_profile4.png';
import post_profile5 from '../assets/images/post_profile5.png';
function FacebookRightSidebar(){
    return(
        <div className="RightSidebar">
            <h5 className="mt-3">Sponsored</h5>
            <div className="advertise_wrapper">
                <img src={advertisment1} alt="" />
                <span>Save BIG on Creative Cloud Pro
                    <p>adobe.com</p>
                </span>
            </div>
            <div className="advertise_wrapper">
                <img src={advertisment2} alt="" />
                <span>Be a Better Writer, Starting Today
                    <p>grammarly.com</p>
                </span>
            </div>
            <hr className="text-secondary" />
            <h5 >Birthday</h5>
            <div className="birthday_wrapper">
                <i class="bi bi-gift-fill"></i>
                <span><b>Nithya and 4 others</b> have their birthday today</span>
            </div>
            <hr className="text-secondary" />
            <h5 >Contacts</h5>
            {/* <div >
                <img src={post_profile1} alt="" />
                <h4>James Chen</h4>
            </div> */}

           <nav className="navbar navbar-expand-lg navbar-light">                
                    <ul className="navbar-nav  flex-column">
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><img src={account} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>Anitha Cherian</a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><img src={post_profile2} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>Philip Thomas</a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><img src={post_profile3} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>Bindu Nair </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><img src={post_profile4} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>Susan Jose</a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><img src={post_profile5} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>Joshua Praveen</a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex p-3" href="#"><img src={post_profile1} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>James Chen</a>
                        </li>
                    </ul>

           
            </nav>

        </div>
    )
}
export default FacebookRightSidebar