import {APP_LOGO} from "../utils/constants";
import {useState} from "react"
import { Link } from "react-router-dom";


const Header = () => {

    const [btnNameReact,setBtnNameReact]=useState("Login")

    return (
        <div className="header">
            <div className="app-logo">
                <img className="logo-img" src={APP_LOGO} />
            </div>
            <div className="nav-items">
                
                <ul>
                    <li><Link className="header-links" to="/" >Home</Link></li>
                    <li><Link className="header-links" to="/about" >About Us</Link></li>
                    <li><Link className="header-links" to="/contact" >Contact</Link></li>
                    <li>cart</li>
                    <button className="login-btn"
                    onClick={()=>{
                        btnNameReact === "Login"
                        ?setBtnNameReact("Logout")
                        :setBtnNameReact("Login")
                    }}
                    > {btnNameReact} </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;