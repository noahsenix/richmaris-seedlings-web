import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import nurseryStudents from "@/assets/nursery-students.jpg";
import library from "@/assets/library.jpg";
import heroSchool from "@/assets/hero-school.jpg";

const NurserySection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const backgroundImages = [nurseryStudents, library, heroSchool];

  return (
    <div className="min-h-screen relative">
      <BackgroundSlider images={backgroundImages} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <WhatsAppButton />

      <main className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold mb-8 text-primary">Nursery School</h1>
            
            <div className="mb-12">
              <img
                src={nurseryStudents}
                alt="Nursery students engaged in play-based learning"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>

            <Card className="mb-8 bg-card/90 backdrop-blur">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-primary">About Our Nursery Program</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Our nursery school provides a warm, nurturing environment where young children (ages 3-5) begin their educational journey. We believe that early childhood is a critical period for development, and we create experiences that foster curiosity, creativity, and a love for learning.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through play-based learning, our experienced teachers help children develop social skills, emotional intelligence, and foundational academic concepts. Every activity is designed to build confidence, independence, and a positive attitude toward school.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-card/90 backdrop-blur">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-primary">Key Features</h2>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Small class sizes ensuring individual attention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Play-based curriculum aligned with early years foundation stage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Dedicated, trained early childhood educators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Safe, colorful, and stimulating learning environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Focus on social-emotional development and character building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Age-appropriate literacy, numeracy, and motor skills activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Daily outdoor play and creative arts sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-card/90 backdrop-blur">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-primary">What Children Learn</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Academic Skills</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Pre-reading and phonics</li>
                      <li>• Number recognition and counting</li>
                      <li>• Shape and color identification</li>
                      <li>• Basic writing skills</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Life Skills</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Sharing and cooperation</li>
                      <li>• Following instructions</li>
                      <li>• Self-care and independence</li>
                      <li>• Communication and expression</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link to="/admissions/online-application">
                <Button size="lg" className="text-lg">
                  Enroll Your Child Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NurserySection;
