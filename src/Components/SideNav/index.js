import React, { useState } from "react";

const SideNav = () =>{
    return(
        <div className="sideNav_container">
            <div className="sideNav_btn">
                <i className="fa fa-bars"></i>
            </div>
            <ul className="navs">
                <li className="nav-item">
                    <a href="" className="nav-link active">
                        <i className="fa fa-home"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                        <i className="fa fa-user"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                    <i className="fa fa-file"></i>
                    </a>
                </li>
                <li className="nav-item">
                <a href="" className="nav-link">

                    <i className="fa fa-pie-chart"></i>
                    </a>
                </li>
                <li className="nav-item">
                <a href="" className="nav-link">
                    
                    <i className="fa fa-database"></i>
                    </a>
                </li>
                <li className="nav-item">
                <a href="" className="nav-link">

                    <i className="fa fa-archive"></i>
                    </a>
                </li>
                <li className="nav-item">
                <a href="" className="nav-link">

                    <i className="fa fa-settings"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default SideNav;