import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaDashcube } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [showDiv, setShowDiv] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="h-fit w-full bg-[#1b1b1b11] top-0 left-0 fixed z-50 backdrop-blur">
      <div className=" shadow-md h-14 flex justify-between items-center px-[5%]">
        <h1 className="font-bold italic text-2xl orbitron">Vishesh.</h1>
        <div className="flex justify-between items-center px-6 ">
          {/* Navlinks → hidden on small screens, visible from md and above */}
          <ul className="hidden md:flex gap-8 w-full">
            <li><a onClick={(e) => handleNavClick(e, "about")} href="#about" className="hover:text-violet-600 ">  About</a></li>
            <li><a onClick={(e) => handleNavClick(e, "skills")} href="#skills" className="hover:text-violet-600 ">  Skills</a></li>
            <li><a onClick={(e) => handleNavClick(e, "project")} href="#projects" className="hover:text-violet-600 ">  Projects</a></li>
            <li><NavLink to="/contact" className="hover:text-violet-600 ">  Contact</NavLink></li>
            <li><button onClick={toggleTheme}>  {theme === "light" ? (<FaMoon className="hover:text-violet-600" />) : (<FaSun className="hover:text-violet-600" />)}</button></li>
          </ul>

          <FaDashcube className="md:hidden text-white text-xl cursor-pointer" onClick={() => setShowDiv((prev) => !prev)} />
        </div>
      </div>
      {showDiv && (
        <div className="md:hidden text-xl cursor-pointer">
          <ul className="px-[10%] space-y-3">
            <li><a onClick={(e) => handleNavClick(e, "about")} href="#about" className="hover:text-violet-600">  About</a></li>
            <li><a onClick={(e) => handleNavClick(e, "skills")} href="#skills" className="hover:text-violet-600">  Skills</a></li>
            <li><a onClick={(e) => handleNavClick(e, "project")} href="#projects" className="hover:text-violet-600">  Projects</a></li>
            <li><NavLink to="/contact" className="hover:text-violet-600 ">  Contact</NavLink></li>
            <li><button onClick={toggleTheme}>  {theme === "light" ? (<FaMoon className="hover:text-violet-600" />) : (<FaSun className="hover:text-violet-600" />)}</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
