import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import secondaryStudents from "@/assets/secondary-students.jpg";
import sportsActivity from "@/assets/sports-activity.jpg";
import itProgram from "@/assets/it-program.jpg";

const SecondarySection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const backgroundImages = [secondaryStudents, sportsActivity, itProgram];

  return (
    <div className="min-h-screen relative">
      <BackgroundSlider images={backgroundImages} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <WhatsAppButton />

      <main className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold mb-8 text-primary">Secondary School</h1>
            
            <div className="mb-12">
              <img
                src={secondaryStudents}
                alt="Secondary school students conducting science experiments"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>

            <Card className="mb-8 bg-card/90 backdrop-blur">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-primary">About Our Secondary Program</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Our secondary school (ages 12-17) offers a rigorous academic program that prepares students for WAEC, NECO, and university entrance examinations. We combine academic excellence with character development, leadership training, and career guidance to produce well-rounded graduates.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With state-of-the-art facilities, experienced subject specialists, and a comprehensive curriculum, we ensure students are equipped with the knowledge, skills, and confidence to excel in higher education and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-card/90 backdrop-blur">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-primary">Academic Programs</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Junior Secondary (JSS 1-3)</h3>
                    <p className="text-muted-foreground mb-2">Core subjects include:</p>
                    <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>English Language</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Mathematics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Basic Science & Technology</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Social Studies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Computer Studies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Creative Arts</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Senior Secondary (SS 1-3)</h3>
                    <p className="text-muted-foreground mb-2">Students choose from three major streams:</p>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="p-4 bg-accent/10 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Sciences</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Physics</li>
                          <li>• Chemistry</li>
                          <li>• Biology</li>
                          <li>• Mathematics</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-accent/10 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Commercial</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Accounting</li>
                          <li>• Economics</li>
                          <li>• Commerce</li>
                          <li>• Business Studies</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-accent/10 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Arts</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Literature</li>
                          <li>• Government</li>
                          <li>• History</li>
                          <li>• CRS/IRS</li>
                        </ul>
                      </div>
                    </div>
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
                    <span>Experienced subject specialists with advanced qualifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Fully-equipped science laboratories (Physics, Chemistry, Biology)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Modern computer lab with internet access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Comprehensive library with research resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Regular mock exams and WAEC/NECO preparation classes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Career guidance and university counseling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Leadership programs and student government</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Vibrant sports and extracurricular activities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-card/90 backdrop-blur">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Track Record</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our students consistently achieve excellent results in external examinations, with 95% gaining admission to their preferred universities. We pride ourselves on producing graduates who excel not only academically but also in character, leadership, and service to society.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link to="/admissions/online-application">
                <Button size="lg" className="text-lg">
                  Apply Now for Secondary School
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecondarySection;
