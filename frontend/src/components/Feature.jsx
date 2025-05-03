<<<<<<< HEAD
import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaRobot, FaSearch, FaComments, FaCalendarAlt } from "react-icons/fa";

const featuresData = [
  { title: "AI Mental Health Assessment", description: "Uses AI-powered deep learning to analyze user inputs and detect early signs of mental health conditions.", icon: <FaBrain />, color: "bg-blue-400" },
  { title: "Predictive Risk Forecasting", description: "Predicts future emotional states and mental health risks based on past user data and trends.", icon: <FaChartLine />, color: "bg-pink-400" },
  { title: "Real-Time Sentiment Tracking", description: "Monitors emotional changes over time with live mood tracking and graphical analysis.", icon: <FaComments />, color: "bg-orange-400" },
  { title: "AI Chatbot Support", description: "Interactive AI chatbot provides emotional support, stress management tips, and mental well-being guidance.", icon: <FaRobot />, color: "bg-gray-700" },
  { title: "Explainable AI for Transparency", description: "Shows key words and patterns influencing AI predictions, ensuring transparency in mental health assessments.", icon: <FaSearch />, color: "bg-purple-400" },
  { title: "Personalized Daily Insights", description: "Receive daily mental health insights and mood-boosting tips personalized for you.", icon: <FaCalendarAlt />, color: "bg-teal-400" },
=======
import React from "react";
import { motion } from "framer-motion";

const featuresData = [
  {
    title: "🧠 AI Mental Health Assessment",
    description: "Uses AI-powered deep learning to analyze user inputs and detect early signs of mental health conditions.",
  },
  {
    title: "🔮 Predictive Risk Forecasting",
    description: "Predicts future emotional states and mental health risks based on past user data and trends.",
  },
  {
    title: "📊 Real-Time Sentiment Tracking",
    description: "Monitors emotional changes over time with live mood tracking and graphical analysis.",
  },
  {
    title: "🤖 AI Chatbot Support",
    description: "Interactive AI chatbot provides emotional support, stress management tips, and mental well-being guidance.",
  },
  {
    title: "🔍 Explainable AI for Transparency",
    description: "Shows key words and patterns influencing AI predictions, ensuring transparency in mental health assessments.",
  },
];

// Define hover styles
const hoverEffects = [
  "hover:bg-blue-800 hover:shadow-blue-500",
  "hover:bg-indigo-800 hover:shadow-indigo-500",
  "hover:bg-purple-800 hover:shadow-purple-500",
  "hover:bg-teal-800 hover:shadow-teal-500",
  "hover:bg-cyan-800 hover:shadow-cyan-500",
>>>>>>> 233874662a4fd5fdf88e451938f8647a5dacdfd0
];

const Feature = () => {
  return (
<<<<<<< HEAD
    <div className="relative bg-gradient-to-b from-[#297194] via-[#D1E1F7] to-[#E7F2F7] py-20 -mt-20">
      {/* Wave Effect at the Top */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            fill="white"
            fillOpacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,197.3C672,192,768,160,864,165.3C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
          ></path>
        </svg>
      </div>
       {/* Moving Stars & Starlink Effect */}
<div className="absolute inset-0 overflow-hidden">
  {/* Small Floating Stars */}
  {[...Array(40)].map((_, i) => (
    <motion.div
      key={`star-${i}`}
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
      }}
      animate={{
        y: ['0vh', '100vh'],
        opacity: [1, 0],
      }}
      transition={{
        duration: Math.random() * 5 + 5,
        repeat: Infinity,
        ease: 'linear',
        delay: Math.random() * 5,
      }}
    />
  ))}

  {/* Starlink Effect (Fast-moving streaks) */}
  {[...Array(10)].map((_, i) => (
    <motion.div
      key={`starlink-${i}`}
      className="absolute w-0.5 h-6 bg-white/80 rounded-full shadow-lg"
      style={{
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        rotate: `${Math.random() * 360}deg`,
      }}
      animate={{
        y: ['-10vh', '110vh'],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 3, // Faster movement
        repeat: Infinity,
        ease: 'linear',
        delay: Math.random() * 5,
      }}
    />
  ))}
</div>

      {/* Section Title */}
      <div className="text-center text-white relative z-10 mt-30">
        <h2 className="text-4xl font-bold uppercase tracking-wide">Our Features</h2>
        <p className="mt-4 text-gray-200 text-lg">Discover AI-powered mental health monitoring and insights.</p>
        <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto mt-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className={`relative h-64 rounded-lg overflow-hidden shadow-lg ${feature.color}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Semi-Transparent Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Icon and Text */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2 text-gray-100">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
=======
    <motion.div
      className="relative flex flex-col justify-center text-center px-6 py-12 min-h-screen w-full"
      style={{
        backgroundImage: 'url("1.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", 
        width: "100%",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold  mb-2 text-[#EBEBDF] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
         Features
      </motion.h1>
      <motion.p
        className="text-md mb-8 text-blue-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        AI-driven insights to support and enhance mental well-being.
      </motion.p>

      {/* Feature Cards Container */}
      <motion.div
        className="flex flex-col gap-4 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.5 },
          },
        }}
      >
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex items-start bg-[#24325B] backdrop-blur-lg p-6 rounded-lg shadow-lg border-l-4 border-blue-300 transition-all duration-300 
            ${hoverEffects[index % hoverEffects.length]} hover:scale-105 hover:border-opacity-75 hover:border-2`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Feature Title & Description */}
            <div className="ml-3 text-left">
              <h2 className="text-md font-semibold text-blue-300">{feature.title}</h2>
              <p className="text-gray-200 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Feature;
>>>>>>> 233874662a4fd5fdf88e451938f8647a5dacdfd0
