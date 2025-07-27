import { useState } from 'react';

export default function NavbarMain() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navbar Utama */}
      <div className="navbar w-full py-5 fixed mt-3 z-50">
        <div className="container mx-auto px-4 bg-slate-200 py-3 rounded-full shadow-lg/20">
          <div className="navbar-box flex justify-between items-center">
            {/* Logo */}
            <div className="logo cursor-pointer hover:shadow-2xl hover:rounded-4xl ml-2 lg:ml-5">
              <a href="#">
                <img src="/Image/black_logo.png" alt="logo" className="w-16 h-16" />
              </a>
            </div>

            {/* Menu Desktop */}
            <ul className="hidden lg:flex gap-8 font-semibold text-lg pr-12">
              <li><a href="#home" className="hover:border-b-2 duration-100">Home</a></li>
              <li><a href="#about" className="hover:border-b-2 duration-100">About</a></li>
              <li><a href="#skills" className="hover:border-b-2 duration-100">Skills</a></li>
              <li><a href="#portofolio" className="hover:border-b-2 duration-100">Portofolio</a></li>
              <li><a href="#contact" className="hover:border-b-2 duration-100">Contact</a></li>
              <div className="darkMode mr-5 flex items-center cursor-pointer">
                <i className="fa-solid fa-toggle-off text-3xl pl-20"></i>
              </div>
            </ul>

            {/* Hamburger Menu */}
            <div className="hamburgerMenu flex lg:hidden" onClick={toggleMenu}>
              <i className={`fa-solid text-2xl font-bold cursor-pointer transition-all duration-200 ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Mobile */}
      <div className={`fixed pt-16 top-0 right-0 h-full w-[60%] bg-slate-100 z-40 shadow-lg rounded-l-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>
        <ul className="flex flex-col items-start gap-6 font-semibold text-lg p-6">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#portofolio" onClick={toggleMenu}>Portofolio</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <div className="cursor-pointer">
            <i className="fa-solid fa-toggle-off text-3xl pl-20"></i>
          </div>
        </ul>
      </div>

      {/* Overlay ketika menu terbuka */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
