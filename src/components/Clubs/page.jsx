import { useState, useEffect } from "react"
import { Link } from "react-router"
import { ChevronDown, ChevronUp, Calendar, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data (in a real app, this would be fetched from an API)
const clubData = {
  id: 1,
  name: "Eloquence Shivanshu",
  banner: "/placeholder.svg?height=300&width=1200&text=Eloquence+Consortium+Banner",
  description:
    "The Eloquence Consortium is dedicated to developing personality and communication skills among university students. We provide a platform for students to enhance their public speaking, debate, and interpersonal skills through workshops, competitions, and regular practice sessions.",
  president: {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    image: "/placeholder.svg?height=100&width=100&text=JD",
  },
  established: "2020-09-01",
  category: "Cultural",
  meetingSchedule: {
    day: "Every Tuesday",
    time: "6:00 PM - 8:00 PM",
    location: "Student Center, Room 101",
  },
  members: [
    { id: 1, name: "Shivanshu Yadav", image: "/placeholder.svg?height=50&width=50&text=SY" },
    { id: 2, name: "John Smith", image: "/placeholder.svg?height=50&width=50&text=JS" },
    { id: 3, name: "Emily Brown", image: "/placeholder.svg?height=50&width=50&text=EB" },
    // Add more members as needed
  ],
  upcomingEvents: [
    {
      id: 1,
      name: "Public Speaking Workshop",
      date: "2023-07-15",
      time: "3:00 PM",
      description: "Learn the art of captivating your audience",
    },
    {
      id: 2,
      name: "Debate Competition",
      date: "2023-07-22",
      time: "2:00 PM",
      description: "Showcase your argumentation skills",
    },
    {
      id: 3,
      name: "Communication Skills Seminar",
      date: "2023-07-29",
      time: "4:00 PM",
      description: "Enhance your interpersonal communication",
    },
  ],
  gallery: [
    "/placeholder.svg?height=200&width=300&text=Event+1",
    "/placeholder.svg?height=200&width=300&text=Event+2",
    "/placeholder.svg?height=200&width=300&text=Event+3",
    "/placeholder.svg?height=200&width=300&text=Event+4",
    "/placeholder.svg?height=200&width=300&text=Event+5",
    "/placeholder.svg?height=200&width=300&text=Event+6",
  ],
  announcements: [
    {
      id: 1,
      title: "New Executive Board Elected",
      date: "2023-06-30",
      content: "Congratulations to our new executive board members!",
    },
    {
      id: 2,
      title: "Summer Break Schedule",
      date: "2023-06-25",
      content: "Check out our summer break meeting schedule.",
    },
    {
      id: 3,
      title: "Upcoming Workshop Series",
      date: "2023-06-20",
      content: "Don't miss our exciting new workshop series starting next month.",
    },
  ],
  socialMedia: {
    facebook: "https://facebook.com/eloquenceconsortium",
    twitter: "https://twitter.com/eloquenceconsortium",
    instagram: "https://instagram.com/eloquenceconsortium",
  },
}

export default function ClubDetailsPage() {
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div
      className={`min-h-screen bg-background text-foreground transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Breadcrumb */}
      <div className="bg-card text-card-foreground py-2 px-4">
        <div className="container mx-auto">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/clubs" className="hover:underline">
            Clubs
          </Link>{" "}
          &gt; {clubData.name}
        </div>
      </div>

      {/* Header */}
      <header className="relative h-64 md:h-80 lg:h-96">
        <img
          src={clubData.banner || "/placeholder.svg"}
          alt={`${clubData.name} banner`}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">{clubData.name}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <Card>
            <CardContent className="p-6">
              <p className={`text-muted-foreground ${showFullDescription ? "" : "line-clamp-3"}`}>
                {clubData.description}
              </p>
              {clubData.description.length > 200 && (
                <button
                  variant="link"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="mt-2 p-0"
                >
                  {showFullDescription ? (
                    <>
                      Read Less <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </button>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Key Information Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Club President</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <img
                    src={clubData.president.image || "/placeholder.svg"}
                    alt={clubData.president.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{clubData.president.name}</p>
                    <p className="text-sm text-muted-foreground">{clubData.president.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Established</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{new Date(clubData.established).toLocaleDateString()}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Category</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{clubData.category}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Meeting Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" /> {clubData.meetingSchedule.day}
                </p>
                <p className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" /> {clubData.meetingSchedule.time}
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" /> {clubData.meetingSchedule.location}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Membership Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Membership</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90">Join Club</button>
                <p className="text-muted-foreground">Current Members: {clubData.members.length}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {clubData.members.map((member) => (
                  <div key={member.id} className="flex items-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-2"
                    />
                    <span className="text-sm">{member.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming Events Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubData.upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="flex items-center mb-2">
                    <Calendar className="mr-2 h-4 w-4" /> {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4" /> {event.time}
                  </p>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <button variant="outline">RSVP</button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clubData.gallery.map((image, index) => (
              <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Announcements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
          <Card>
            <CardContent className="p-6">
              {clubData.announcements.map((announcement) => (
                <div key={announcement.id} className="mb-4 last:mb-0">
                  <h3 className="text-lg font-semibold">{announcement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {new Date(announcement.date).toLocaleDateString()}
                  </p>
                  <p>{announcement.content}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p>Email: contact@eloquenceconsortium.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="flex space-x-4">
              <a
                href={clubData.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Facebook />
              </a>
              <a
                href={clubData.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Twitter />
              </a>
              <a
                href={clubData.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            © 2023 Eloquence Consortium. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

