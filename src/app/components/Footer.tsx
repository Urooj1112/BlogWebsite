import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between px-4">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold text-yellow-400">
            Read<span className="text-white">it.</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Beyond raw numbers and charts lies data analysis, where patterns emerge and insights come to life.
          </p>
          <div className="mt-6 flex space-x-4 justify-center sm:justify-start">
            <a href="#" className="text-white text-xl hover:text-yellow-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-white text-xl hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/urooj-saeed-b748a5304/" className="text-white text-xl hover:text-yellow-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Urooj1112" className="text-white text-xl hover:text-yellow-400">
              <FaGithub />
            </a>
          </div>
        </div>
        {/* Latest News Section */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Data Analysis Tools</h3>
          <div className="mb-4">
            <p className="text-gray-300">Power BI</p>
            <p className="text-gray-300">Tableau</p>
            <p className="text-gray-300">Python</p>
            <p className="text-gray-300">Excel</p>
            <p className="text-gray-300">SQL</p>
            <p className="text-gray-300">R</p>
          </div>
        </div>
        {/* Information Links */}
        <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Articles
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Information */}
        <div className="w-full lg:w-1/6">
          <h3 className="text-lg font-semibold mb-4">Have a Question?</h3>
          <ul>
            <li className="text-gray-300 mt-2 flex items-center">
              <i className="mr-2 hover:text-yellow-400"> <FaPhone /></i> +923120564865
            </li>
            <li className="text-gray-300 mt-2 flex items-center">
              <i className="mr-2 hover:text-yellow-400"> <FaEnvelope /></i> saeedurooj0@gmail.com
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Copyright Section */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        Urooj Saeed | Copyright © 2025 | All rights reserved
      </div>
    </footer>
  );
}
