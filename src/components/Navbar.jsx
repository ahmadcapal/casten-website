import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100 ? true : false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });
  //navitems array
  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Service', path: 'service' },
    { link: 'About', path: 'about' },
    { link: 'Product', path: 'product' },
    { link: 'Testimonial', path: 'testimonial' },
    { link: 'FAQ', path: 'faq' },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav>
        <>
          <a href="" className="text-2x1 font-semibold flex-center space-x-3">
            <img
              src={logo}
              alt="casten logo"
              className="w-10 inline-block items-center"
              style={{ height: '100px', width: 'auto' }}
            />
            <span className="text-[#263238]">CDO</span>
          </a>
        </>
      </nav>
    </header>
  );
};

export default Navbar;
