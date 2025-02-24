import React, { useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { getUserById } from "../services/UserService";


const NavbarComponent = () =>  {

  const navigator = useNavigate()
  const location = useLocation();

  const [profilePicture, setProfilePicture] = useState("")
    const userId = localStorage.getItem("userId");


  useEffect(() => {
    if (userId) {
      getUserById(userId).then((response) => {
        setProfilePicture(response.data.imagePath);
      })
    }
  }, [userId])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!" onClick={() => navigator("/")}>
          RIČO VEHICLES
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#!"
                onClick={() => {
                  navigator("/");
                }}
              >
                Homepage
              </a>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  if (localStorage.getItem("userId") != null) {
                    navigator(`/profile/${localStorage.getItem("userId")}`);
                  } else {
                    navigator("/login");
                  }
                }}
              >
                Profile
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Admin
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <button
              className="btn btn-outline-dark"
              type="submit"
              onClick={() => {
                if (localStorage.getItem("userId") == null) {
                  navigator("/login");
                } else {
                  localStorage.removeItem("userId");
                  if (location.pathname.startsWith("/profile/")) {
                    navigator("/");
                  }
                }
              }}
            >
              {userId ? (
                <>
                  Log out
                  <img
                    className="rounded-circle ms-2"
                    style={{ width: "20px", height: "20px" }}
                    src={
                      profilePicture
                        ? `http://localhost:8080/${profilePicture}`
                        : "https://dummyimage.com/150x150/6c757d/dee2e6.jpg"
                    }
                    alt="User"
                  />
                </>
              ) : (
                "Log in"
              )}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
