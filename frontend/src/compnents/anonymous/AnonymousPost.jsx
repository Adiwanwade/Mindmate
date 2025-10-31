import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";

const AnonymousPost = () => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [tags, setTags] = useState("");
  const user = localStorage.getItem("tokenUser");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      article,
      tags: tags.split(",").map((tag) => tag.trim()),
    };
    const rawBackendUrl =
  process.env.REACT_APP_BACKEND_URL ||
  process.env.BACKEND_URL ||
  process.env.VITE_BACKEND_URL;
const backendUrl = rawBackendUrl
  ? String(rawBackendUrl).replace(/\/$/, "")
  : null;

    try {
      const response = await fetch(
        `${backendUrl}/createAnonymousPosts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user}`,
          },
          body: JSON.stringify(postData),
        }
      );

      if (response.ok) {
        const newPost = await response.json();
        console.log("Post created:", newPost);
        // Clear the form
        setTitle("");
        setArticle("");
        setTags("");
        navigate(`/${user}/anonymoussharing`);
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <div className="min-h-screen bg-gradient-to-b from-[#F4F6FA] to-[#EAE6FF] dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-start py-16 font-['Rubik'] text-[#313e51] dark:text-white transition-colors duration-700">
        <h1 className="text-4xl font-extrabold mb-10 text-center">
          📝 New Anonymous Post
        </h1>

        <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 space-y-6 transition-all duration-500">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-3 focus:ring-2 focus:ring-[#a729f5] outline-none transition-all"
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-3 h-40 resize-none focus:ring-2 focus:ring-[#a729f5] outline-none transition-all"
              placeholder="Describe your thoughts..."
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            />

            <input
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-3 focus:ring-2 focus:ring-[#a729f5] outline-none transition-all"
              placeholder="Tags (comma separated)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />

            <div className="flex justify-between">
              <button
                type="button"
                className="px-6 py-2 rounded-full border border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                onClick={() => {
                  setTitle("");
                  setArticle("");
                  setTags("");
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-2 rounded-full bg-[#a729f5] hover:bg-[#9221db] text-white font-semibold shadow-md transition-all"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AnonymousPost;
