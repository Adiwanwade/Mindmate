// import React from 'react'

// const Home1 = () => {
//   return (
//     <div className="relative isolate px-6 pt-14 lg:px-8 ">
//         <div
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div>
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">

//           </div>
//           <div className="text-center -mt-24">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               Welcome to Mindfulness.
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//             Welcome to our mental health app, where you can anonymously chat, track your mood, and receive personalized support through quizzes and an AI assistant. Prioritize your emotional well-being discreetly and effectively with our compassionate community.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
              
//               <a href="/aboutus" className="text-sm font-semibold leading-6 text-gray-900">
//                 About Us <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div>
//       </div>
//   )
// }

// export default Home1;
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, MessageCircle, BookOpen } from "lucide-react";

const Home1 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fcfaf6] text-[#3c3c3b] px-6 pt-24 sm:pt-32 lg:px-8">
      {/* Decorative blobs for depth */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 bg-[#e8f3ea] rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-10 w-96 h-96 bg-[#ffe9e4] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"
        aria-hidden="true"
      />

      {/* Hero Section */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#2b2b2b] mb-6 font-serif">
          Welcome to <span className="text-[#5b7159]">MindMate </span>
        </h1>
        <p className="text-lg sm:text-xl text-[#5c5c5c] leading-relaxed max-w-2xl mx-auto font-sans">
          Discover calm, connect with support, and take care of your emotional
          well-being in a safe and compassionate space. Explore
          self-assessments, personalized insights, and mindful reflections—all
          crafted for you.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="/get-help"
            className="rounded-full bg-[#e7f2ec] text-[#284d35] px-6 py-2.5 text-sm font-medium border border-[#c9e3d2] hover:bg-[#dcecdf] hover:scale-105 transition-all shadow-sm"
          >
            Get Expert Advice
          </a>
          <a
            href="/quiz"
            className="rounded-full bg-[#fff] text-[#3b2f2f] px-6 py-2.5 text-sm font-medium border border-[#e2ddd4] hover:bg-[#f4f0ea] hover:scale-105 transition-all shadow-sm"
          >
            Take a Quiz
          </a>
          <a
            href="/workbooks"
            className="rounded-full bg-[#fffaf7] text-[#3b2f2f] px-6 py-2.5 text-sm font-medium border border-[#e2ddd4] hover:bg-[#f7f3ef] hover:scale-105 transition-all shadow-sm"
          >
            Access Workbooks
          </a>
        </div>
      </motion.div>

      {/* Feature Section */}
      <div className="relative z-10 mx-auto max-w-6xl mt-24 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {[
          {
            icon: <Heart size={32} className="text-[#6fa66b]" />,
            title: "Track Your Mood",
            text: "Reflect on your feelings with daily mood logs to understand your emotional patterns and triggers.",
            color: "bg-[#f6fbf7]",
          },
          {
            icon: <MessageCircle size={32} className="text-[#d38b6f]" />,
            title: "Chat Anonymously",
            text: "Connect with supportive AI companions or mental health mentors in a safe, judgment-free space.",
            color: "bg-[#fff8f5]",
          },
          {
            icon: <BookOpen size={32} className="text-[#7182b1]" />,
            title: "Learn Mindfulness",
            text: "Explore guided practices, curated articles, and exercises designed to bring peace and balance.",
            color: "bg-[#f4f6fb]",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 150 }}
            className={`${feature.color} rounded-2xl p-8 shadow-sm border border-[#eaeaea] hover:shadow-md transition-all`}
          >
            <div className="flex flex-col items-start space-y-4">
              <div className="p-3 rounded-full bg-white shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#2b2b2b]">
                {feature.title}
              </h3>
              <p className="text-[#5c5c5c] leading-relaxed text-sm">
                {feature.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Section */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl mt-32 flex flex-col-reverse sm:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex-1 space-y-4 text-left">
          <h2 className="text-3xl font-bold text-[#3b2f2f] font-serif">
            Begin your journey to balance
          </h2>
          <p className="text-[#5c5c5c] leading-relaxed font-sans">
            Mindfulness is more than just an app — it’s a companion for your
            inner world. Whether you need quiet reflection, encouragement, or
            practical coping tools, we’re here to guide you.
          </p>

          <a
            href="/aboutus"
            className="inline-flex items-center gap-2 text-[#3b2f2f] font-semibold text-sm mt-4 hover:underline"
          >
            Learn more <ArrowRight size={16} />
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4105/4105441.png"
            alt="Mindfulness illustration"
            className="w-64 sm:w-80 drop-shadow-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home1;
