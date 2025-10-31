import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("tokenUser");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("tokenUser");
    setIsLoggedIn(false);
    navigate("/login");
  };
const rawBackendUrl =
  process.env.REACT_APP_BACKEND_URL ||
  process.env.BACKEND_URL ||
  process.env.VITE_BACKEND_URL;
const backendUrl = rawBackendUrl
  ? String(rawBackendUrl).replace(/\/$/, "")
  : null;

  const handleDelete = () => setShowDeleteModal(true);
  const confirmDelete = async () => {
    try {
      await fetch(`${backendUrl}/delete-user/${user}`, {
        method: "DELETE",
      });
      localStorage.removeItem("token");
      localStorage.removeItem("tokenUser");
      setIsLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };
  const closeModal = () => setShowDeleteModal(false);

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-md backdrop-blur-md border-b border-gray-200 fixed top-0 z-50">
      <header className="px-6 lg:px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-all"
        >
          <img
            className="h-10 w-10 rounded-lg shadow-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZrRgwuKA5JrFS4glBVgzvmPDhhPjWrObr-D01xeKZQ&s"
            alt="Logo"
          />
          <span className="font-semibold text-xl text-gray-800">MindMate</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-gray-700 font-medium">
          <a
            href={`/${user}/mood`}
            className="hover:text-blue-600 transition-all"
          >
            Mood Tracker
          </a>
          <a
            href={`/${user}/therapist`}
            className="hover:text-blue-600 transition-all"
          >
            AI Therapist
          </a>
          <a
            href={`/${user}/quiz`}
            className="hover:text-blue-600 transition-all"
          >
            Quiz
          </a>
          <a
            href={`/${user}/anonymoussharing`}
            className="hover:text-blue-600 transition-all"
          >
            Anonymous Sharing
          </a>
          <a href="/aboutus" className="hover:text-blue-600 transition-all">
            About Us
          </a>
        </div>

        {/* User / Login */}
        <div className="hidden lg:flex items-center">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center focus:outline-none hover:scale-105 transition-transform"
              >
                <img
                  className="h-10 w-10 rounded-full border-2 border-blue-400 shadow-sm"
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                  alt="Profile"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 py-2 animate-fadeIn">
                  <a
                    href={`/${user}/profile`}
                    className="block px-4 py-2 hover:bg-blue-50 text-gray-800"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-blue-50 text-gray-800"
                  >
                    Sign out
                  </a>
                  <a
                    href="#"
                    onClick={handleDelete}
                    className="block px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Delete Profile
                  </a>
                </div>
              )}
            </div>
          ) : (
            <a
              href="/login"
              className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition-all"
            >
              Login →
            </a>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg p-6 space-y-4 animate-slideDown">
          <a
            href={`/${user}/mood`}
            className="block text-gray-700 hover:text-blue-600"
          >
            Mood Tracker
          </a>
          <a
            href={`/${user}/therapist`}
            className="block text-gray-700 hover:text-blue-600"
          >
            AI Therapist
          </a>
          <a
            href={`/${user}/quiz`}
            className="block text-gray-700 hover:text-blue-600"
          >
            Quiz
          </a>
          <a
            href={`/${user}/anonymoussharing`}
            className="block text-gray-700 hover:text-blue-600"
          >
            Anonymous Sharing
          </a>
          <a
            href="/aboutus"
            className="block text-gray-700 hover:text-blue-600"
          >
            About Us
          </a>
          {isLoggedIn && (
            <>
              <a
                href={`/${user}/profile`}
                className="block text-gray-700 hover:text-blue-600"
              >
                Your Profile
              </a>
              <a
                href="#"
                onClick={handleLogout}
                className="block text-gray-700 hover:text-blue-600"
              >
                Sign out
              </a>
              <a
                href="#"
                onClick={handleDelete}
                className="block text-red-600 hover:text-red-700"
              >
                Delete Profile
              </a>
            </>
          )}
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-[90%] sm:w-[400px] text-center animate-scaleIn">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Delete Profile
            </h2>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete your profile? This action cannot
              be undone.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={confirmDelete}
                className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all"
              >
                Delete
              </button>
              <button
                onClick={closeModal}
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
