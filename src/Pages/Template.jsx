import React from "react";

class Template extends React.Component {
  render() {
    return (
      <main id="content" className="bg-black">
        <div className="container mx-auto">
          <div className="flex items-center justify-center h-screen">
            {this.props.children}
          </div>
        </div>
      </main>
    );
  }
}

export default Template;
