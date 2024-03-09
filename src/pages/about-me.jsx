import React from "react";

class AboutMe extends React.Component {
  render() {
    return (
      <>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-1">
            Introduction
          </h2>
          <p className="indent-5">
            Hello, my name is Luiz Felipe and I am a Brazilian developer
            passionate about acquiring knowledge and contributing to the future
            of technology. I have a proven track record in maintaining and
            improving multiple products, collaborating with cross-functional
            teams, and onboarding new developers. I am open to exploring new
            technologies and languages for my continued professional growth.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-1">
            Professional Objective
          </h2>
          <p className="indent-5">
            I'm an enthusiastic developer looking for opportunities to improve
            my skills and gain meaningful knowledge. I am open to working with
            new technologies and languages, seeking professional growth. I
            prefer to work remotely, but I am willing to consider alternative
            proposals, including travel. Salary expectations can be discussed.
          </p>
        </div>
      </>
    );
  }
}

export default AboutMe;
