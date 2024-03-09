import React from "react";

import LeftMenu from "../components/LeftMenu";
import MenuTabs from "../components/MenuTabs";
import Content from "../components/Content";
import MenuFooter from "../components/MenuFooter";

class Template extends React.Component {
  render() {
    return (
      <main id="content" className="bg-black">
        <div className="container mx-auto">
          <div className="flex items-center justify-center h-screen">
            <div className="grid grid-cols-12 divide-x divide-x-3 divide-gray-400 bg-white rounded-lg shadow">
              <div className="col-span-4 px-3 pt-3 pb-5">
                <LeftMenu />
              </div>

              <div className="col-span-8 relative">
                <MenuTabs />

                <Content />

                <MenuFooter />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Template;
