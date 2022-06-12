import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import BackToTop from '../../AnimatedRoute/BackToTop';

const Footer = () => {
  return (
    <div className="mt-auto pt-6">
      <BackToTop />
      <footer className="footer footer-center p-4 bg-base-300 text-base-content glass">
        <div>
          <div>
            <a
              href="https://www.facebook.com/azizul.azizulhoquejiku/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white">
                <FaFacebookF className="text-lg md:text-2xl" />
              </button>
            </a>
            <a
              href="https://www.instagram.com/muhammadazizuljiku/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:text-white">
                <FaInstagram className="text-lg md:text-2xl" />
              </button>
            </a>
            <a
              href="https://twitter.com/muhammadjiku364"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white">
                <FaTwitter className="text-lg md:text-2xl" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-azizul-hoque-jiku-775057211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white">
                <FaLinkedinIn className="text-lg md:text-2xl" />
              </button>
            </a>
            <a
              href="https://github.com/muhammad-jiku"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-white hover:text-black">
                <FaGithub className="text-lg md:text-2xl" />
              </button>
            </a>
          </div>
          <p>
            Copyright © 2022 - All right reserved by{' '}
            <span
              className="text-xs sm:text-sm md:text-xl text-primary"
              style={{ fontFamily: 'Comfortaa' }}
            >
              {' '}
              Muhammad Azizul Hoque Jiku{' '}
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
