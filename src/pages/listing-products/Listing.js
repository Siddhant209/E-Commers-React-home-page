import { Link } from "react-router-dom";
import "../listing-products/Listing.css";
function Listing() {
    return (
       <section className="listing-page">
        <div className="container-fluid">
            <div className="breadCrumb">
                <h2>Snack</h2>
                <ul className="list list-item">
                    <li className="list-inline-item">
                        <Link to="#">Home</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="#">Shop</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="#">Snack</Link>
                    </li>
                </ul>
            </div>
        </div>
       </section>
    )
}

export default Listing
