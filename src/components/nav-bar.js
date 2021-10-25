import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {

  const {user} = useAuth0(); 

  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <img 
            src="https://global-uploads.webflow.com/5e26823f16b6d170cafb8f8a/5e41f653a0a389a5d2d1b5cc_caleb-and-brown-logo.svg"
            width="350px"
            height="80px"
            style={{marginRight: "25px"}} 
          />
          { user && user.picture && 
                    <img 
                      src={user.picture}
                      width="50px"
                      height="50px"
                      style={{marginRight: '10px'}}
                    />
          }
          <MainNav />
          <AuthNav />
          
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
