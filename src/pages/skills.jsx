import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-1">
          Skills
        </h2>

        <div>
          <h3 className="text-xl font-semibold border-b-2">Web</h3>

          <ul className="list-disc pl-10 py-2">
            <li>Proficiency in HTML, CSS and JavaScript.</li>

            <li>
              Experience with frameworks such as React, Jquery, Laravel and
              CodeIgniter
            </li>

            <li>Experience in REST and GraphQL communication and developing</li>

            <li>API, SPA and MVA developing</li>

            <li>
              Bidirectional communication protocols such as Websocket and
              Server-sent Events
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
          <h3 className="text-xl font-semibold border-b-2">Networking</h3>

          <ul className="list-disc pl-10 py-2">
            <li>Network performance monitoring and optimization.</li>

            <li>Diagnosing and resolving network connectivity issues.</li>

            <li>Experience in configuring VPN tunnels.</li>

            <li>Configuration and administration of local networks.</li>

            <li>Implementation and management of firewalls.</li>

            <li>Configuration of DNS and DHCP servers.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold border-b-2">Hardware</h3>

          <ul className="list-disc pl-10 py-2">
            <li>Assembly, maintenance and diagnosis of computer hardware</li>

            <li>Basic knowledge of computer architecture and components</li>

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
    );
  }
}

export default Skills;
