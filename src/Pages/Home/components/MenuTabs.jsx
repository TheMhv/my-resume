import React from "react";
import { LuBook, LuHourglass, LuLightbulb, LuSchool } from "react-icons/lu";

class MenuTabs extends React.Component {
  render() {
    return (
      <div className="flex text-sm font-medium text-center">
        <div>
          <div className="flex items-center py-3 px-5 border-b-2 border-transparent rounded-t-lg hover:font-bold hover:border-gray-500 active:text-blue-600 active:border-blue-600">
            <LuBook className="mr-1" />
            About me
          </div>
        </div>
        <div>
          <div className="flex items-center py-3 px-5 border-b-2 border-transparent rounded-t-lg hover:font-bold hover:border-gray-500 active:text-blue-600 active:border-blue-600">
            <LuHourglass className="mr-1" />
            Experiences
          </div>
        </div>
        <div>
          <div className="flex items-center py-3 px-5 border-b-2 border-transparent rounded-t-lg hover:font-bold hover:border-gray-500 active:text-blue-600 active:border-blue-600">
            <LuLightbulb className="mr-1" />
            Skills
          </div>
        </div>
        <div>
          <div className="flex items-center py-3 px-5 border-b-2 border-transparent rounded-t-lg hover:font-bold hover:border-gray-500 active:text-blue-600 active:border-blue-600">
            <LuSchool className="mr-1" />
            Education
          </div>
        </div>
      </div>
    );
  }
}

export default MenuTabs;
