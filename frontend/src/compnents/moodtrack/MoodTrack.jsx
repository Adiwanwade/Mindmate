import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import Navbar from "../navbar/Navbar";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MoodTrack = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moodData, setMoodData] = useState([]);
  const username = localStorage.getItem("tokenUser");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/moods/${username}`)
      .then((response) => setMoodData(response.data))
      .catch((error) => console.error("Error fetching mood data:", error));
  }, [username]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setIsModalOpen(true);
  };

  const handleMoodSelect = (selectedMood) => {
    axios
      .post(`http://localhost:8000/api/moods/${username}`, {
        date: selectedDate,
        mood: selectedMood,
      })
      .then((response) => {
        setMoodData((prevData) => [...prevData, response.data]);
        setIsModalOpen(false);
      })
      .catch((error) => console.error("Error saving mood:", error));
  };

  const moodLabels = ["😄", "😊", "😐", "😔", "😢"];
  const moodCounts = moodLabels.map(
    (label) => moodData.filter((entry) => entry.mood === label).length
  );

  const data = {
    labels: moodLabels,
    datasets: [
      {
        label: "Mood Frequency",
        data: moodCounts,
        backgroundColor: [
          "#60A5FA",
          "#34D399",
          "#FBBF24",
          "#FB923C",
          "#EF4444",
        ],
        borderRadius: 8,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-[#FFF5EC] to-[#FFE9E9] dark:from-gray-900 dark:to-gray-800 transition-colors duration-700 flex justify-center items-center px-4 pt-28 pb-20">
        <div className="max-w-4xl w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-rose-100 dark:border-gray-700">
          <h1 className="text-center text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
            🌤️ Mood Tracker
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Log your emotions daily and visualize your mental health trends.
          </p>

          <div className="text-center mb-8">
            <input
              type="date"
              onChange={handleDateChange}
              className="bg-white/90 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-rose-400 transition-all"
            />
          </div>

          <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog as="div" onClose={() => setIsModalOpen(false)}>
              <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
                <Dialog.Panel className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-80">
                  <Dialog.Title className="text-lg font-semibold text-center text-gray-800 dark:text-white mb-4">
                    How are you feeling today?
                  </Dialog.Title>
                  <div className="flex justify-around text-4xl">
                    {moodLabels.map((emoji, i) => (
                      <button
                        key={i}
                        onClick={() => handleMoodSelect(emoji)}
                        className="transition-transform hover:scale-125"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          </Transition>

          <div className="mt-10 bg-white/80 dark:bg-gray-800/60 p-6 rounded-2xl shadow-inner border border-gray-200 dark:border-gray-700">
            <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Mood Frequency 📊
            </h2>
            <div className="h-96">
              <Bar
                data={data}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: {
                      ticks: { color: "#9CA3AF" },
                      grid: { color: "rgba(255,255,255,0.05)" },
                    },
                    y: {
                      ticks: { color: "#9CA3AF" },
                      grid: { color: "rgba(255,255,255,0.05)" },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoodTrack;
