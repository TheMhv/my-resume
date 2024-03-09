import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutMe from "../pages/about-me";
import Experiences from "../pages/experiences";
import Skills from "../pages/skills";
import Education from "../pages/education";

class Content extends React.Component {
  render() {
    return (
      <div className="space-y-3 mt-5 mb-24 px-4">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about-me" element={<AboutMe />} />

          <Route path="/experiences" element={<Experiences />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    );
  }
}

export default Content;
