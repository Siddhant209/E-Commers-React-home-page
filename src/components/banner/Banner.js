import Banner1 from "../../assets/images/banner-1.png";
import Banner2 from "../../assets/images/banner-2.png";
import Banner3 from "../../assets/images/banner-3.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";
import "../banner/Banner.css";
function Banner() {
  return (
    <div className="BannerSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <img src={Banner1} alt="" className="w-100 transition" />
            <div className="info">
              <h4> Everyday Fresh & <br /> Clean with Our <br /> Products</h4>
              <Button>Shop Now<ArrowForwardIcon /> </Button>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <img src={Banner2} alt="" className="w-100 transition" />
              <div className="info">
              <h4> Make your Breakfast <br /> Healthy and Easy</h4>
              <Button>Shop Now<ArrowForwardIcon /> </Button>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <img src={Banner3} alt="" className="w-100 transition" />
              <div className="info">
              <h4> The best Organic <br /> Products Online</h4>
              <Button>Shop Now <ArrowForwardIcon /> </Button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
