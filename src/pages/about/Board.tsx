import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import heroSchool from "@/assets/hero-school.jpg";
import boardMembersImage from "@/assets/board-members.jpg";

const Board = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const backgroundImages = [heroSchool];

  const boardMembers = [
    { name: "Chief Dr. Obiora Nwosu", position: "Chairman, Board of Governors", background: "Retired Education Secretary with 35 years experience" },
    { name: "Mrs. Funmilayo Adeyemi", position: "Vice Chairperson", background: "Educational Consultant and Former University Lecturer" },
    { name: "Engr. Samuel Okafor", position: "Board Member", background: "Infrastructure Development Expert" },
    { name: "Dr. Amina Hassan", position: "Board Member", background: "Child Psychology Specialist" },
    { name: "Mr. Peter Chukwu", position: "Board Member", background: "Financial Management Professional" },
    { name: "Pastor Grace Okonkwo", position: "Board Member", background: "Community Leader and Social Worker" },
  ];

  return (
    <div className="min-h-screen">
      <BackgroundSlider images={backgroundImages} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <WhatsAppButton />

      <main className="relative container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Governing Board</h1>
            <p className="text-xl text-muted-foreground">Leadership & Governance</p>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <img src={boardMembersImage} alt="Board Members" className="w-full rounded-lg shadow-lg mb-6" />
            <p className="text-foreground leading-relaxed mb-6">
              The Board of Governors provides strategic oversight and ensures the academy maintains the highest 
              standards of educational excellence, financial sustainability, and community engagement.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {boardMembers.map((member, index) => (
                <Card key={index} className="p-6 bg-accent/50">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="font-semibold text-foreground mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.background}</p>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Board;