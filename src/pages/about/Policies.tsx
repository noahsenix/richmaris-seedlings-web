import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroSchool from "@/assets/hero-school.jpg";
import library from "@/assets/library.jpg";

const Policies = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">School Policies</h1>
            <p className="text-xl text-muted-foreground">
              Guidelines for Students, Parents & Staff
            </p>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">Academic Policies</AccordionTrigger>
                <AccordionContent className="space-y-4 text-foreground">
                  <div>
                    <h4 className="font-semibold mb-2">Attendance</h4>
                    <p className="text-muted-foreground">
                      Regular attendance is mandatory. Students must maintain at least 85% attendance to sit for 
                      examinations. Parents must notify the school of absences and provide medical documentation 
                      for absences exceeding three consecutive days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Homework & Assignments</h4>
                    <p className="text-muted-foreground">
                      Students are expected to complete all homework and assignments on time. Late submissions 
                      will result in reduced grades. Parents should ensure students have a dedicated study time 
                      at home.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Examinations</h4>
                    <p className="text-muted-foreground">
                      Continuous assessments and terminal examinations are conducted each term. Academic 
                      dishonesty, including cheating and plagiarism, will result in serious consequences 
                      including zero marks and possible suspension.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">Code of Conduct</AccordionTrigger>
                <AccordionContent className="space-y-4 text-foreground">
                  <div>
                    <h4 className="font-semibold mb-2">Expected Behavior</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Respect for teachers, staff, and fellow students at all times</li>
                      <li>Proper use of school property and facilities</li>
                      <li>Punctuality to all classes and school activities</li>
                      <li>Adherence to dress code and grooming standards</li>
                      <li>No use of mobile phones during class hours</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Prohibited Conduct</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Bullying, harassment, or intimidation of any kind</li>
                      <li>Fighting or physical violence</li>
                      <li>Possession of weapons or dangerous items</li>
                      <li>Drug or alcohol possession or use</li>
                      <li>Theft or vandalism of school property</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">Dress Code</AccordionTrigger>
                <AccordionContent className="space-y-4 text-foreground">
                  <div>
                    <h4 className="font-semibold mb-2">School Uniform</h4>
                    <p className="text-muted-foreground mb-4">
                      All students must wear the approved school uniform daily. Uniforms must be clean, 
                      well-maintained, and properly fitted.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-accent/50 rounded-lg">
                        <h5 className="font-semibold mb-2">Nursery</h5>
                        <p className="text-sm text-muted-foreground">
                          Check shirt/blouse with school logo, navy blue shorts/skirt, white socks, black shoes
                        </p>
                      </div>
                      <div className="p-4 bg-accent/50 rounded-lg">
                        <h5 className="font-semibold mb-2">Primary</h5>
                        <p className="text-sm text-muted-foreground">
                          Blue shirt/blouse, khaki trousers/skirt, school tie, black belt, white socks, black shoes
                        </p>
                      </div>
                      <div className="p-4 bg-accent/50 rounded-lg">
                        <h5 className="font-semibold mb-2">Secondary</h5>
                        <p className="text-sm text-muted-foreground">
                          White shirt/blouse, navy blue trousers/skirt, school tie, black belt, white socks, black shoes
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sports Uniform</h4>
                    <p className="text-muted-foreground">
                      Students must wear the designated PE kit for physical education classes and sports activities.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">Safety & Security</AccordionTrigger>
                <AccordionContent className="space-y-4 text-foreground">
                  <div>
                    <h4 className="font-semibold mb-2">Campus Security</h4>
                    <p className="text-muted-foreground">
                      The school maintains 24/7 security. All visitors must sign in at the gate and obtain 
                      visitor passes. Parents picking up students must present identification.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Emergency Procedures</h4>
                    <p className="text-muted-foreground">
                      Regular fire and emergency drills are conducted. Students must follow all safety 
                      instructions during emergencies. Parents will be contacted immediately in case of 
                      any incidents.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Health Policy</h4>
                    <p className="text-muted-foreground">
                      The school has a qualified nurse on duty. Sick students will be isolated and parents 
                      contacted for pickup. Students with contagious illnesses must stay home until cleared 
                      by a medical professional.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold">Parent Engagement</AccordionTrigger>
                <AccordionContent className="space-y-4 text-foreground">
                  <div>
                    <h4 className="font-semibold mb-2">Parent-Teacher Communication</h4>
                    <p className="text-muted-foreground">
                      Regular parent-teacher meetings are scheduled each term. Parents are encouraged to 
                      maintain open communication with teachers through the school portal, emails, or 
                      scheduled appointments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">School Reports</h4>
                    <p className="text-muted-foreground">
                      Progress reports are issued three times per academic year. Report cards must be 
                      signed by parents and returned within one week.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-semibold">Technology Use Policy</AccordionTrigger>
                <AccordionContent className="space-y-4 text-foreground">
                  <div>
                    <h4 className="font-semibold mb-2">Computer & Internet Use</h4>
                    <p className="text-muted-foreground">
                      School computers and internet access are for educational purposes only. Inappropriate 
                      use, including accessing unauthorized websites or cyberbullying, will result in 
                      disciplinary action.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Mobile Devices</h4>
                    <p className="text-muted-foreground">
                      Mobile phones must be switched off and kept in bags during school hours. Unauthorized 
                      use will result in confiscation. The school is not responsible for lost or stolen devices.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6 bg-card/95 backdrop-blur-sm">
            <p className="text-foreground">
              <strong>Note:</strong> These policies are subject to periodic review and updates. Parents 
              and students will be notified of any changes. For complete policy documents or clarifications, 
              please contact the school administration.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Policies;