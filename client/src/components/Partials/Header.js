import React, { useState } from "react";
import "./header.css";

import { useNavigate } from "react-router-dom";
import { Avatar, Badge, message } from "antd";
import { GetAllNotifications } from "../../apicalls/notifications";
import { ReadAllNotifications } from "../../apicalls/notifications";
import Notifications from "../../MainComponents/Notifications";
function Header() {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  // Get the dispatch function from Redux

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const getNotifications = async () => {
    try {
      const response = await GetAllNotifications();

      if (response.success) {
        setNotifications(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const readNotifications = async () => {
    try {
      const response = await ReadAllNotifications();

      if (response.success) {
        getNotifications();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };
  const isAuthenticate = () => {
    try {
      // Check if the token exists in local storage
      const token = localStorage.getItem("token");
      return !!token; // Returns true if token exists, otherwise false
    } catch (error) {
      // Handle errors (if any) during token retrieval from local storage
      console.error("Error retrieving token:", error);
      return false; // Return false to indicate authentication failure
    }
  };

  return (
    <>
      <nav
        className="p-3   text-gray-200 w-full shadow-md sticky-top"
        style={{ background: "#1B1A1D" }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="fst-italic">
              <a
                href="/"
                className="transition duration-300 text-white text-3xl font-bold"
                style={{ textDecoration: "none" }}
              >
                𝓤𝓹-𝓛𝓪𝓷𝓬𝓮𝓻
              </a>
            </div>
          </div>

          {/* MOBILE NAV ICON */}
          <div className="md:hidden block">
            <button
              aria-label="navigation"
              type="button"
              className="md:hidden text-black-500 transition duration-300 focus:outline-none focus:text-black hover:text-red"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-3xl text-black-200"></i>
            </button>
          </div>

          {/* NAVIGATION - LARGE SCREENS */}
          <div className="hidden md:flex space-x-4">
            {isAuthenticate() ? (
              // Show authenticated user links
              <>
                <a
                  href="/freelancers"
                  className="transition duration-300 mt-2 text-white hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  freelancers
                </a>

                <a
                  href="/profile"
                  className="transition duration-300 mt-2 text-white hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Become a Seller
                </a>
                <Badge
                  onClick={() => {
                    navigate("/wishlist");
                  }}
                  className="cursor-pointer"
                  // style={{ backgroundColor: "#FEFEFE" }}
                >
                  <Avatar
                    shape="circle"
                    size="large"
                    color="white"
                    icon={<i class="bi bi-heart-fill"></i>}
                  />
                </Badge>
                <Badge
                  count={
                    notifications.filter((notification) => !notification.read)
                      .length
                  }
                  onClick={() => {
                    readNotifications();
                    setShowNotifications(true);
                  }}
                  className="cursor-pointer"
                >
                  <Avatar
                    shape="circle"
                    size="large"
                    icon={<i class="bi bi-bell-fill"></i>}
                  />
                </Badge>

                <div
                  className="btn btn-outline fw-bold fs-5 flex text-light border border-success"
                  onClick={handleProfileClick}
                >
                  Profile
                </div>
                <div
                  className="btn btn-outline fw-bold fs-5 flex text-light border border-danger"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </>
            ) : (
              // Show links for non-authenticated users
              <>
                {/* <a
                  href="/"
                  className="transition duration-300 mt-2 text-white hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  why Uplancer?
                </a>

                <a
                  href="/"
                  className="transition duration-300 mt-2 text-white hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  About
                </a> */}

                <a
                  href="/freelancers"
                  className="transition duration-300 mt-2 text-white hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  freelancers
                </a>
                <a
                  href="/profile"
                  className="transition duration-300 mt-2 text-white hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Become a Seller
                </a>
                <Badge
                  onClick={() => {
                    navigate("/wishlist");
                  }}
                  className="cursor-pointer"
                  style={{ backgroundColor: "FFFFFF" }}
                >
                  <Avatar
                    shape="circle"
                    size="large"
                    icon={<i class="bi bi-heart-fill"></i>}
                  />
                </Badge>
                <a href="/login">
                  <div
                    className="btn btn-outline fw-bold fs-5 flex text-light border border-success"
                    style={{ textDecoration: "none" }}
                  >
                    Login
                  </div>
                </a>
                <a href="/register">
                  <div
                    className="btn btn-outline fw-bold fs-5 flex text-light border border-warning"
                    style={{ textDecoration: "none" }}
                  >
                    Signup
                  </div>
                </a>
              </>
            )}
          </div>
        </div>
        <Notifications
          notifications={notifications}
          reloadNotifications={getNotifications}
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
        />
      </nav>
    </>
  );
}

export default Header;
