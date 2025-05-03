// import { useState } from "react";
// //import { Card, CardContent } from "@/components/ui/card";
// //import { Button } from "@/components/ui/button";
// import Button from "./Button";
// import Card from "./Card";


// export default function Preferences() {
//   const [location, setLocation] = useState("");
//   const [alertEnabled, setAlertEnabled] = useState(false);

//   return (
//     <Card className="mt-6">
//       <CardContent>
//         <h2 className="text-xl font-semibold mb-3">User Preferences</h2>
//         {/* Location Selection */}
//         <div className="mb-3">
//           <label className="block text-gray-600">Select Location:</label>
//           <select
//             className="w-full border p-2"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           >
//             <option value="">Select...</option>
//             <option value="US">United States</option>
//             <option value="UK">United Kingdom</option>
//             <option value="IN">India</option>
//           </select>
//         </div>

//         {/* Alerts Toggle */}
//         <div className="mb-3">
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               checked={alertEnabled}
//               onChange={() => setAlertEnabled(!alertEnabled)}
//               className="mr-2"
//             />
//             Enable Stress Alerts
//           </label>
//         </div>

//         <Button onClick={() => alert("Preferences Saved!")}>Save Preferences</Button>
//       </CardContent>
//     </Card>
//   );
// }
