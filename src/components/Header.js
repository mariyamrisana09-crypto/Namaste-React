import {APP_LOGO} from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="app-logo">
                <img className="logo-img" src={APP_LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;