import { motion } from "framer-motion"

const clubs = [
  {
    id: 1,
    name: "Google Developer Student Club",
    description: "Learn new technologies and collaborate on projects with peers and mentors",
    
    image: "/GDG.png?height=100&width=100",
    //give code to break line after description
    
    category: "Arts",
  },
  {
    id: 2,
    name: "Debate Society",
    description: "Enhance your public speaking and critical thinking skills",
    image: "/placeholder.svg?height=100&width=100",
    category: "Academic",
  },
  {
    id: 3,
    name: "Robotics Club",
    description: "Build and program robots for competitions and fun",
    image: "/placeholder.svg?height=100&width=100",
    category: "Technology",
  },
  {
    id: 4,
    name: "Environmental Club",
    description: "Promote sustainability and environmental awareness",
    image: "/placeholder.svg?height=100&width=100",
    category: "Social",
  },
  {
    id: 5,
    name: "Chess Club",
    description: "Improve your strategic thinking and compete in tournaments",
    image: "/placeholder.svg?height=100&width=100",
    category: "Games",
  },
  {
    id: 6,
    name: "Dance Troupe",
    description: "Express yourself through various dance styles and performances",
    image: "/placeholder.svg?height=100&width=100",
    category: "Arts",
  },
  {
    id: 7,
    name: "Coding Club",
    description: "Learn programming languages and work on exciting projects",
    image: "/placeholder.svg?height=100&width=100",
    category: "Technology",
  },
  {
    id: 8,
    name: "Book Club",
    description: "Discuss literature and share your love for reading",
    image: "/placeholder.svg?height=100&width=100",
    category: "Academic",
  },
]

export default function ClubCards({ searchTerm, activeFilter, showAll, setShowAll }) {
  const filteredClubs = clubs.filter(
    (club) =>
      (club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (activeFilter === "All" || club.category === activeFilter),
  )

  const displayedClubs = showAll ? filteredClubs : filteredClubs.slice(0, 6)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedClubs.map((club) => (
        <motion.div
          key={club.id}
          className="bg-gradient-to-br from-blue-800 to-fuchsia-950 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center mb-4">
            <img
              src={club.image || "/placeholder.svg"}
              alt={club.name}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <h3 className="text-xl font-semibold">{club.name}</h3>
          </div>
          <p className="text-gray-300 mb-4">{club.description}</p>
          <span className="inline-block bg-pink-600 text-white text-xs px-2 py-1 rounded">{club.category}</span>
        </motion.div>
      ))}
      {filteredClubs.length > 6 && (
        <motion.button
          className="col-span-full mt-6 bg-fuchsia-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Clubs"}
        </motion.button>
      )}
    </div>
  )
}

