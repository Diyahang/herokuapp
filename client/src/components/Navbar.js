import React, { useState, useContext } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/app-context";

const Navbar = () => {
  const context = useContext(AppContext);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUser = () => {
  //     fetch("http://localhost:5000/auth/login/success", {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true,
  //       },
  //     })
  //       .then((response) => {
  //         if (response.status === 200) return response.json();
  //         throw new Error("authenticated has been failed");
  //       })
  //       .then((resObject) => {
  //         setUser(resObject.user);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getUser();
  // }, []);

  // console.log(user);

  const logout = () => {
    window.open("https://backend-binar-car-rental.herokuapp.com/auth/logout", "_self");
  };

  return (
    <section id="section-1">
      <nav class="navbar navbar-expand-lg py-3">
        <div class="container">
          <a href={`/`}>
            <img src={logo} alt="logo" />
          </a>

          <button class="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end col-md-10" id="navbarNav">
            <ul class="navbar-nav">
              <li class="item d-flex align-items-center">
                <a class="navtext" href="#section-2">
                  Our Services
                </a>
              </li>
              <li class="item d-flex align-items-center">
                <a class="navtext" href="#section-3">
                  Why Us
                </a>
              </li>
              <li class="item d-flex align-items-center">
                <a class="navtext" href="#section-4">
                  Testimonial
                </a>
              </li>
              <li class="item d-flex align-items-center">
                <a class="navtext" href="#section-6">
                  FAQ
                </a>
              </li>
            </ul>

            {context.user ? (
              <ul className="list">
                <li className="listItem">
                  <img src={context.email == "diyah@gmail.com" ? logo : context.user.photos[0].value} alt="" className="avatar" />
                </li>
                <li className="listItem" style={{ marginTop: "12px" }}>
                  {context.user.displayName || context.user.username || "User"}
                </li>
                <li className="listItem" onClick={logout}>
                  <button style={{ marginTop: "4px", border: 0, backgroundColor: "#5cb85f", color: "white", padding: "8px 12px", borderRadius: "4px", fontWeight: "700", fontSize: "14px" }}>Logout</button>
                </li>
              </ul>
            ) : (
              
              <Link className="link" to="/Login">
                <button style={{ marginTop: "4px", border: 0, backgroundColor: "#5cb85f", color: "white", padding: "8px 12px", borderRadius: "4px", fontWeight: "700", fontSize: "14px" }}>Login</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
