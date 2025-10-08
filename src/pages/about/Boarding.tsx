import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import heroSchool from "@/assets/hero-school.jpg";
import boardingFacility from "@/assets/boarding-facility.jpg";

const Boarding = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const backgroundImages = [heroSchool];

  return (
    <div className="min-h-screen">
      <BackgroundSlider images={backgroundImages} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <WhatsAppButton />

      <main className="relative container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Boarding Facilities</h1>
            <p className="text-xl text-muted-foreground">A Home Away From Home</p>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <img src={boardingFacility} alt="Boarding Facilities" className="w-full rounded-lg shadow-lg mb-6" />
            
            <div className="space-y-6 text-foreground">
              <p className="leading-relaxed text-lg">
                Our modern boarding facilities provide a safe, comfortable, and nurturing environment for students. 
                With 24/7 supervision, nutritious meals, and structured study times, we ensure your child's well-being 
                and academic success.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Facilities Include:</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Modern dormitories with comfortable beds</li>
                    <li>Personal lockers and study desks</li>
                    <li>24/7 security and supervision</li>
                    <li>Nutritious meals (breakfast, lunch, dinner)</li>
                    <li>Common rooms with entertainment</li>
                    <li>Medical care and first aid</li>
                    <li>Laundry services</li>
                    <li>Weekend activities and excursions</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Daily Schedule:</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>6:00 AM</strong> - Wake up & Morning devotion</p>
                    <p><strong>6:30 AM</strong> - Breakfast</p>
                    <p><strong>7:30 AM</strong> - Classes begin</p>
                    <p><strong>1:00 PM</strong> - Lunch break</p>
                    <p><strong>3:30 PM</strong> - Classes end</p>
                    <p><strong>4:00 PM</strong> - Sports & Recreation</p>
                    <p><strong>6:00 PM</strong> - Dinner</p>
                    <p><strong>7:00 PM</strong> - Supervised study time</p>
                    <p><strong>9:30 PM</strong> - Lights out</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Boarding;