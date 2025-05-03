// import React from "react";
// import { motion } from "framer-motion";

// const Journal = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 50 }} 
//       animate={{ opacity: 1, y: 0 }} 
//       exit={{ opacity: 0, y: -50 }}
//       className="min-h-screen bg-gray-50 p-6"
//     >
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Journal</h1>
//         <motion.button 
//           whileHover={{ scale: 1.1 }}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
//         >
//           Add New Entry
//         </motion.button>
//       </div>

//       <div className="space-y-4">
//         {[1, 2, 3].map((entry) => (
//           <motion.div 
//             key={entry}
//             whileHover={{ scale: 1.05 }}
//             className="p-4 bg-white shadow rounded-lg"
//           >
//             <h2 className="text-xl font-semibold">Entry {entry}</h2>
//             <p className="text-gray-600">Short preview of the entry...</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Journal;
