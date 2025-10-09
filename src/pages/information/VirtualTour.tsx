import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Play } from "lucide-react";
import heroSchool from "@/assets/hero-school.jpg";
import schoolEntrance from "@/assets/school-entrance.jpg";
import library from "@/assets/library.jpg";
import cafeteria from "@/assets/cafeteria.jpg";
import sportsActivity from "@/assets/sports-activity.jpg";
import boardingFacility from "@/assets/boarding-facility.jpg";
import itProgram from "@/assets/it-program.jpg";

const VirtualTour = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const tourStops = [
    {
      title: "School Entrance & Reception",
      image: schoolEntrance,
      description: "Welcome to Greater Seeds Richmaris Academy. Our modern entrance and reception area greet visitors with a warm, professional atmosphere."
    },
    {
      title: "Library & Resource Center",
      image: library,
      description: "Our extensive library houses thousands of books, digital resources, and quiet study spaces for students to explore and learn."
    },
    {
      title: "Computer Laboratory",
      image: itProgram,
      description: "State-of-the-art computer labs equipped with the latest technology for coding, research, and digital literacy education."
    },
    {
      title: "Cafeteria & Dining Hall",
      image: cafeteria,
      description: "Spacious dining facilities serving nutritious, balanced meals prepared by our professional catering team."
    },
    {
      title: "Sports Facilities",
      image: sportsActivity,
      description: "Comprehensive sports facilities including football pitch, basketball courts, and athletics track for physical education and competitions."
    },
    {
      title: "Boarding Houses",
      image: boardingFacility,
      description: "Comfortable, supervised boarding accommodation with modern amenities for students who choose to board."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundSlider images={[heroSchool]} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Virtual Campus Tour</h1>
            <p className="text-xl text-muted-foreground">
              Explore our beautiful campus and world-class facilities from anywhere
            </p>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <img src={heroSchool} alt="Campus Overview" className="w-full rounded-lg shadow-lg mb-6" />
            <p className="text-lg text-foreground leading-relaxed">
              Take a virtual tour of Greater Seeds Richmaris Academy and discover our state-of-the-art facilities, 
              beautiful grounds, and learning spaces designed to inspire excellence. Our campus provides a safe, 
              modern, and conducive environment for holistic education.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="text-center space-y-4">
              <Camera className="h-16 w-16 text-primary mx-auto" />
              <h2 className="text-3xl font-bold text-primary">Interactive 360° Tour</h2>
              <p className="text-foreground max-w-2xl mx-auto">
                Experience our campus in full 360° virtual reality. Click the button below to start your immersive tour.
              </p>
              <Button className="bg-primary hover:bg-primary/90 gap-2 mt-4">
                <Play className="h-5 w-5" />
                Launch 360° Tour
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Tour Highlights</h2>
            <div className="grid gap-6">
              {tourStops.map((stop, index) => (
                <Card key={index} className="overflow-hidden bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-auto group">
                      <img 
                        src={stop.image} 
                        alt={stop.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="bg-primary rounded-full p-4">
                          <Camera className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Stop {index + 1}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-primary mb-3">{stop.title}</h3>
                      <p className="text-foreground leading-relaxed">{stop.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">Schedule an In-Person Visit</h2>
            <p className="text-foreground mb-6">
              While our virtual tour offers a great overview, nothing compares to experiencing our campus in person. 
              We welcome prospective parents and students to schedule a guided tour with our admissions team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                Book a Campus Visit
              </Button>
              <Button variant="outline">
                Contact Admissions
              </Button>
            </div>
          </Card>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Questions About Our Facilities?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-foreground">
                  <strong>Email:</strong> info@greaterseedsrichmarisacademy.org
                </div>
                <div className="text-foreground">
                  <strong>Phone:</strong> (+234) 808 939 4474
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default VirtualTour;