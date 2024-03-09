import React from "react";

class Experiences extends React.Component {
  render() {
    return (
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">
          Professional Experiences
        </h2>

        <div>
          <h3 className="text-xl font-semibold border-b-2">
            Lead Force Ltda. - Fullstacks Developer
            <span className="text-sm ml-2">{"(Fev/2022 -> now)"}</span>
          </h3>

          <ul className="list-disc pl-10 py-2">
            <li>
              Responsible for maintaining, updating and organizing various
              company products.
            </li>

            <li>
              I helped other teams in the company to create tasks, organize
              teams and infrastructures.
            </li>

            <li>I was responsible for some onboarding of new developers.</li>

            <li>
              I recommended several technologies and presented problem solutions
              for some of the company's products.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold border-b-2">
            MOVA Person-to-Peer Loan Company S.A. - PHP Developer
            <span className="text-sm ml-2">{"(Nov/2021 -> Fev/2022)"}</span>
          </h3>

          <ul className="list-disc pl-10 py-2">
            <li>
              Responsible for developing several unit and functional tests on
              some of the company's APIs.
            </li>

            <li>Developed integrations with Google Cloud Functions.</li>
          </ul>

          <p>
            It took a short time, but it was a good first professional
            experience.
          </p>
        </div>

        <div className="pt-2">
          <h3 className="text-xl font-semibold border-b-2">
            Freelance Web Developer
            <span className="text-sm ml-2">{"(Dez/2020 -> Nov/2021)"}</span>
          </h3>

          <ul className="list-disc pl-10 py-2">
            <li>
              Responsible for creating, maintaining and updating several
              websites
            </li>

            <li>
              I also developed some automation software, APIs and interaction
              robots
            </li>

            <li>
              I was responsible for creating, updating and carrying out
              maintenance on servers and hosting and database machines
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Experiences;
