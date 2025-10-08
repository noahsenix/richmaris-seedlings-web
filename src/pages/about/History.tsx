import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import heroSchool from "@/assets/hero-school.jpg";
import schoolEntrance from "@/assets/school-entrance.jpg";
import achievements from "@/assets/achievements.jpg";

const History = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const backgroundImages = [heroSchool, schoolEntrance];

  const milestones = [
    { year: "2010", event: "Greater Seeds Richmaris Academy was founded with just 45 students in a modest building" },
    { year: "2012", event: "Expanded to include primary section with 150 students total" },
    { year: "2014", event: "Launched secondary school program and opened new science laboratory" },
    { year: "2016", event: "Achieved 100% WAEC pass rate for the first time" },
    { year: "2018", event: "Opened state-of-the-art computer lab and library facility" },
    { year: "2020", event: "Introduced boarding facilities for secondary students" },
    { year: "2022", event: "Celebrated 500+ alumni and won National Academic Excellence Award" },
    { year: "2024", event: "Reached 800+ students across all sections with expanded campus facilities" },
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our History</h1>
            <p className="text-xl text-muted-foreground">
              Building Excellence Since 2010
            </p>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <img
                  src={schoolEntrance}
                  alt="School Entrance"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 text-foreground">
                <h2 className="text-2xl font-bold">Our Journey</h2>
                <p className="leading-relaxed">
                  Greater Seeds Richmaris Academy was established in 2010 with a vision to provide 
                  quality, affordable education to the children of Kuje, Abuja, and surrounding communities. 
                  What started as a small nursery school with just 45 students has grown into a thriving 
                  educational institution serving over 800 students from nursery through secondary school.
                </p>
                <p className="leading-relaxed">
                  Our founders, driven by a passion for educational excellence and character development, 
                  established the academy on the principles of academic rigor, moral integrity, and 
                  community service. These values continue to guide us today.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-foreground">Milestones & Achievements</h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary/30"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="inline-block bg-card p-4 rounded-lg border border-border">
                        <span className="text-primary font-bold text-xl">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1.5 md:-translate-x-2"></div>
                    <div className="flex-1">
                      <Card className="p-4 bg-accent/50">
                        <p className="text-foreground">{milestone.event}</p>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-foreground">
                <h2 className="text-2xl font-bold">Academic Excellence</h2>
                <p className="leading-relaxed">
                  Throughout our history, we have maintained a commitment to academic excellence. 
                  Our students consistently achieve outstanding results in national examinations, 
                  with many going on to prestigious universities both in Nigeria and abroad.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>100% WAEC pass rate for 8 consecutive years</li>
                  <li>Over 500 alumni in various fields of excellence</li>
                  <li>Multiple awards for academic and sports achievements</li>
                  <li>Strong partnerships with international educational bodies</li>
                </ul>
              </div>
              <div>
                <img
                  src={achievements}
                  alt="Student Achievements"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default History;