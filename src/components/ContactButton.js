import React from 'react';
import { FaPhone } from 'react-icons/fa';

const ContactButton = () => {
  return (
    <a href="tel://+34621160190" target="_blank" className="group block bg-[rgb(180,190,15)] rounded shadow-xl mx-auto max-w-xs md:max-w-md transition duration-300 ease-in-out p-2 mt-4 mb-10 cursor-pointer no-underline">
      <div className="flex items-center">
        {/* Icon Column */}
        <div className="w-1/4 flex justify-center">
          <div className="bg-white rounded-full p-2 flex justify-center items-center" style={{ width: '50px', height: '50px' }}>
            <FaPhone className="text-3xl text-[rgb(180,190,15)] group-hover:text-black" /> {/* Phone icon */}
          </div>
        </div>

        {/* Text Column */}
        <div className="w-3/4 pl-4">
          <span className="text-white text-2xl md:text-3xl font-bold group-hover:text-black">+34 621 160 190</span>
          <p className="text-white text-lg p-0 m-0 group-hover:text-black">Contacta con nosotros!</p>
        </div>
      </div>
    </a>
  );
}; 

export default ContactButton;
