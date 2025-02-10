// import React from "react";
// import { motion } from "framer-motion";

// const clubs = [
//   { name: "Tech Club", description: "Innovate and create with technology." },
//   { name: "Music Club", description: "Join us in exploring the world of music." },
//   { name: "Art Club", description: "Express yourself through creativity." },
//   { name: "Art Club", description: "Express yourself through creativity." },
//   { name: "Art Club", description: "Express yourself through creativity." },
//   { name: "Art Club", description: "Express yourself through creativity." },
//   { name: "Art Club", description: "Express yourself through creativity." },
// ];

// const events = [
//   { name: "Hackathon 2025", date: "March 15, 2025", description: "Compete in a coding marathon." },
//   { name: "Music Fest", date: "April 10, 2025", description: "Enjoy live performances and bands." },
// ];

// const Dashboard = () => {
//   return (
//     <div className="min-w-screen bg-gradient-to-br from-blue-900 via-gray-800 to-blue-700 text-white py-8 px-48">
//       <h1 className="text-4xl font-bold text-center mb-8">UniClub Dashboard</h1>
      
//       {/* Clubs Section */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Explore Clubs</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {clubs.map((club, index) => (
//             <motion.div
//               key={index}
//               className="p-6 bg-white text-gray-900 rounded-lg shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-xl font-bold mb-2">{club.name}</h3>
//               <p>{club.description}</p>
//             </motion.div>
//           ))}
//         </div>
//         <button className="mt-4 bg-white text-blue-900 font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200">
//           View All
//         </button>
//       </div>

//       {/* Events Section */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {events.map((event, index) => (
//             <motion.div
//               key={index}
//               className="p-6 bg-white text-gray-900 rounded-lg shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-xl font-bold mb-2">{event.name}</h3>
//               <p className="text-sm mb-1">{event.date}</p>
//               <p>{event.description}</p>
//             </motion.div>
//           ))}
//         </div>
//         <button className="mt-4 bg-white text-blue-900 font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200">
//           View All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState } from "react"
import { motion } from "framer-motion"
import ClubCards from "./ClubCards"
import EventCards from "./EventCards"
import SearchBar from "./SearchBar"
import Filters from "./Filters"
import QuickActions from "./QuickActions"

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")
  const [showAllClubs, setShowAllClubs] = useState(false)
  const [showAllEvents, setShowAllEvents] = useState(false)

  return (
    <div className="min-w-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white p-8">
      <main className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <QuickActions />
        </div>
        <div className="mb-8">
          <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </div>
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold mb-4">Featured Clubs</h2>
          <ClubCards
            searchTerm={searchTerm}
            activeFilter={activeFilter}
            showAll={showAllClubs}
            setShowAll={setShowAllClubs}
          />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold my-8">Upcoming Events</h2>
          <EventCards
            searchTerm={searchTerm}
            activeFilter={activeFilter}
            showAll={showAllEvents}
            setShowAll={setShowAllEvents}
          />
        </motion.section>
      </main>
    </div>
  )
}

