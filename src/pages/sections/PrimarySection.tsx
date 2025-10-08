import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import primaryStudents from "@/assets/primary-students.jpg";
import itProgram from "@/assets/it-program.jpg";
import library from "@/assets/library.jpg";

const PrimarySection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const backgroundImages = [primaryStudents, itProgram, library];

  return (
    <div className="min-h-screen relative">
      <BackgroundSlider images={backgroundImages} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <WhatsAppButton />

      <main className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold mb-8 text-primary">Primary School</h1>
            
            <div className="mb-12">
              <img
                src={primaryStudents}
                alt="Primary school students in classroom"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>

            <Card className="mb-8 bg-card/90 backdrop-blur">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-primary">About Our Primary Program</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Our primary school (ages 6-11) builds upon the foundation laid in nursery, offering a comprehensive curriculum that develops strong literacy, numeracy, and critical thinking skills. We prepare students for the challenges of secondary education while fostering a love for learning.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With experienced teachers, modern facilities, and a curriculum aligned with national standards, we ensure every child receives a quality education that sets them up for academic success and personal growth.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-card/90 backdrop-blur">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-primary">Core Subjects</h2>
                <div className="grid md:grid-cols-2 gap-6 text-lg text-muted-foreground">
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>English Language & Literature</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Mathematics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Science (General, Basic)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Social Studies</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Computer Studies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Creative Arts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Physical Education</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Moral & Civic Education</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-card/90 backdrop-blur">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-primary">Key Features</h2>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Qualified, experienced teaching staff with specialized training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Interactive teaching methods and hands-on learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Modern computer lab for IT skills development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Well-stocked library promoting reading culture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Extracurricular activities including sports, music, and drama</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Regular assessments and progress reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Parent-teacher collaboration and communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-card/90 backdrop-blur">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-primary">Student Development</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Beyond academics, we focus on developing the whole child. Our students participate in leadership programs, community service, and character education that builds confidence, responsibility, and strong moral values.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link to="/admissions/online-application">
                <Button size="lg" className="text-lg">
                  Apply Now for Primary School
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrimarySection;
