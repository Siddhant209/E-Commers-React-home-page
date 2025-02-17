import Slider from "react-slick";
import "../catSlide/CatSlide.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from "react";
function CatSlide() {
  const[itemBg,setItemBg]=useState(["#fffceb"
    ,'#ecffec',
    '#feefen',
    "#fffceb",
    "#fff3ff",
    "#f2fce4"
    ,'#ecffec',
    '#feefen',
    "#fffceb"
    ,'#ecffec',
    '#feefen',
    "#fffceb"
    ,'#ecffec',
    '#feefen',
  ])
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };
  return (
    <div className="catSlideSection">
      <div className="container-fluid">
        <h2 className="hd">Featured Categories</h2>
        <Slider {...settings} className="cat-slider-main">
          {itemBg.map((items,index)=>
          {
            return(
              <div className="item">
              <div className="info" style={{background:items}}>
                <img
                  src={`https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-${index+1}.png`}
                  alt=""
                />
                <h6>Cake & Milk</h6>
                <p>26 Items</p>
              </div>
            </div>
            )
          }
          )}
        </Slider>
        <br /> <br />
      </div>
    </div>
  );
}

export default CatSlide;
