import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import heroSchool from "@/assets/hero-school.jpg";
import teacherWelcome from "@/assets/teacher-welcome.jpg";

const Leadership = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const programs = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Student Council",
      description: "Elected student representatives who voice student concerns, organize events, and contribute to school policies.",
      opportunities: ["Class Representatives", "School President & Vice President", "Committee Chairs", "Event Coordinators"]
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Prefect System",
      description: "Senior students who demonstrate exemplary conduct and leadership, serving as role models for younger students.",
      opportunities: ["Head Boy/Girl", "Senior Prefects", "House Captains", "Subject Prefects"]
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Club Leadership",
      description: "Opportunities to lead various academic, social, and cultural clubs, developing organizational and management skills.",
      opportunities: ["Debate Club Captain", "Drama Society President", "Science Club Leader", "Sports Team Captains"]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Leadership Training",
      description: "Structured programs that build leadership competencies, emotional intelligence, and decision-making skills.",
      opportunities: ["Workshops & Seminars", "Mentorship Programs", "Community Service Projects", "Leadership Camps"]
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
            <h1 className="text-5xl font-bold text-primary mb-4">Leadership Programs</h1>
            <p className="text-xl text-muted-foreground">
              Developing tomorrow's leaders through empowerment and responsibility
            </p>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <img src={teacherWelcome} alt="Leadership" className="w-full rounded-lg shadow-lg mb-6" />
            <p className="text-lg text-foreground leading-relaxed">
              At Greater Seeds Richmaris Academy, we believe every student has leadership potential. Our comprehensive 
              leadership programs provide students with opportunities to develop confidence, communication skills, 
              problem-solving abilities, and a sense of responsibility. Through various roles and structured training, 
              we nurture the leaders of tomorrow.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{program.title}</h3>
                <p className="text-foreground mb-4">{program.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Opportunities:</h4>
                  <ul className="space-y-1">
                    {program.opportunities.map((opportunity, oIndex) => (
                      <li key={oIndex} className="flex items-start gap-2 text-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">Leadership Skills We Develop</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Core Competencies</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Communication & Public Speaking</li>
                  <li>• Decision Making</li>
                  <li>• Team Building</li>
                  <li>• Conflict Resolution</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Personal Development</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Self-Confidence</li>
                  <li>• Emotional Intelligence</li>
                  <li>• Time Management</li>
                  <li>• Accountability</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Social Responsibility</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Community Service</li>
                  <li>• Ethical Decision Making</li>
                  <li>• Cultural Awareness</li>
                  <li>• Environmental Stewardship</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Leadership;