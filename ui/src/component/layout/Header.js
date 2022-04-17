import "./header.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const Header = () => {
  const rememberMe = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();
  const url = "http://127.0.0.1:8000";

  return (
    <div className="header_container">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <h4>DIRECT MANPOWER</h4>
          </Link>
        </div>
        <div className="links_container">
          <ul className="links">
          <li>
              <Link to="/home">Home </Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="/product">Production</Link>
            </li>
            
          </ul>
        </div>
        {rememberMe ? (
          <div className="rightsideheader">
            {" "}
            <button
            className="logout"
              onClick={(e) => {
                localStorage.removeItem("data");
                navigate("./");
              }}
            >
              Sign out
            </button>
            <Link to="/account"> 
          
              <img className="account"
                src={url + rememberMe.user.profile.image}
                alt={rememberMe.user.id}
              />
              </Link>
       
          </div>
        ) : (
          <div>
            <button className="login">
              {" "}
              <Link to="/Signin"> log in</Link>{" "}
            </button>
            <button className="logout">
              {" "}
              <Link to="/Signup">Regester</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
