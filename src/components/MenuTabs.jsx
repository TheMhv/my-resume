import React from "react";

import { LuBook, LuHourglass, LuLightbulb, LuSchool } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

function Tab({ to, icon, text }) {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={classNames([
        "flex items-center justify-center bg-white border-b-2 rounded-t-lg py-3 px-5 w-full",
        location.pathname === `/${to}`
          ? "font-bold border-primary text-primary"
          : "border-transparent hover:font-bold hover:border-primary hover:text-primary",
      ])}
    >
      <span className="mr-1">{icon}</span>
      {text}
    </Link>
  );
}

function MenuTabs() {
  return (
    <div className="flex justify-between text-sm font-medium">
      <Tab text="About Me" icon={<LuBook />} to="about-me" />

      <Tab text="Experiences" icon={<LuHourglass />} to="experiences" />

      <Tab text="Skills" icon={<LuLightbulb />} to="skills" />

      <Tab text="Education" icon={<LuSchool />} to="education" />
    </div>
  );
}

export default MenuTabs;
