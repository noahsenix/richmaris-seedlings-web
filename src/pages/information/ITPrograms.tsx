import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Laptop, Code, Cpu, Globe } from "lucide-react";
import heroSchool from "@/assets/hero-school.jpg";
import itProgram from "@/assets/it-program.jpg";

const ITPrograms = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const programs = [
    {
      icon: <Laptop className="h-12 w-12 text-primary" />,
      title: "Computer Literacy",
      description: "Foundation courses in computer basics, typing, internet safety, and digital citizenship for all year groups.",
      features: ["Microsoft Office Suite", "Internet Research Skills", "Digital Safety", "Email & Communication"]
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Coding & Programming",
      description: "Progressive coding education from visual programming to advanced languages.",
      features: ["Scratch Programming", "Python", "Web Development (HTML/CSS/JavaScript)", "Mobile App Development"]
    },
    {
      icon: <Cpu className="h-12 w-12 text-primary" />,
      title: "Robotics & AI",
      description: "Hands-on experience with robotics, artificial intelligence, and emerging technologies.",
      features: ["LEGO Robotics", "Arduino Projects", "AI & Machine Learning Basics", "3D Printing"]
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Digital Design & Media",
      description: "Creative technology courses in graphic design, video editing, and digital content creation.",
      features: ["Graphic Design", "Video Editing", "Animation", "Social Media Management"]
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
            <h1 className="text-5xl font-bold text-primary mb-4">IT Programs</h1>
            <p className="text-xl text-muted-foreground">
              Preparing students for the digital age with cutting-edge technology education
            </p>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <img src={itProgram} alt="IT Programs" className="w-full rounded-lg shadow-lg mb-6" />
            <p className="text-lg text-foreground leading-relaxed">
              Our comprehensive IT program equips students with essential digital skills and technological literacy. 
              From basic computer operations to advanced programming and robotics, we prepare students to thrive 
              in an increasingly digital world. Our state-of-the-art computer laboratories provide hands-on learning 
              experiences with the latest hardware and software.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{program.title}</h3>
                <p className="text-foreground mb-4">{program.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Key Areas:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Facilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">Computer Labs</h3>
                <p className="text-foreground">Three fully-equipped computer laboratories with modern systems and high-speed internet.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">Robotics Studio</h3>
                <p className="text-foreground">Dedicated space for robotics projects, prototyping, and hands-on technology experiments.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">Media Center</h3>
                <p className="text-foreground">Professional-grade equipment for video production, graphic design, and digital content creation.</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ITPrograms;