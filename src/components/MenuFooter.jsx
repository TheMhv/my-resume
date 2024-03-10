import React from "react";

class MenuFooter extends React.Component {
  render() {
    return (
      <div className="absolute bottom-0 bg-gray-300 rounded-r-lg rounded-t-none w-full p-3 mt-10">
        <div className="flex justify-between items-center">
          <div>
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

          <div className="flex items-center">
            <label>Primary color:</label>
            <input
              className="rounded ml-2"
              type="color"
              defaultValue={getComputedStyle(
                document.documentElement
              ).getPropertyValue("--color-primary")}
              onChange={(e) => {
                document.documentElement.style.setProperty(
                  "--color-primary",
                  e.target.value
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MenuFooter;
