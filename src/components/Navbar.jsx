import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set Toggle Menu

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100 ? true : false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });
  return <div>Navbar</div>;
};

export default Navbar;
