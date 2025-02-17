import "../nav/Nav.css";
import "../../../App.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import GridViewIcon from "@mui/icons-material/GridView";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
function Nav() {
  return (
    <div className="nav d-flex align-items-center ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 part1 d-flex align-items-center">
            <Button className="bg-g text-white catTab">
              {" "}
              <GridViewIcon /> &nbsp; Browse All Categories{" "}
              <KeyboardArrowDownIcon />{" "}
            </Button>
          </div>
          <div className="col-sm-7 part2">
            <nav>
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  <Button>
                    <Link>Home </Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>About</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Shop</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Vendors</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Mega Menu <KeyboardArrowDownIcon /></Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Blog</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Pages <KeyboardArrowDownIcon /></Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-2 part3 d-flex align-items-center">
            <div className="phone-no d-flex align-items-center ml-auto">
              <span> <HeadsetMicIcon/></span>
              <div className="info ml-3">
                <h3 className="text-g mb-0">
                  +9168498314
                </h3>
              <p className="mb-0">24/7 Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav;
