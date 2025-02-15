import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  // Dummy user data (replace this with real user data later)
  const user = {
    name: "Anshika Srivastava",
    email: "anshika@gmail.com",
    profileImage: "/GDG.png", // Image stored in the public folder
  };

  // Logout Function
  const handleLogout = () => {
    // (Optional) Clear user session (e.g., remove token)
    localStorage.removeItem("token"); // If using authentication

    // Navigate to home page
    navigate("/");
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Profile Image */}
      <button className="focus:outline-none">
        <img
          src={user.profileImage}
          alt="User Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg">
          <div className="px-4 py-3 border-b">
            <p className="font-bold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
              onClick={handleLogout} // Call logout function on click
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}