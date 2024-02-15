import React from "react";
// import {Icon} from "@iconify/react"
import { Link } from "react-router-dom";

export const Sidebar = () => {
  // const [color ,setColor] =useState("calculator")

  return (
    <div className="vh-100">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p>Filter</p>
          </div>
          <div className="col-6">
            <p className="" style={{ color: "blue" }}> Favorite </p>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col">
            <nav id="sidebar">
              <ul className="list-unstyled">
                <li className="">
                  <span className="px-1">&#10095;</span>
                  <Link to="/apidata" className=" text-dark text-decoration-none"style={{ cursor: "pointer" }}>
                      <span className="fs-5">DataShow</span>
                  </Link>
                </li>
                <li className="">
                  <span className="px-1">&#10095;</span>
                  <Link
                    to="/name"
                    className=" text-dark text-decoration-none"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="fs-5">Name</span>
                  </Link>
                </li>
                <li className="">
                  <span className="px-1">&#10095;</span>
                  <Link
                    to="/email"
                    className=" text-dark text-decoration-none"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="fs-5">Email ID</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <li className={`${color === "setting"?"text-bg-secondary text-white my-2 m-0 mt-3 rounded-2 p-1":"my-2 m-0 mt-3"}`}>
          <Link to="/table" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }} onClick={()=>setColor("setting")}>
            <span className={`${color ==="setting"?"text-white fs-5":"text-dark fs-5"}`}><Icon icon="lets-icons:setting-fill" className="fs-3" /> Settings <span className="float-end">&#10095;</span></span></Link>
          </li> */
}
