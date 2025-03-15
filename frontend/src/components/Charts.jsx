// import {
//     PieChart,
//     Pie,
//     Cell,
//     Tooltip,
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Legend,
//     BarChart,
//     Bar,
//   } from "recharts";
//   //import { Card, CardContent } from "@/components/ui/card";
//   //import Card from "./Card";

  
//   export default function Charts({ darkMode }) {
//     const emotionData = [
//       { name: "Positive", value: 45 },
//       { name: "Neutral", value: 30 },
//       { name: "Negative", value: 25 },
//     ];
  
//     const stressLevels = [
//       { day: "Mon", level: 50 },
//       { day: "Tue", level: 70 },
//       { day: "Wed", level: 80 },
//       { day: "Thu", level: 90 },
//       { day: "Fri", level: 85 },
//     ];
  
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Pie Chart */}
//         <Card>
//           <CardContent>
//             <h2 className="text-lg font-semibold mb-2">Emotional Distribution</h2>
//             <PieChart width={300} height={300}>
//               <Pie data={emotionData} cx="50%" cy="50%" outerRadius={100} dataKey="value">
//                 <Cell fill="#4CAF50" />
//                 <Cell fill="#FFC107" />
//                 <Cell fill="#F44336" />
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </CardContent>
//         </Card>
  
//         {/* Bar Chart */}
//         <Card>
//           <CardContent>
//             <h2 className="text-lg font-semibold mb-2">Stress Levels This Week</h2>
//             <BarChart width={350} height={250} data={stressLevels}>
//               <XAxis dataKey="day" />
//               <YAxis />
//               <CartesianGrid strokeDasharray="3 3" />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="level" fill="#FF5733" />
//             </BarChart>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }
  