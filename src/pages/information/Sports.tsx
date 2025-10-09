import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import heroSchool from "@/assets/hero-school.jpg";
import sportsActivity from "@/assets/sports-activity.jpg";
import sportsBasketball from "@/assets/sports-basketball.jpg";
import sportsAthletics from "@/assets/sports-athletics.jpg";

const Sports = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sportsPrograms = [
    {
      category: "Team Sports",
      sports: ["Football (Soccer)", "Basketball", "Volleyball", "Handball", "Cricket"]
    },
    {
      category: "Individual Sports",
      sports: ["Athletics (Track & Field)", "Swimming", "Tennis", "Badminton", "Table Tennis"]
    },
    {
      category: "Traditional & Martial Arts",
      sports: ["Taekwondo", "Judo", "Chess", "Scrabble"]
    }
  ];

  const achievements = [
    "Inter-School Sports Championship Winners 2024",
    "Regional Athletics Champions",
    "State Football Tournament Runners-Up",
    "National Mathematics & Chess Competition Bronze Medal",
    "Multiple Individual Gold Medals in Track Events"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundSlider images={[heroSchool]} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Sports & Athletics</h1>
            <p className="text-xl text-muted-foreground">
              Building character, teamwork, and physical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="overflow-hidden">
              <img src={sportsActivity} alt="Sports Activity" className="w-full h-48 object-cover" />
            </Card>
            <Card className="overflow-hidden">
              <img src={sportsBasketball} alt="Basketball" className="w-full h-48 object-cover" />
            </Card>
            <Card className="overflow-hidden">
              <img src={sportsAthletics} alt="Athletics" className="w-full h-48 object-cover" />
            </Card>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <p className="text-lg text-foreground leading-relaxed">
              Sports and physical education are integral to our curriculum. We believe in developing the whole student - 
              mind, body, and character. Our extensive sports program promotes fitness, teamwork, discipline, and 
              sportsmanship while discovering and nurturing athletic talents.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {sportsPrograms.map((program, index) => (
              <Card key={index} className="p-6 bg-card/95 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-primary mb-4">{program.category}</h3>
                <ul className="space-y-2">
                  {program.sports.map((sport, sIndex) => (
                    <li key={sIndex} className="flex items-start gap-2 text-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{sport}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Facilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Outdoor Facilities</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Full-size Football Pitch</li>
                  <li>• Basketball Courts</li>
                  <li>• 400m Running Track</li>
                  <li>• Tennis Courts</li>
                  <li>• Volleyball Court</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Indoor Facilities</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Multi-purpose Sports Hall</li>
                  <li>• Table Tennis Area</li>
                  <li>• Fitness Center</li>
                  <li>• Changing Rooms & Lockers</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <Trophy className="h-12 w-12 text-accent flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Recent Achievements</h2>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-primary mb-4">Coaching Staff</h2>
            <p className="text-foreground leading-relaxed">
              Our qualified and experienced coaches are dedicated to helping every student reach their athletic potential. 
              They provide professional training, strategic guidance, and mentorship while maintaining a focus on character 
              development and sportsmanship.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Sports;