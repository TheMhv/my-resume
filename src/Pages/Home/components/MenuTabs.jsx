import React from "react";
import { LuBook, LuHourglass, LuLightbulb, LuSchool } from "react-icons/lu";

class MenuTabs extends React.Component {
  render() {
    return (
      <div className="flex justify-between text-sm font-medium">
        <div className="flex items-center justify-center bg-white border-b-2 border-transparent rounded-t-lg py-3 px-5 w-full hover:font-bold hover:border-gray-500 active:text-blue-600 active:border-blue-600">
          <LuBook className="mr-1" />
          About me
        </div>

        <div className="flex items-center justify-center bg-white border-b-2 border-transparent rounded-t-lg py-3 px-5 w-full hover:font-bold hover:border-gray-500 active:text-blue-600 active:border-blue-600">
          <LuHourglass className="mr-1" />
          Experiences
        </div>

        <div className="flex items-center justify-center bg-white border-b-2 border-transparent rounded-t-lg py-3 px-5 w-full hover:font-bold hover:border-gray-500 active:text-blue-600 active:border-blue-600">
          <LuLightbulb className="mr-1" />
          Skills
        </div>

        <div className="flex items-center justify-center bg-white border-b-2 border-transparent rounded-t-lg py-3 px-5 w-full hover:font-bold hover:border-gray-500 active:text-blue-600 active:border-blue-600">
          <LuSchool className="mr-1" />
          Education
        </div>
      </div>
    );
  }
}

export default MenuTabs;
