import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-1">
          Education
        </h2>

        <div>
          <ul className="list-disc pl-10 py-2">
            <li>
              Bachelor Degree of Computer Engineering (Online) - Cidade Verde
              University Center{" "}
              <span className="text-sm font-semibold">
                (Stopped on 3th semester)
              </span>
            </li>

            <li>
              High school{" "}
              <span className="text-sm font-semibold">(Complete)</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold border-b-2">
            Some complementary courses
          </h3>

          <ul className="list-disc pl-10 py-2">
            <li>
              Civil Police of Minas Gerais - Cyber Crimes: The Main Risks and
              Basic Prevention Techniques{" "}
              <span className="text-sm font-semibold">(Complete)</span>
            </li>

            <li>
              Cedaspy Professional Informatics{" "}
              <span className="text-sm font-semibold">(Complete)</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold border-b-2">Languages</h3>

          <ul className="list-disc pl-10 py-2">
            <li>Intermediate and technical English</li>

            <li>Basic Spanish, but I can try to communicate</li>

            <li>Naturally fluent in Portuguese</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Education;
