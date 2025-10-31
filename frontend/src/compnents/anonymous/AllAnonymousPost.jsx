// import React, { useState, useEffect } from 'react';
// import Navbar from '../navbar/Navbar';
// import axios from 'axios';

// const AllAnonymousPost = () => {
//   const [anonymousPosts, setAnonymousPosts] = useState([]);

//   useEffect(() => {
//     const fetchAnonymousPosts = async () => {
//       try {
//         const response = await axios.get('process.env.BACKEND_URL/anonymousPosts');
//         setAnonymousPosts(response.data);
//       } catch (error) {
//         console.error('Error fetching anonymous posts:', error);
//       }
//     };
//     fetchAnonymousPosts();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto py-8 mt-24">
//         <h1 className="text-3xl font-bold mb-6 text-center">All Anonymous Posts</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {anonymousPosts.map(post => (
//             <div key={post._id} className="flex flex-col bg-gradient-to-br from-blue-gray-light to-blue-gray border border-gray-200 shadow-sm rounded-xl">
//   <div className="bg-gray-100 border-b border-gray-200 rounded-t-xl py-3 px-4 md:py-4 md:px-5">
//     <p className="mt-1 text-sm text-gray-600">
//       {post.featured && 'Featured'}
//     </p>
//   </div>
//   <div className="p-4 md:p-5">
//     <h3 className="text-lg font-bold text-gray-800">
//       {post.title}
//     </h3>
//     <p className="mt-2 text-gray-600">
//       {post.article}
//     </p>
//     <div className="flex items-center mt-4">
//       <span className="text-gray-500 mr-2">Tags:</span>
//       <div className="flex flex-wrap">
//         {post.tags.map((tag, index) => (
//           <span key={index} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>

//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllAnonymousPost;

import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";

// Prefer Create React App / Vite style env var name and provide a safe fallback.
// In CRA/Vite use: REACT_APP_BACKEND_URL (or VITE_BACKEND_URL for Vite).
const rawBackendUrl =
  process.env.REACT_APP_BACKEND_URL ||
  process.env.BACKEND_URL ||
  process.env.VITE_BACKEND_URL;
const backendUrl = rawBackendUrl
  ? String(rawBackendUrl).replace(/\/$/, "")
  : null;
const AllAnonymousPost = () => {
  const [anonymousPosts, setAnonymousPosts] = useState([]);

  useEffect(() => {
    const fetchAnonymousPosts = async () => {
      if (!backendUrl) {
        console.warn(
          "Backend URL is not set. Set REACT_APP_BACKEND_URL (or BACKEND_URL/VITE_BACKEND_URL) in your environment."
        );
        return;
      }

      try {
        const response = await axios.get(`${backendUrl}/anonymousPosts`);
        setAnonymousPosts(response.data || []);
      } catch (error) {
        console.error("Error fetching anonymous posts:", error);
      }
    };
    fetchAnonymousPosts();
  }, []);

  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <div className="min-h-screen bg-gradient-to-b from-[#F4F6FA] to-[#EAE6FF] dark:from-gray-900 dark:to-gray-800 font-['Rubik'] text-[#313e51] dark:text-white px-6 py-16 transition-colors duration-700">
        <h1 className="text-5xl font-extrabold mb-12 text-center">
          💬 All Anonymous Posts
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {anonymousPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#313e51] dark:text-white">
                {post.title}
              </h3>
              <p className="text-[#626c7f] dark:text-gray-300 mb-4 leading-relaxed">
                {post.article}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#f4f6fa] dark:bg-gray-700 text-[#a729f5] dark:text-[#d8b4fe] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllAnonymousPost;
