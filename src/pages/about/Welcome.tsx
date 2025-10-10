import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import heroSchool from "@/assets/hero-school.jpg";
import library from "@/assets/library.jpg";
import principal from "@/assets/principal.jpg";

const Welcome = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const backgroundImages = [heroSchool, library];

  return (
    <div className="min-h-screen">
      <BackgroundSlider images={backgroundImages} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <WhatsAppButton />

      <main className="relative container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Welcome to Greater Seeds Richmaris Academy
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent mt-2">
              Nurtured to Greatness
            </h2>
            <p className="text-xl text-muted-foreground">
              A Message from Our Principal
            </p>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <img
                  src={principal}
                  alt="School Principal"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Dr. Emmanuel Adebayo</h3>
                  <p className="text-muted-foreground">Principal</p>
                </div>
              </div>

              <div className="space-y-4 text-foreground">
                <p className="text-lg leading-relaxed">
                  Dear Parents and Prospective Students,
                </p>
                <p className="leading-relaxed">
                  Welcome to Greater Seeds Richmaris Academy (GSRA) — a private Nursery, Primary and Secondary school 
                  located in Kuje, Abuja. We are dedicated to nurturing young learners through a balanced curriculum 
                  that promotes academic excellence, moral values and creative development.
                </p>
                <p className="leading-relaxed">
                  Our classrooms are student-centered, our teachers are caring, and we partner with parents so every 
                  child can thrive. We don't just educate children—we partner with you to nurture, guide, and inspire 
                  them to become the best versions of themselves.
                </p>
                <p className="leading-relaxed">
                  At GSRA, we provide quality foundational and secondary education that develops confident, responsible 
                  and curious students ready for the future. Our dedicated team of experienced educators provides individual 
                  attention to each student, ensuring they develop academically, socially, and emotionally.
                </p>
                <p className="leading-relaxed">
                  We invite you to visit our campus, meet our staff, and experience firsthand the warmth and excellence 
                  that define Greater Seeds Richmaris Academy.
                </p>
                <p className="font-semibold mt-6">
                  <strong>Contact us:</strong><br />
                  Phone: 08137854567 • 08033100284 • 08152909415<br />
                  Facebook: facebook.com/greaterseedsrichmarisacademy
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Our School Motto & Pledge</h2>
            <div className="space-y-4 text-foreground">
              <div className="p-6 bg-accent/20 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Motto</h3>
                <p className="text-2xl font-bold text-primary">Nurtured to Greatness</p>
              </div>
              
              <div className="p-6 bg-accent/20 rounded-lg">
                <h3 className="text-xl font-bold mb-3">School Pledge</h3>
                <p className="italic leading-relaxed">
                  "I pledge to uphold the image of the school at all times. I will speak right, respect others and use my time wisely. 
                  I will conduct myself in a manner that will not demean the school. So help me God."
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-accent/50 rounded-lg">
                  <h3 className="font-bold mb-2">Academic Excellence</h3>
                  <p className="text-sm">Strong basics, exam preparation and lifelong learning</p>
                </div>
                <div className="p-4 bg-accent/50 rounded-lg">
                  <h3 className="font-bold mb-2">Character Formation</h3>
                  <p className="text-sm">Building moral values and respectful behavior</p>
                </div>
                <div className="p-4 bg-accent/50 rounded-lg">
                  <h3 className="font-bold mb-2">Parent Partnership</h3>
                  <p className="text-sm">Working together for every child's success</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Welcome;