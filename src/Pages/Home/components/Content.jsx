import React from "react";
import MenuTabs from "./MenuTabs";

class Content extends React.Component {
  render() {
    return (
      <div className="col-span-8 relative">
        <MenuTabs />
        <div className="px-3">
          <h1 className="text-2xl font-bold text-nowrap">My Resume</h1>
        </div>
      </div>
    );
  }
}

export default Content;
