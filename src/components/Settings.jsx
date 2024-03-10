import React from "react";
import { LuCog } from "react-icons/lu";

class Settings extends React.Component {
  showModal() {
    document.getElementById("settingsModal").classList.remove("hidden");
  }

  hideModal() {
    document.getElementById("settingsModal").classList.add("hidden");
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
          id="settingsModal"
          className="hidden fixed top-0 left-0 bg-black bg-opacity-50 backdrop-blur	h-screen w-screen"
          onClick={this.hideModal}
        >
          <div className="flex justify-center items-center h-full">
            <div
              className="bg-white border rounded shadow p-8 w-2/3"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h2 className="text-4xl mb-5">Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ac vehicula elit. Duis aliquam ornare orci a pharetra.
                Praesent vulputate eget lectus a tincidunt. Nullam tincidunt
                commodo tortor eu blandit. Etiam diam enim, consectetur vel
                mattis et, laoreet ultricies purus. Sed sollicitudin rutrum
                volutpat. Nam vitae ullamcorper ex. Nunc mi est, faucibus at
                luctus ac, molestie sit amet dolor. Proin nec nisi vehicula,
                pellentesque augue volutpat, elementum neque. Nulla facilisi.
                Suspendisse potenti. Sed ullamcorper, tortor a pellentesque
                lacinia, tellus augue suscipit ante, sit amet condimentum orci
                tortor ut nisi. Sed finibus enim nec lectus congue, dignissim
                aliquet lectus lobortis. Mauris ante erat, malesuada ut tortor
                sit amet, ornare feugiat massa. Aliquam iaculis sollicitudin
                placerat. Duis rutrum, ligula sed pellentesque ornare, erat leo
                interdum leo, nec mollis urna lectus in metus.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Settings;
