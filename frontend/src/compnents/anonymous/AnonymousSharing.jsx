import React from "react";
import Navbar from "../navbar/Navbar";

const AnonymousSharing = () => {
  const user = localStorage.getItem("tokenUser");

  return (
    <>
      <Navbar />

      <section
        className="relative flex flex-col items-center justify-center text-center font-['Rubik'] text-[#313e51] px-6 py-20 min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/12257635/pexels-photo-12257635.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "",
        }}
      >
        {/* Gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/60 dark:from-black/80 dark:via-black/70 dark:to-black/60 backdrop-blur-[2px]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#313e51] dark:text-white drop-shadow-lg">
            🕊️ Anonymous Sharing Portal
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#626c7f] dark:text-gray-300 italic leading-relaxed mb-12">
            Welcome to a safe space where you can express yourself freely,
            without fear or judgment. Share your thoughts, feelings, or stories
            — anonymously — and connect with others who understand and support
            your journey.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`/${user}/createanonymouspost`}
              className="bg-[#a729f5] hover:bg-[#9221db] text-white shadow-xl rounded-2xl px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              ✍️ Create a Post
            </a>
            <a
              href={`/${user}/allanonymousposts`}
              className="bg-[#a729f5] hover:bg-[#9221db] text-white shadow-xl rounded-2xl px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              📖 View All Posts
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnonymousSharing;
