import Logo from "../../assets/images/logo.jpg";
import Nav from "./nav/Nav";
import "../header/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import SelectDrop from "./selectDropDown/SelectDrop";
import axios from "axios";
import { useEffect, useState } from "react";
import CompareArrowsRounded from '@material-ui/icons/CompareArrowsRounded';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined';
import PersonOutline from '@material-ui/icons/PersonOutline';
import Button from '@mui/material/Button';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import PermIdentityOutlined from '@material-ui/icons/PermIdentityOutlined';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import Settings from '@material-ui/icons/Settings';
import Logout from '@mui/icons-material/Logout';
function Header() {
    const [categories,setCategories]=useState([
    'Citrus Fruits',
    'Berries',
    'Stone Fruits',
    'Tropical Fruits',
    'Pome Fruits',
    'Melons',
    'Exotic Fruits'
    ])
    const[isDropDownOpen,setIsDropDownOpen]=useState(false);
    const country=[];
    useEffect(()=>{
     async function getCountryData() {
        const res= await axios.get("https://restcountries.com/v3.1/all")
        res.data.map((items)=>country.sort().push(items.name.common)
    )
     }
     getCountryData();
    },[])
    return (
        <>
        <header>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 ">
                    <img src={Logo} alt="err" />
                </div>
                <div className="col-sm-5">
                    <div className="header-search d-flex align-items-center">
                          <SelectDrop data={categories} placeholder="All Categories" />
                        <div className="search">
                            <input type="text" placeholder="Search For Items" />
                            <SearchIcon className="searchIcon" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto d-flex align-items-center">
                    <div className="countyWrapper">
                     <SelectDrop data={country} placeholder="Your Country" />
                    </div>
                    <ul className="list list-inline mb-0 headerTabs">
                       <li className="list-inline-item">
                      <span> 
                        <CompareArrowsRounded className="compareArrows" />Compare
                        <span className="badge bg-success rounded-circle">
                            3
                        </span>
                        </span>
                       </li>
                       <li className="list-inline-item">
                      <span> 
                        <FavoriteBorder className="compareArrows" />WishList
                        <span className="badge bg-success rounded-circle">
                            6
                        </span>
                        </span>
                       </li>
                       <li className="list-inline-item">
                      <span> 
                        <ShoppingBasketOutlined className="compareArrows" />Cart
                        <span className="badge bg-success rounded-circle">
                            4
                        </span>
                        </span>
                       </li>
                       <li className=" list-inline-item " onClick={()=>setIsDropDownOpen(!isDropDownOpen)}>
                      <span> 
                        <PersonOutline className="compareArrows" />Account</span>
                        {
                            isDropDownOpen &&
                            <ClickAwayListener onClickAway={()=>setIsDropDownOpen(false)}>
                        <ul className="dropDownMenue">
                            <li><Button> <PermIdentityOutlined/> My Account</Button> </li>
                            <li><Button> <LocationOnOutlined /> Order Tracking</Button></li>
                            <li> <Button><FavoriteBorderOutlined />My WishList</Button></li>
                            <li><Button><Settings />Setting</Button></li>
                            <li><Button><Logout />Sign Out</Button></li>
                        </ul>
                        </ClickAwayListener>
                          } 
                       </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </header>
        <Nav />
        </>
    )
}
export default Header
