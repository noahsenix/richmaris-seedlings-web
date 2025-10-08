import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroSchool from "@/assets/hero-school.jpg";
import counseling from "@/assets/counseling.jpg";

const Counseling = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const backgroundImages = [heroSchool];

  return (
    <div className="min-h-screen">
      <BackgroundSlider images={backgroundImages} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <WhatsAppButton />

      <main className="relative container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Guidance & Counseling</h1>
            <p className="text-xl text-muted-foreground">Supporting Student Well-being</p>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <img src={counseling} alt="Counseling Services" className="w-full rounded-lg shadow-lg" />
              <div className="space-y-4 text-foreground">
                <h2 className="text-2xl font-bold">Our Counseling Services</h2>
                <p className="leading-relaxed">
                  Our qualified counselors provide confidential support to help students navigate academic, 
                  social, and personal challenges, ensuring their overall well-being and success.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-accent/50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Academic Counseling</h3>
                <p className="text-sm text-muted-foreground">Study skills, career guidance, and academic planning</p>
              </div>
              <div className="p-6 bg-accent/50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Personal Counseling</h3>
                <p className="text-sm text-muted-foreground">Emotional support, stress management, and self-esteem</p>
              </div>
              <div className="p-6 bg-accent/50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Social Counseling</h3>
                <p className="text-sm text-muted-foreground">Peer relationships, conflict resolution, and communication</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg">Schedule a Counseling Session</Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Counseling;