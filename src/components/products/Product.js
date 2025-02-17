import { Link } from "react-router-dom";
import "../products/Product.css";
import { Button, Rating } from "@mui/material";
function Product() {
    return (
       <div className="productThumb">
        <div className="badge">HOT</div>
          <div className="imageWrapper">
            <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-2.jpg" alt="" 
            className="w-100" />
          </div>
          <div className="info">
            <span className="d-block brand">Snack</span>
            <h5 className="title"> <Link>
            Seeds of Change Organic Quinoa, Brown, & Red Rice
            </Link>
            </h5> 
            <Rating name="read-only" value={4} readOnly />
          </div>
          <span className="brand d-block">
            By 
            <a href="#" className="text-g">
                NestFood</a>
          </span>
          <div className="d-flex align-items-center mt-3">
                <span className="price text-g font-weight-bold">
                    $28.85</span><span className="oldPrice">$32.8</span>    
                
                <Button className="bg-g ms-auto">Add</Button>
             </div>
          </div>
    )
}

export default Product
