// import React, { useState, useEffect, useRef } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import Loader from "react-js-loader";
// import Navbar from "../navbar/Navbar";
// import "./Therapist.css";

// const API_KEY = process.env.REACT_APP_API_KEY;
// const genAI = new GoogleGenerativeAI(API_KEY);

// const TypingAnimation = ({ color }) => (
//   <div className="item text-2xl">
//     <Loader type="ping-cube" bgColor={color} color={color} size={100} />
//   </div>
// );

// const Therapist = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatBoxRef = useRef(null);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const newMessage = { sender: "user", text: input };
//     setMessages([...messages, newMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
//       const prompt = `Analyse the user's input and give suggestions or talk with them and provide an answer in paragraphs with spaces between paragraphs and points. Respond as if you are talking to the user in the first person, not the third person:\n\nUser: ${input}\nTherapist:`;
//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       let aiMessage = await response.text();

//       // Replace **word** with <strong>word</strong>
//       aiMessage = aiMessage.replace(/\*\*(.*?)\*\*/g, "$1");

//       // Simulate typing delay
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       setMessages([...messages, newMessage, { sender: "ai", text: aiMessage }]);
//     } catch (error) {
//       console.error("Error generating response:", error);
//       setMessages([
//         ...messages,
//         newMessage,
//         {
//           sender: "ai",
//           text: "An error occurred while generating the response.",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (e) => setInput(e.target.value);

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") handleSend();
//   };

//   useEffect(() => {
//     // Scroll to the bottom of the chat box whenever messages change
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <>
//       <Navbar />
//       <div className="therapist-container">
//         <h1 className="heading">Your Personal AI Assistant</h1>
//         <div ref={chatBoxRef} className="chat-box">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`message ${
//                 msg.sender === "user" ? "user-message" : "ai-message"
//               }`}
//             >
//               {msg.text}
//             </div>
//           ))}
//           {loading && <TypingAnimation color="#007BFF" />}
//         </div>
//         <div className="input-container">
//           <input
//             type="text"
//             value={input}
//             onChange={handleInputChange}
//             onKeyPress={handleKeyPress}
//             placeholder="Type your message..."
//             className="input-field"
//           />
//           <button onClick={handleSend} className="send-button">
//             Send
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Therapist;

// import React, { useState, useEffect, useRef } from "react";
// import Loader from "react-js-loader";
// import Navbar from "../navbar/Navbar";
// import "./Therapist.css";

// const HF_API_KEY = process.env.REACT_APP_HF_API_KEY;
// const API_URL = "https://router.huggingface.co/v1/chat/completions";

// const TypingAnimation = ({ color }) => (
//   <div className="item text-2xl">
//     <Loader type="ping-cube" bgColor={color} color={color} size={100} />
//   </div>
// );

// const Therapist = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatBoxRef = useRef(null);

//   const queryMistral = async (chatMessages) => {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${HF_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model: "mistralai/Mistral-7B-Instruct-v0.2:featherless-ai",
//         messages: chatMessages,
//         max_tokens: 512,
//         temperature: 0.7,
//         top_p: 0.95,
//       }),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
//     }

//     return await response.json();
//   };

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const newMessage = { sender: "user", text: input };
//     setMessages([...messages, newMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       // Build chat messages in OpenAI format
//       const chatMessages = [
//         {
//           role: "system",
//           content:
//             "You are a helpful, empathetic AI therapist and personal assistant. Provide thoughtful suggestions and support. Respond in a conversational, first-person manner with clear paragraphs. Be warm, understanding, and constructive in your responses.",
//         },
//       ];

//       // Add conversation history
//       messages.forEach((msg) => {
//         chatMessages.push({
//           role: msg.sender === "user" ? "user" : "assistant",
//           content: msg.text,
//         });
//       });

//       // Add current user message
//       chatMessages.push({
//         role: "user",
//         content: input,
//       });

//       const result = await queryMistral(chatMessages);

//       // Extract the generated text from OpenAI-compatible response
//       let aiMessage = "";

//       if (result?.choices && result.choices.length > 0) {
//         aiMessage =
//           result.choices[0]?.message?.content ||
//           "Sorry, I could not generate a response.";
//       } else {
//         aiMessage = "Sorry, I could not generate a response.";
//       }

//       // Clean up the response
//       aiMessage = aiMessage.trim();

//       // Replace **word** with <strong>word</strong> for bold formatting
//       aiMessage = aiMessage.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

//       // Simulate typing delay
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       setMessages([...messages, newMessage, { sender: "ai", text: aiMessage }]);
//     } catch (error) {
//       console.error("Error generating response:", error);
//       let errorMessage = "An error occurred while generating the response.";

