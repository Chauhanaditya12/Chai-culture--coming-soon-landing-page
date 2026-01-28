import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const SocialLinks = () => (
  <div className="flex space-x-6 mt-12">
    <a href="#" aria-label="Instagram" className="text-brand-brown/60 hover:text-brand-brown transition-colors transform hover:scale-125">
      <FaInstagram size={24} />
    </a>
    <a href="#" aria-label="Twitter" className="text-brand-brown/60 hover:text-brand-brown transition-colors transform hover:scale-125">
      <FaTwitter size={24} />
    </a>
    <a href="#" aria-label="LinkedIn" className="text-brand-brown/60 hover:text-brand-brown transition-colors transform hover:scale-125">
      <FaLinkedinIn size={24} />
    </a>
  </div>
);

export default SocialLinks;
