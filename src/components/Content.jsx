import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import AboutMe from "../pages/about-me";
import Experiences from "../pages/experiences";
import Skills from "../pages/skills";
import Education from "../pages/education";

class Content extends React.Component {
  render() {
    return (
      <div className="space-y-3 mt-5 mb-24 px-4">
        <Routes>
          <Route exact path="/about-me" element={<AboutMe />} />

          <Route exact path="/experiences" element={<Experiences />} />

          <Route exact path="/skills" element={<Skills />} />

          <Route exact path="/education" element={<Education />} />

          <Route path="*" element={<Navigate to="/about-me" />} />
        </Routes>
      </div>
    );
  }
}

export default Content;
