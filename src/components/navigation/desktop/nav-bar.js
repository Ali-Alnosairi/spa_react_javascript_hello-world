import React from "react";
import { NavBarBrand } from "./nav-bar-brand";
import { NavBarTabs } from "./nav-bar-tabs";
import LoginButton from "../../LoginButton";
import LogoutButton from "../../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
export const NavBar = () => {
  const { isAuthenticated } = useAuth0(); 
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand />
        <NavBarTabs />
        {!isAuthenticated && (
          <>
            <LoginButton/>
          </>
        )}
        {isAuthenticated && (
          <>
            <LogoutButton/>
          </>
        )}
      </nav>
    </div>
  );
};
