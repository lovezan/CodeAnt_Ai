import { useState } from "react";
import { Link } from "react-router-dom"; // Using Link from React Router for navigation
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react"; // Import Menu and X (cross) icon from lucide-react
import {
  FaHome,
  FaCode,
  FaCloud,
  FaBook, // Changed from FaTools to FaBook (books icon)
  FaCog, // Changed from FaCogs to FaCog (settings icon)
  FaPhone, // Changed from FaQuestionCircle to FaPhone (telephone icon)
  FaSignOutAlt,
} from "react-icons/fa"; // Importing icons for each link
import { FiChevronDown } from "react-icons/fi"; // Arrow down icon for UtkarshDhairyaPanwar
import logo from "../assets/logo.png";
import "./sidebar.css";

const navItems = [
  { href: "/repositories", label: "Repositories", icon: <FaHome /> },
  { href: "/ai-code-review", label: "AI Code Review", icon: <FaCode /> },
  { href: "/cloud-security", label: "Cloud Security", icon: <FaCloud /> },
  { href: "/how-to-use", label: "How to Use", icon: <FaBook /> }, // Updated icon here
  { href: "/settings", label: "Settings", icon: <FaCog /> }, // Updated icon here
  { href: "/support", label: "Support", icon: <FaPhone /> }, // Updated icon here
  { href: "/login", label: "Logout", icon: <FaSignOutAlt /> },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setOpen(false); // Close the sidebar on link click
  };

  return (
    <>
      {/* Mobile Navigation */}
      <div className="main-container bg-white md:hidden flex justify-between items-center p-4 border-b">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Company Logo" className="h-8 w-8" />
          <span className="font-bold text-lg z-index-10">CodeAnt AI</span>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <div
              id="ManuCross"
              className="flex justify-end cursor-pointer"
              onClick={() => setOpen(!open)} // Toggle the open state
            >
              {open ? (
                <X className="h-6 w-6" /> // Display cross icon when open
              ) : (
                <Menu className="h-6 w-6" /> // Display menu icon when closed
              )}
            </div>
          </SheetTrigger>

          <SheetContent
            side="top" // Open the sheet from the top
            className="w-full z-50 bg-white p-4"
          >
            {/* Logo and Company Name */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Company Logo" className="h-8 w-8" />
                <span className="font-bold text-lg z-index-10">CodeAnt AI</span>
              </div>
              {/* Cross Icon */}
              {open && (
                <div
                  id="ManuCross"
                  className="ml-auto bg-white cursor-pointer"
                  onClick={() => setOpen(false)} // Close the menu when cross is clicked
                >
                  <X className="h-6 w-6" />
                </div>
              )}
            </div>

            {/* User Name Box with Arrow */}
            <div className="flex justify-between items-center p-3 mb-4 border border-gray-300 rounded-lg5 shadow-sm">
              <span className="text-lg font-semibold">
                UtkarshDhairyaPanwar
              </span>
              <FiChevronDown className="text-gray-500" />
            </div>

            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className={`justify-start w-full cursor-pointer rounded-lg5 ${
                    activeLink === item.href
                      ? "bg-blue-600 text-white"
                      : "text-white-700 hover:bg-blue-500"
                  }`}
                  onClick={() => handleLinkClick(item.href)}
                >
                  <Link
                    to={item.href}
                    className="text-lg flex items-center p-2"
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="w-64 h-screen p-4 flex-col hidden md:flex shadow-lg">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2 mb-6">
          <img src={logo} alt="Company Logo" className="h-8 w-8" />
          <div className="font-bold text-2xl text-black-600">CodeAnt AI</div>
        </div>

        {/* User Name Box with Border */}
        <div className="flex justify-between items-center p-2 mb-4 border border-gray-300 rounded-lg5 shadow-sm">
          <span className="text-lg font-semibold">UtkarshDhairyaPanwar</span>
          <FiChevronDown className="text-gray-500" />
        </div>

        <nav className="space-y-2 flex-grow">
          {navItems.slice(0, -2).map((item) => (
            <div
              key={item.href}
              className={`w-full justify-start cursor-pointer rounded-lg5 ${
                activeLink === item.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => handleLinkClick(item.href)}
            >
              <Link
                to={item.href}
                className="text-lg flex items-center p-2 rounded-md"
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="space-y-2 mt-auto">
          {navItems.slice(-2).map((item) => (
            <div
              key={item.href}
              className={`w-full justify-start cursor-pointer  rounded-lg5 ${
                activeLink === item.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => handleLinkClick(item.href)}
            >
              <Link to={item.href} className="text-lg flex items-center p-2">
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
