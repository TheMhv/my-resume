import React from "react";
import { Route, Routes } from "react-router-dom";

class Content extends React.Component {
  render() {
    return (
      <div className="space-y-3 mt-5 mb-24 px-4">
        <Routes>
          <Route
            path="/about-me"
            element={
              <>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-1">
                    Introduction
                  </h2>
                  <p className="indent-5">
                    Hello, my name is Luiz Felipe and I am a Brazilian developer
                    passionate about acquiring knowledge and contributing to the
                    future of technology. I have a proven track record in
                    maintaining and improving multiple products, collaborating
                    with cross-functional teams, and onboarding new developers.
                    I am open to exploring new technologies and languages for my
                    continued professional growth.
                  </p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-1">
                    Professional Objective
                  </h2>
                  <p className="indent-5">
                    I'm an enthusiastic developer looking for opportunities to
                    improve my skills and gain meaningful knowledge. I am open
                    to working with new technologies and languages, seeking
                    professional growth. I prefer to work remotely, but I am
                    willing to consider alternative proposals, including travel.
                    Salary expectations can be discussed.
                  </p>
                </div>
              </>
            }
          />

          <Route
            path="/experiences"
            element={
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">
                  Professional Experiences
                </h2>

                <div>
                  <h3 className="text-xl font-semibold border-b-2">
                    Lead Force Ltda. - Fullstacks Developer
                    <span className="text-sm ml-2">(Fev/2022 -> now)</span>
                  </h3>

                  <ul className="list-disc pl-10 py-2">
                    <li>
                      Responsible for maintaining, updating and organizing
                      various company products.
                    </li>

                    <li>
                      I helped other teams in the company to create tasks,
                      organize teams and infrastructures.
                    </li>

                    <li>
                      I was responsible for some onboarding of new developers.
                    </li>

                    <li>
                      I recommended several technologies and presented problem
                      solutions for some of the company's products.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold border-b-2">
                    MOVA Person-to-Peer Loan Company S.A. - PHP Developer
                    <span className="text-sm ml-2">(Nov/2021 -> Fev/2022)</span>
                  </h3>

                  <ul className="list-disc pl-10 py-2">
                    <li>
                      Responsible for developing several unit and functional
                      tests on some of the company's APIs.
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
                    <span className="text-sm ml-2">(Dez/2020 -> Nov/2021)</span>
                  </h3>

                  <ul className="list-disc pl-10 py-2">
                    <li>
                      Responsible for creating, maintaining and updating several
                      websites
                    </li>

                    <li>
                      I also developed some automation software, APIs and
                      interaction robots
                    </li>

                    <li>
                      I was responsible for creating, updating and carrying out
                      maintenance on servers and hosting and database machines
                    </li>
                  </ul>
                </div>
              </div>
            }
          />

          <Route
            path="/skills"
            element={
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-1">
                  Skills
                </h2>

                <div>
                  <h3 className="text-xl font-semibold border-b-2">Web</h3>

                  <ul className="list-disc pl-10 py-2">
                    <li>Proficiency in HTML, CSS and JavaScript.</li>

                    <li>
                      Experience with frameworks such as React, Jquery, Laravel
                      and CodeIgniter
                    </li>

                    <li>
                      Experience in REST and GraphQL communication and
                      developing
                    </li>

                    <li>API, SPA and MVA developing</li>

                    <li>
                      Bidirectional communication protocols such as Websocket
                      and Server-sent Events
                    </li>

                    <li>
                      Development in several languages, such as PHP, Javascript,
                      Typescript, etc.
                    </li>

                    <li>Using version control tools such as Git</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold border-b-2">Database</h3>

                  <ul className="list-disc pl-10 py-2">
                    <li>Database Administration</li>

                    <li>SQL and NoSQL experiences</li>

                    <li>Data modeling and database schema design</li>

                    <li>Data analysis, optimization and intelligence</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold border-b-2">
                    Networking
                  </h3>

                  <ul className="list-disc pl-10 py-2">
                    <li>Network performance monitoring and optimization.</li>

                    <li>
                      Diagnosing and resolving network connectivity issues.
                    </li>

                    <li>Experience in configuring VPN tunnels.</li>

                    <li>Configuration and administration of local networks.</li>

                    <li>Implementation and management of firewalls.</li>

                    <li>Configuration of DNS and DHCP servers.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold border-b-2">Hardware</h3>

                  <ul className="list-disc pl-10 py-2">
                    <li>
                      Assembly, maintenance and diagnosis of computer hardware
                    </li>

                    <li>
                      Basic knowledge of computer architecture and components
                    </li>

                    <li>Configuration and maintenance of physical servers</li>

                    <li>Knowledge of basic electronics and IOT</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold border-b-2">
                    Information security
                  </h3>

                  <ul className="list-disc pl-10 py-2">
                    <li>Vulnerability analysis and penetration testing</li>

                    <li>Implementation of cybersecurity policies</li>

                    <li>Knowledge of cryptography and key management</li>

                    <li>Forensic and security incident investigations</li>
                  </ul>
                </div>
              </div>
            }
          />

          <Route
            path="/education"
            element={
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-1">
                  Education
                </h2>

                <div>
                  <ul className="list-disc pl-10 py-2">
                    <li>
                      Bachelor Degree of Computer Engineering (Online) - Cidade
                      Verde University Center{" "}
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
                  <h3 className="text-xl font-semibold border-b-2">
                    Complementary courses
                  </h3>

                  <ul className="list-disc pl-10 py-2">
                    <li>
                      Civil Police of Minas Gerais - Cyber Crimes: The Main
                      Risks and Basic Prevention Techniques{" "}
                      <span className="text-sm font-semibold">(Complete)</span>
                    </li>

                    <li>
                      Cedaspy Professional Informatics{" "}
                      <span className="text-sm font-semibold">(Complete)</span>
                    </li>
                  </ul>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default Content;
