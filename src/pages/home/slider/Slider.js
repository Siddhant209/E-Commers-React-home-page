import Slider from "react-slick";
import'../slider/Slider.css';
import Slider1 from "../../../assets/images/slider1.png";
import Slider2 from "../../../assets/images/Slider2.png";
import Slider3 from "../../../assets/images/Slider3.png";
import Slider4 from  "../../../assets/images/Slider4.png";
function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:true
      };
    return (
        <section className="homeSlider">
        <div className="container-fluid">
            <div className="row">
            <Slider {...settings} className="Slider-main">
      <div className="item">
        <img src={Slider1} alt="" className="w-100" />
      </div>
      <div className="item">
        <img src={Slider2} alt="" className="w-100" />
      </div>
      <div className="item">
        <img src={Slider3} alt="" className="w-100" />
      </div>
      <div className="item">
        <img src={Slider4} alt="" className="w-100" />
      </div>
    </Slider>
            </div>
        </div>
        </section>
    )
}

export default HomeSlider
