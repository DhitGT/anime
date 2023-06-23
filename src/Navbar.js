import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";

import { useNavigate, useLocation, Link } from "react-router-dom";

function Navbar({ onInputChange,onInputChangeChar }) {
  const [inputSearch, SetInputSearch] = useState("");
  const [inputSearchChar, SetInputSearchChar] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const currentLocation = location.pathname;
  const handleInputSearch = (event) => {
    SetInputSearch(event.target.value);
    onInputChange(event.target.value);
    navigate(`/list`);
  };
  const handleInputSearchChar = (event) => {
    SetInputSearchChar(event.target.value);
    onInputChangeChar(event.target.value);
    navigate(`/list/char`);
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
        <div class="container d-flex g-5">
          <a class="navbar-brand " href="#">
            <b>D.NIME</b>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-item-center">
              <li class="nav-item">
                <input
                  class="form-control me-2 w-100 w-lg-50 mb-3 mt-5 mb-lg-0 mt-lg-0 "
                  type="search"
                  placeholder="Search Anime Here"
                  aria-label="Search"
                  onChangeCapture={handleInputSearch}
                />
              </li>
              <li class="nav-item">
                <br class="w-5"></br>
              </li>
              <li class="nav-item">
                <input
                  class="form-control me-2 w-100 w-lg-50 mb-sm-3"
                  type="search"
                  placeholder="Search Anime Characters Here"
                  aria-label="Search"
                  onChangeCapture={handleInputSearchChar}
                />
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active btn btn-outline-danger p-2 mt-4 mt-lg-0"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
