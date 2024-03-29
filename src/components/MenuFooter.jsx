import React from "react";

import Configurator from "./Configurator";

class MenuFooter extends React.Component {
  render() {
    return (
      <div className="absolute bottom-0 rounded-r-lg rounded-t-lg w-full p-3 mt-10">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs text-nowrap">
              By:{" "}
              <a
                href="https://github.com/TheMhv"
                className="font-semibold hover:underline hover:font-bold"
              >
                @TheMhv
              </a>
            </span>
          </div>

          <div>
            <Configurator />
          </div>
        </div>
      </div>
    );
  }
}

export default MenuFooter;
