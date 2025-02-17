import Banner from "../../components/banner/Banner"
import CatSlide from "../../components/catSlide/CatSlide"
import HomeSlider from "./slider/Slider"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import banner9 from "../../assets/images/banner-9.png"
import "./index.css";
import Product from "../../components/products/Product";
import { Button } from "@mui/material";
function Index() {
    return (
        <div>
            <HomeSlider />
            <CatSlide />
            <Banner />
            <div className="homeSection">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                    <h2 className="hd mb-0 mt-0">
                    Popular Products
                    </h2>
                    <ul className="list list-inline ms-auto filter-tab">
                        <li className="list-inline-item">
                            <a href="#">All</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">Milks & Dairies</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">Meals</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">All Foods</a>
                        </li>
                    </ul>
                    </div>
                    <div className=" productRow">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="item ">
                            <Product />
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="item ">
                            <Product />
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="item ">
                            <Product />
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="item ">
                            <Product />
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="item ">
                            <Product />
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="item ">
                            <Product />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="newsLetterSection">
                <div className="container-fluid">
                    <div className="box d-flex align-items-center">
                        <div className="info">
                           <h2>Stay home & get your daily
                          <br /> needs from our shop</h2>
                           <p>Start You'r Daily Shopping with Nest Mart</p>
                           <Button>Shop Now<ArrowForwardIcon /> </Button>
                        </div>
                    <div className="img">
                        <img src={banner9} alt="" />
                    </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    )
}
export default Index
