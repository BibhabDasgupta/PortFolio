import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: image2,
    title: "PassTrust",
    description:
      "Developing a decentralized SSI management system using FastAPI and Streamlit to securely manage and verify passports and visas on the Polygon blockchain. The system integrates verifiable credentials (VCs) to streamline validation, reduce manual verification, and enable efficient online verification by global government authorities. Leveraging Polygon ensures scalable, tamper-proof storage with data integrity and privacy.",
  },
  {
    img: image4,
    title: "FeelFlix",
    description: "Developing a full-stack web application using FastAPI and React, incorporating real-time emotion detection powered by OpenCV and DeepFace to deliver personalized movie recommendations. The system integrates the TMDb API for dynamic movie data, MongoDB for scalable storage, and cloud deployment for high responsiveness.",
  },
  {
    img: image3,
    title: "Medkart",
    description: "Developed a blockchain solution using Solidity and Truffle to prevent counterfeit drugs, with immutable records accessible via a REST API. Built a ReactJS interface with Web3 and MetaMask for secure interactions and real-time authentication. Integrated IoT.js for monitoring transport conditions and MongoDB for scalable storage, enhancing security and traceability with JWT/QR.",
  },
  {
    img: image5,
    title: "SolaneX",
    description: "Developed a platform enabling seamless Solana (SOL) purchases in INR/USD with a React-based frontend and a Node.js backend, integrated with Razorpay for secure payment processing. Designed a RESTful API to ensure robust backend functionality and created a user-friendly interface to enhance accessibility, reliability, and user experience for cryptocurrency transactions.",
  },
  {
    img: image1,
    title: "Sachub",
    description:
      "Developed a full-stack web application using Node.js, Express.js, and MySQL to streamline facility bookings and event scheduling, effectively managing venues and reducing scheduling conflicts. Designed a responsive and user-friendly interface with HTML, CSS, and JavaScript, enhancing user experience and operational efficiency.",
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Projects</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
