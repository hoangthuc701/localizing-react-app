import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img className="navbar-logo" src={logo} alt="logo" />
          <strong>{t("app_name")}</strong>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Weekly Basket
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
