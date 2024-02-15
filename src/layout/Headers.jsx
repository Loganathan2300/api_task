import React from "react";
// import Logo from "../../Assest/Angadi logo1.png"
const Headers = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="header">
          <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid">
              <a className="navbar-brand text-white" href="#">
                {/* <img src={Logo} alt="FTS Logo" width="60" height="40"></img> */}
                FTS Academy{" "}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link text-white"
                      aria-current="page"
                      href="#"
                    >
                      {" "}
                      Home
                    </a>
                    {/* active is befor of the color give it */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Menu
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown{" "}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://maps.google.com/"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://maps.google.com/"
                        >
                          {" "}
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white"
                      aria-current="page"
                      href="#"
                    >
                      {" "}
                      Disabled
                    </a>
                  </li>
                </ul>
                {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success text-white" type="submit"> Search </button>
            </form> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    // <div className='container-fluid p-0'>
    //     <div className='row'>
    //         <div className='col-12'>
    //             <p className='bg-dark px-2'>mb</p>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Headers;
