import icon1 from "../../assets/images/icon-1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";
import icon4 from "../../assets/images/icon-4.svg";
import icon5 from "../../assets/images/icon-5.svg";
import Logo1 from "../../assets/images/logo.jpg";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import RestoreIcon from '@mui/icons-material/Restore';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import "../footer/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
    return (<>
        <div className="footerWrapper">
            <div className="footerBoxes">
             <div className="container-fluid">
                <div className="row">
                    <div className="col">
                       <div className="box align-items-center d-flex w-100">
                         <span>
                        <img src={icon1} alt="" />
                         </span>
                       <div className="info">
                        <h5>Best prices & offers</h5>
                        <p>Orders $50 or more</p>
                       </div>
                       </div>
                    </div>
                    <div className="col">
                    <div className="box align-items-center d-flex w-100">
                         <span>
                        <img src={icon2} alt="" />
                         </span>
                       <div className="info">
                        <h5>Free delivery</h5>
                        <p>24/7 amazing services</p>
                       </div>
                       </div>
                    </div>
                    <div className="col">
                    <div className="box align-items-center d-flex w-100">
                         <span>
                        <img src={icon3} alt="" />
                         </span>
                       <div className="info">
                        <h5>Great daily deal</h5>
                        <p>When you sign up</p>
                       </div>
                       </div>
                    </div>
                    <div className="col">
                    <div className="box align-items-center d-flex w-100">
                         <span>
                        <img src={icon4} alt="" />
                         </span>
                       <div className="info">
                        <h5>Wide assortment</h5>
                        <p>Mega Discounts</p>
                       </div>
                       </div>
                    </div>

                </div>
             </div>
            </div>
        </div>
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 part1">
                        <img src={Logo1 } alt="error" />
                        <br /><br />
                        <p>Awoesome Grosery Website</p>
                        <p> <FmdGoodOutlinedIcon /> <b>Address: </b>171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                        <p><HeadsetMicIcon /> <b>Call Us: </b>(+91) - 540-025-124553</p>
                        <p><MailOutlineIcon /> <b>Email: </b>sale@Nest.com</p>
                        <p><RestoreIcon /> <b>Hours: </b>10:00 - 18:00, Mon - Sat</p>
                    </div>
                    <div className="col-md-9 part2">
                        <div className="row">
                        <div className="col">
                            <h3>Company</h3>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Delivery Information</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Support Center</Link></li>
                            <li><Link to="#">Careers</Link></li>
                        </ul>
                        </div>
                        <div className="col">
                        <h3>Account</h3>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                            <li><Link to="#">Sign In</Link></li>
                            <li><Link to="#">View Cart</Link></li>
                            <li><Link to="#">My Wishlist</Link></li>
                            <li><Link to="#">Track My Order</Link></li>
                            <li><Link to="#">Help Ticket</Link></li>
                            <li><Link to="#">Shipping Details</Link></li>
                            <li><Link to="#">Compare products</Link></li>
                        </ul>
                        </div>
                        <div className="col">
                        <h3>Co-orporate</h3>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                            <li><Link to="#">Become a Vendor</Link></li>
                            <li><Link to="#">Affiliate Program</Link></li>
                            <li><Link to="#">Farm Business</Link></li>
                            <li><Link to="#">Farm Careers</Link></li>
                            <li><Link to="#">Our Suppliers</Link></li>
                            <li><Link to="#">Accessibility</Link></li>
                            <li><Link to="#">Promotions</Link></li>
                        </ul>
                        </div>
                        <div className="col">
                        <h3>Popular</h3>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                            <li><Link to="#">Milk & Flavoured Milk</Link></li>
                            <li><Link to="#">Butter and Margarine</Link></li>
                            <li><Link to="#">Eggs Substitutes</Link></li>
                            <li><Link to="#">Marmalades</Link></li>
                            <li><Link to="#">Sour Cream and Dips</Link></li>
                            <li><Link to="#">Tea & Kombucha</Link></li>
                            <li><Link to="#">Cheese</Link></li>
                        </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <hr />
                    <div className="col-md-12 text-center">
                        <h6>@devaloped By : Siddhant Phule </h6>
                        <hr />
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer
