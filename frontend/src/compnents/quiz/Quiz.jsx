import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Loader from "react-js-loader";
import Navbar from "../navbar/Navbar";

const API_KEY = process.env.REACT_APP_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const questions = [
  "How often have you felt down, depressed, or hopeless in the past two weeks?",
  "How often do you feel little interest or pleasure in doing things?",
  "How often do you feel nervous, anxious, or on edge?",
  "How often do you have trouble relaxing?",
  "How often do you feel so restless that it is hard to sit still?",
  "How often do you feel fatigued or have little energy?",
  "How often do you feel bad about yourself, or that you are a failure or have let yourself or your family down?",
  "How often do you have trouble concentrating on things, such as reading the newspaper or watching television?",
  "How often do you feel afraid, as if something awful might happen?",
  "How often do you have trouble falling or staying asleep, or sleeping too much?",
  "How often do you feel easily annoyed or irritable?",
  "How often do you experience physical symptoms such as headaches, stomachaches, or muscle pain?",
  "How often do you feel disconnected or detached from reality or your surroundings?",
  "How often do you find it difficult to control your worry?",
  "How often do you avoid social situations due to fear of being judged or embarrassed?",
];

const options = [
  "Not at all",
  "Several days",
  "More than half the days",
  "Nearly every day",
];

const Quiz = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleOptionHover = (index) => {
    setHoveredOption(index);
  };

  const handleOptionLeave = () => {
    setHoveredOption(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const prompt = `Analyze the following mental health quiz answers and generate a short summary with bullet points, headings, and clear spacing between sections:\n\n${questions
        .map((q, i) => `${i + 1}. ${q} ${answers[i]}`)
        .join("\n")}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = await response.text();
      text = text.replace(/\*\*(.*?)\*\*/g, "$1");
      setResult(text);
    } catch (error) {
      console.error("Error analyzing answers:", error);
      setResult("An error occurred while analyzing the answers.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <section className="min-h-screen bg-gradient-to-b from-[#F4F6FA] to-[#EAE6FF] dark:from-gray-900 dark:to-gray-800 transition-colors duration-700 font-['Rubik'] text-[#313e51] dark:text-white flex justify-center px-4 py-10">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 border border-[#e5e7eb] dark:border-gray-700">
          <h1 className="text-4xl font-extrabold mb-10 text-center text-[#313e51] dark:text-white">
            🧠 Mental Health Quiz
          </h1>

          <div className="space-y-10">
            {questions.map((question, index) => (
              <div
                key={index}
                className="text-left border-b border-gray-200 dark:border-gray-700 pb-6"
              >
                <p className="text-lg font-medium mb-4">{`${
                  index + 1
                }. ${question}`}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className={`cursor-pointer rounded-xl border transition-all duration-300 p-3 flex items-center ${
                        answers[index] === option
                          ? "bg-[#a729f5] text-white border-[#a729f5]"
                          : "bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-[#f3e8ff] dark:hover:bg-gray-700"
                      }`}
                      onMouseEnter={() => handleOptionHover(index)}
                      onMouseLeave={handleOptionLeave}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={answers[index] === option}
                        onChange={() => handleChange(index, option)}
                        className="hidden"
                      />
                      <span className="text-base font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={handleSubmit}
              className="bg-[#a729f5] hover:bg-[#9221db] text-white py-3 px-10 rounded-full text-lg font-medium shadow-md transition-all duration-300"
            >
              Submit
            </button>
          </div>

          {loading && (
            <div className="flex justify-center mt-8">
              <Loader
                type="spinner-cub"
                bgColor={"#a729f5"}
                color={"#FFFFFF"}
                size={80}
              />
            </div>
          )}

          {!loading && result && (
            <div className="mt-10 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-inner border border-gray-200 dark:border-gray-700 text-left">
              <h2 className="text-2xl font-semibold mb-4 text-[#a729f5]">
                Analysis Result
              </h2>
              <p className="whitespace-pre-wrap leading-relaxed text-gray-700 dark:text-gray-200">
                {result}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Quiz;
