import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/explore?category=resources")
      .then((res) => {
        setResources(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching resources:", err);
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto px-6 py-10"
    >
      <h2 className="text-4xl font-extrabold text-center text-green-700 mb-8">
        📚 Resources
      </h2>

      {loading ? (
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.length > 0 ? (
            resources.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
                onClick={() => navigate(`/resources/${item.id}`)}
              >
                <img
                  src={item.image || "https://via.placeholder.com/150"}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No resources found.
            </p>
          )}
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate("/explore")}
          className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200"
        >
          🔙 Back to Explore
        </button>
      </div>
    </motion.div>
  );
}
