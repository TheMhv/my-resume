import React from "react";
import { LuCog, LuX } from "react-icons/lu";

class Configurator extends React.Component {
  showModal() {
    document.getElementById("configuratorModal").classList.remove("hidden");
  }

  hideModal() {
    document.getElementById("configuratorModal").classList.add("hidden");
  }

  render() {
    return (
      <>
        <button
          className="bg-primary text-white border-2 border-primary rounded-lg hover:bg-white hover:text-black hover:border-primary p-2"
          onClick={this.showModal}
        >
          <LuCog />
        </button>

        <div
          id="configuratorModal"
          className="hidden fixed top-0 left-0 bg-black bg-opacity-50 backdrop-blur	h-screen w-screen"
          onClick={this.hideModal}
        >
          <div className="flex justify-center items-center h-full">
            <div
              className="relative bg-white border rounded shadow w-2/3 hover:scale-105 transition-transform ease-in-out duration-300"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="absolute top-2 right-2" onClick={this.hideModal}>
                <button className="text-2xl text-white font-bold bg-primary border-2 border-transparent rounded hover:bg-transparent hover:text-black hover:border-primary">
                  <LuX />
                </button>
              </div>

              <div className="p-8">
                <h2 className="font-semibold text-4xl text-center mb-8">
                  Template Configurator
                </h2>

                <div className="flex justify-center items-center gap-10">
                  <div>
                    <button
                      className="relative bg-primary text-white font-bold rounded p-2 hover:scale-105 target:scale-105 transition-transform ease-in-out duration-300"
                      onClick={() => {
                        document.getElementById("changePrimaryColor").click();
                      }}
                    >
                      <input
                        id="changePrimaryColor"
                        className="absolute opacity-0"
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
                      Change Primary Color
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Configurator;
