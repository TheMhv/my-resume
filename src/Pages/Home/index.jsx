import React from "react";
import Template from "../Template";
import LeftMenu from "./components/LeftMenu";
import Content from "./components/Content";

class Home extends React.Component {
  render() {
    return (
      <Template>
        <div className="grid grid-cols-12 divide-x divide-x-3 divide-gray-400 bg-white rounded-lg shadow">
          <LeftMenu />

          <Content />
        </div>
      </Template>
    );
  }
}

export default Home;
