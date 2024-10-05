"use client"; // Required for using state

import { useState } from "react";

export default function CoverLetter() {
  // States for dynamic user input
  const [companyName, setCompanyName] = useState("Industrus Engineering");
  const [hiringManager, setHiringManager] = useState("Hiring Manager");
  const [companyAddress, setCompanyAddress] = useState("Industrus Engineering Australia");
  const [userCity, setUserCity] = useState("Sydney, New South Wales, Australia");
  const [date, setDate] = useState("September 8, 2024");

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-gray-800">
      {/* Input Form to Capture Dynamic Data */}
      <div className="mb-8 p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Customize Your Cover Letter</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Company Name:</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 p-2 w-full border rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Hiring Manager:</label>
            <input
              type="text"
              value={hiringManager}
              onChange={(e) => setHiringManager(e.target.value)}
              className="mt-1 p-2 w-full border rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Company Address:</label>
            <input
              type="text"
              value={companyAddress}
              onChange={(e) => setCompanyAddress(e.target.value)}
              className="mt-1 p-2 w-full border rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">User City:</label>
            <input
              type="text"
              value={userCity}
              onChange={(e) => setUserCity(e.target.value)}
              className="mt-1 p-2 w-full border rounded shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Date:</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-2 w-full border rounded shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Dynamic Cover Letter */}
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Cover Letter</h3>
        <p>{userCity}</p>
        <p>ekulhoward@hotmail.com</p>
        <p>{date}</p>
        <p className="mt-4">{hiringManager}</p>
        <p>{companyName}</p>
        <p>{companyAddress}</p>
        <br />
        <p>Dear {hiringManager},</p>
        <p className="mt-4">
          I am writing to express my enthusiasm for the Graduate Engineer position at {companyName}. As a final-year
          Mechatronics Engineering student at the University of Technology Sydney (UTS), I am eager to bring my
          technical skills, passion for innovation, and strong commitment to ethical engineering to your esteemed
          Graduate Program. I have a diverse background that spans technical expertise, leadership, and collaboration,
          all of which I believe align perfectly with the values and objectives of {companyName}.
        </p>
        <br />
        {/* Add the rest of the cover letter content */}
        <p className="mt-4">
          <strong>Selection Criteria Response:</strong>
          <ol className="list-decimal pl-6 mt-2">
            <li>
              <strong>Commitment to ethical conduct (3.1):</strong> Throughout my academic and professional experiences, I have
              upheld the highest standards of ethical conduct and accountability...
            </li>
            <li>
              <strong>Communication ability (3.2):</strong> As a Casual Academic at UTS, I regularly facilitated discussions between
              students from diverse engineering disciplines, ensuring clarity in communication...
            </li>
            <li>
              <strong>Engagement in creative, innovative environments (3.3):</strong> My engineering journey has been defined by
              creativity and innovation. One notable project involved developing an autonomous steering package...
            </li>
            <li>
              <strong>Information management skills (3.4):</strong> During my time with the UTS Motorsports Team, I designed and
              implemented systems to manage and preserve technical data...
            </li>
            <li>
              <strong>Self-performance management (3.5):</strong> In both my role as a Technical Assistant at UTS and as the Business
              Director of UTS Motorsports, I learned how to effectively manage my own performance...
            </li>
            <li>
              <strong>Teamwork and leadership (3.6):</strong> Throughout my leadership roles at UTS Motorsports, including serving as
              the President, I have demonstrated my ability to both collaborate and lead...
            </li>
          </ol>
        </p>
        <br />
        <p>
          I am excited about the opportunity to contribute to {companyName}, a company renowned for its cutting-edge
          projects and commitment to innovation. With my strong technical foundation, leadership experience, and passion
          for ethical engineering, I am confident that I would be a valuable addition to your Graduate Program. I look
          forward to discussing how my skills and experiences can contribute to {companyName}'s continued success.
        </p>
        <br />
        <p>Thank you for your time and consideration.</p>
        <p>Sincerely,</p>
        <p>Luke Howard</p>
      </div>
    </div>
  );
}
