import React from "react";
import Template from "../Template";
import LeftMenu from "./components/LeftMenu";
import Content from "./components/Content";

class Home extends React.Component {
  render() {
    return (
      <Template>
        <div className="flex divide-x divide-x-3 divide-black bg-white rounded-lg shadow">
          <LeftMenu />

          <Content />
        </div>
      </Template>
    );
  }
}

export default Home;
