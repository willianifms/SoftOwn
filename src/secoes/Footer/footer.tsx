import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn,  FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-[#1D79FB] py-10 text-white flex flex-col items-center">
  
      <div className="flex flex-col items-center">

        <img
          src="./assets/Logo Footer.png"
          alt="Logo Footer"
          className="w-36 mb-4"
        />
        {/* Texto de direitos reservados */}
        <p className="text-center">
          &copy; <span className="font-bold">SoftOwn 2024</span>. Todos os direitos reservados.
        </p>
      </div>

      {/* Redes sociais */}
      <div className="flex space-x-6 mt-4">
        <a href="#" className="hover:text-gray-300">
          <FaFacebookF size={25} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaInstagram size={25} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaLinkedinIn size={25} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaXTwitter size={25} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaYoutube size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
