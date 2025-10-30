import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Mental Health Assessment",
    description:
      "Check your mental wellbeing with a quick and confidential self-assessment.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Write Personal Journals",
    description:
      "Record your thoughts and feelings daily in a calm, private space for reflection.",
    icon: LockClosedIcon,
  },
  {
    name: "1:1 Chat with AI Therapist",
    description:
      "Get 24/7 mental health support and guidance from an AI therapist.",
    icon: ArrowPathIcon,
  },
  {
    name: "Anonymous Chatting",
    description:
      "Connect with others anonymously, share experiences, and find comfort.",
    icon: FingerPrintIcon,
  },
];

const Home3 = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#FFF9F3] via-[#FFF6F8] to-[#FFF9F3]">
      {/* Decorative pastel background shape */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-72"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-12rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-200 to-indigo-200 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[70rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative py-24 px-6 sm:py-32 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight mb-6">
            🌿 Explore Your Path to Well-being
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover simple ways to nurture your mental health, build positive
            habits, and connect with supportive tools and people.
          </p>
          <div className="mt-6 w-24 h-1 mx-auto bg-pink-300 rounded-full"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white rounded-3xl border border-pink-100 shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-300 to-indigo-300 shadow-sm">
                <feature.icon
                  className="h-8 w-8 text-white"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.name}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home3;
