import React from "react";
import { Translation } from "react-i18next";

const Header = ()=>(
  <Translation>
  {(t) => (
    <div className="header">
      <h1 className="title is-4 has-text-centered mb-5">
        {t("weekly_basket_title", {
          date: new Date(),
        })}
      </h1>

      <p>{t("basket_delivered", { count: 2342 })}</p>
    </div>
  )}
</Translation>
);

export default Header;