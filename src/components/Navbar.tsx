import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [dark, setDark] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>,sectionId: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
      <ul className="flex justify-center gap-8 py-4 px-6">
        <li><a onClick={(e) => handleNavClick(e, "about")} href="#about" className="hover:text-blue-600">About</a></li>
        <li><a onClick={(e) => handleNavClick(e, "skills")} href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a onClick={(e) => handleNavClick(e, "project")} href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><NavLink to="/contact" className="hover:text-blue-600"> Contact</NavLink></li>
        <li><button onClick={toggleTheme} className="theme-toggle bg-[#646cff] hover:bg-[#535bf2] p-2 rounded-md text-sm"> {dark ? "Light Mode" : "Dark Mode"}</button></li>
     </ul>
    </nav>
  );
};

export default Navbar;
