import React from "react";
import FacebookTopMenu from "./FacebookTopMenu";
import FacebookLeftNavbar from "./FacebookLeftNavbar";
import FacebookLogin from "./FacebookLogin";
import FacebookRightSidebar from "./FacebookRightSidebar";
import Footer from "./Footer";

function Facebook(){
    return(
        <div>
            <FacebookTopMenu/>
                <div class="Middle_main_wrapper">
                    <FacebookLeftNavbar/>
                    <FacebookLogin/> 
                    <FacebookRightSidebar/>
                </div>
            <Footer/>
        </div>
    )
};
export default Facebook