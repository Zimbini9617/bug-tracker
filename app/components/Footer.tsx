import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#009688]  text-white py-12 mt-8">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/Zimbini9617"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          
          <a
            href="https://www.linkedin.com/in/zimbini-sambunjana-0231101aa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <p className='font-mono'>&copy; {new Date().getFullYear()} Zimbini Sweety Sambunjana</p>
        </div>

        <div className="font-mono">
          <p>call: +27 71 069 2599</p>
        </div>
        <div className='font-mono'>
         <p>email: zimbinisweety@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
