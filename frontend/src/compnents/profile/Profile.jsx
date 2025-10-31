import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Loader from "react-js-loader";
import Readjournal from "../journal/Readjournal";
import defaultProfilePicture from "./download2.jpg";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const { username } = useParams();
  const rawBackendUrl =
  process.env.REACT_APP_BACKEND_URL ||
  process.env.BACKEND_URL ||
  process.env.VITE_BACKEND_URL;
const backendUrl = rawBackendUrl
  ? String(rawBackendUrl).replace(/\/$/, "")
  : null;

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/${username}/getuserdetails`
        );
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [username]);

  if (!userDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader
          type="spinner-cub"
          bgColor={"#a729f5"}
          color={"#FFFFFF"}
          size={100}
        />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="font-['Rubik'] text-[#313e51] dark:text-white">
        {/* Banner Section */}
        <section
          className="relative h-[450px] w-full flex items-center justify-center text-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-4.0.3&auto=format&fit=crop&w=2710&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
          <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Profile Overview
          </h1>
        </section>

        {/* Profile Card */}
        <section className="relative -mt-32 px-6 pb-20 flex justify-center">
          <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 border border-gray-200 dark:border-gray-700 transition-all duration-500">
            {/* Profile Picture */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <img
                  alt="Profile"
                  src={
                    userDetails.profilePicture
                      ? `process.env.BACKEND_URL/${userDetails.profilePicture}`
                      : defaultProfilePicture
                  }
                  className="w-40 h-40 object-cover rounded-full border-4 border-[#a729f5] shadow-xl"
                />
              </div>

              {/* User Info */}
              <h2 className="text-3xl font-semibold mb-2">
                {userDetails.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-lg">
                ✉️ {userDetails.email}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                🎂 Age: {userDetails.age}
              </p>

              {/* Bio */}
              <div className="mt-6 max-w-2xl text-center">
                <p className="text-[#626c7f] dark:text-gray-300 italic leading-relaxed">
                  {userDetails.bio || "No bio provided yet."}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#a729f5]">
                    {userDetails.journals.length}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Journals</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Link to={`/${userDetails.username}/updateprofile`}>
                  <button className="px-6 py-2 rounded-full bg-[#a729f5] hover:bg-[#9221db] text-white font-medium shadow-lg transition-all duration-300">
                    ✏️ Update Profile
                  </button>
                </Link>
                <Link to={`/${username}/createjournal`}>
                  <button className="px-6 py-2 rounded-full border border-[#a729f5] text-[#a729f5] hover:bg-[#a729f5] hover:text-white font-medium shadow-md transition-all duration-300">
                    📓 Create Journal
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Journal Section */}
        <div className="mt-10 px-6">
          <Readjournal />
        </div>
      </main>
    </>
  );
};

export default Profile;
