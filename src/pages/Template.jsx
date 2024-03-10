import React from "react";

import LeftMenu from "../components/LeftMenu";
import MenuTabs from "../components/MenuTabs";
import Content from "../components/Content";
import MenuFooter from "../components/MenuFooter";

class Template extends React.Component {
  render() {
    return (
      <main
        id="content"
        className="bg-[url(../public/assets/img/background.gif)] bg-no-repeat bg-cover"
      >
        <div className="container mx-auto">
          <div className="flex items-center h-screen">
            <div className="bg-gradient-to-b from-[#000000] to-[#009743] rounded-lg p-1">
              <div className="grid grid-cols-12 bg-background text-text rounded-lg">
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
        </div>
      </main>
    );
  }
}

export default Template;
