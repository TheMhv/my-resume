import React from "react";
import { LuBook, LuHourglass, LuLightbulb, LuSchool } from "react-icons/lu";
import { Link } from "react-router-dom";

class MenuTabs extends React.Component {
  render() {
    return (
      <div className="flex justify-between text-sm font-medium">
        <Link
          to="about-me"
          className="flex items-center justify-center bg-white border-b-2 border-transparent rounded-t-lg py-3 px-5 w-full hover:font-bold hover:border-gray-500 active:text-blue-600 active:border-blue-600"
        >
          <LuBook className="mr-1" />
          About me
        </Link>

        <Link
          to="experiences"
          className="flex items-center justify-center bg-white border-b-2 border-transparent rounded-t-lg py-3 px-5 w-full hover:font-bold hover:border-gray-500 active:text-blue-600 active:border-blue-600"
        >
          <LuHourglass className="mr-1" />
          Experiences
        </Link>

        <Link
          to="skills"
          className="flex items-center justify-center bg-white border-b-2 border-transparent rounded-t-lg py-3 px-5 w-full hover:font-bold hover:border-gray-500 active:text-blue-600 active:border-blue-600"
        >
          <LuLightbulb className="mr-1" />
          Skills
        </Link>

        <Link
          to="education"
          className="flex items-center justify-center bg-white border-b-2 border-transparent rounded-t-lg py-3 px-5 w-full hover:font-bold hover:border-gray-500 active:text-blue-600 active:border-blue-600"
        >
          <LuSchool className="mr-1" />
          Education
        </Link>
      </div>
    );
  }
}

export default MenuTabs;
