import React from "react";

class MenuFooter extends React.Component {
  render() {
    return (
      <div class="absolute bottom-0 bg-gray-300 rounded-r-lg rounded-t-none w-full p-3 mt-10">
        <span className="text-xs text-nowrap">
          Created by:{" "}
          <a
            href="https://github.com/TheMhv"
            className="font-semibold hover:underline hover:font-bold"
          >
            @TheMhv
          </a>
        </span>
      </div>
    );
  }
}

export default MenuFooter;