//       if (error.message.includes("503")) {
//         errorMessage =
//           "The model is currently loading. Please wait 20-30 seconds and try again.";
//       } else if (
//         error.message.includes("401") ||
//         error.message.includes("403")
//       ) {
//         errorMessage =
//           "Authentication error. Please check your Hugging Face API key.";
//       } else if (error.message.includes("429")) {
//         errorMessage =
//           "Rate limit exceeded. Please wait a moment before trying again.";
//       } else if (error.message.includes("400")) {
//         errorMessage = "Bad request. Please check your API configuration.";
//       }

//       setMessages([
//         ...messages,
//         newMessage,
//         {
//           sender: "ai",
//           text: errorMessage,
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (e) => setInput(e.target.value);

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") handleSend();
//   };

//   useEffect(() => {
//     // Scroll to the bottom of the chat box whenever messages change
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <>
//       <Navbar />
//       <div className="therapist-container">
//         <h1 className="heading">
//           Your AI Therapist — Always Here to Listen 💬
//         </h1>

//         <div ref={chatBoxRef} className="chat-box">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`message ${
//                 msg.sender === "user" ? "user-message" : "ai-message"
//               }`}
//               dangerouslySetInnerHTML={{ __html: msg.text }}
//             />
//           ))}
//           {loading && <TypingAnimation color="#007BFF" />}
//         </div>
//         <div className="input-container">
//           <input
//             type="text"
//             value={input}
//             onChange={handleInputChange}
//             onKeyPress={handleKeyPress}
//             placeholder="Type your message..."
//             className="input-field"
//           />
//           <button onClick={handleSend} className="send-button">
//             Send
//           </button>
//         </div>
//       </div>
//       <div className="powered-by">
//         🔒 Powered by <span>Mistral 7B</span> — your privacy-focused
//         mental-health AI 💙
//       </div>
//     </>
//   );
// };

// export default Therapist;
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../navbar/Navbar";
import Loader from "react-js-loader";
import "./Therapist.css";

const HF_API_KEY = process.env.REACT_APP_HF_API_KEY;
const API_URL = "https://router.huggingface.co/v1/chat/completions";

const TypingAnimation = () => (
  <div className="typing-dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
);

const Therapist = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const queryMistral = async (chatMessages) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/Mistral-7B-Instruct-v0.2:featherless-ai",
        messages: chatMessages,
        max_tokens: 512,
        temperature: 0.7,
      }),
    });
    if (!response.ok) throw new Error(await response.text());
    return await response.json();
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const chatMessages = [
        {
          role: "system",
          content:
            "You are a gentle, private, empathetic AI therapist powered by Mistral 7B. Always speak with care, warmth, and confidentiality.",
        },
        ...messages.map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        })),
        { role: "user", content: input },
      ];

      const result = await queryMistral(chatMessages);
      const aiMessage =
        result?.choices?.[0]?.message?.content?.trim() ||
        "I'm here for you — take a deep breath and share when you're ready 🌿";

      setMessages([...messages, newMessage, { sender: "ai", text: aiMessage }]);
    } catch (err) {
      console.error("AI error:", err);
      setMessages([
        ...messages,
        newMessage,
        { sender: "ai", text: "⚠️ Something went wrong. Try again soon." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => e.key === "Enter" && handleSend();

  useEffect(() => {
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [messages]);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-[#FFF5EC] to-[#FFE9E9] dark:from-gray-900 dark:to-gray-800 transition-colors duration-700 flex justify-center items-center pt-28 pb-20 px-4">
        <div className="therapist-container bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-rose-100 dark:border-gray-700 rounded-3xl shadow-2xl p-8 max-w-3xl w-full">
          <h1 className="heading text-3xl font-extrabold text-gray-800 dark:text-white text-center">
            💬 Your AI Therapist
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Confidential, compassionate, and powered by Mistral 7B 🧠
          </p>

          <div
            ref={chatBoxRef}
            className="chat-box bg-white/60 dark:bg-gray-800/50 rounded-xl p-4 overflow-y-auto shadow-inner"
            style={{ height: "55vh" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`message ${
                  msg.sender === "user" ? "user-message" : "ai-message"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <TypingAnimation />}
          </div>

          <div className="input-container mt-4 flex items-center bg-white/80 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2">
            <input
              type="text"
              className="flex-grow bg-transparent border-none outline-none text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Type your thoughts here... 💭"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSend}
              className="send-button bg-gradient-to-r from-rose-400 to-indigo-400 text-white font-semibold px-5 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Send ✨
            </button>
          </div>

          <p className="text-center mt-4 text-gray-500 dark:text-gray-400 text-sm">
            🔒 Powered by{" "}
            <span className="font-semibold text-rose-500">Mistral 7B</span> –
            Privacy-first, secure conversations
          </p>
        </div>
      </section>
    </>
  );
};

export default Therapist;
