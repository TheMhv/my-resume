import React from "react";
import Template from "../Template";
import LeftMenu from "./components/LeftMenu";
import Content from "./components/Content";
import MenuTabs from "./components/MenuTabs";
import MenuFooter from "./components/MenuFooter";

class Home extends React.Component {
  render() {
    return (
      <Template>
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
      </Template>
    );
  }
}

export default Home;
