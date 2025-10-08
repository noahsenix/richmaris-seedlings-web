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
                  It is with great pleasure and enthusiasm that I welcome you to Greater Seeds Richmaris Academy. 
                  As the Principal, I am honored to lead an institution that has been committed to academic 
                  excellence, character development, and holistic education for many years.
                </p>
                <p className="leading-relaxed">
                  At Greater Seeds Richmaris Academy, we believe that every child has unique talents and potential 
                  waiting to be discovered and nurtured. Our dedicated team of qualified educators works tirelessly 
                  to provide a stimulating learning environment where students can thrive academically, socially, 
                  and personally.
                </p>
                <p className="leading-relaxed">
                  We offer a comprehensive curriculum from nursery through secondary school, ensuring continuity 
                  in education and allowing us to watch your children grow and develop throughout their formative years. 
                  Our modern facilities, innovative teaching methods, and focus on character building prepare our 
                  students not just for examinations, but for life.
                </p>
                <p className="leading-relaxed">
                  We maintain strong partnerships with parents, recognizing that education is most effective when 
                  home and school work together. Your child's success is our priority, and we are committed to 
                  providing them with every opportunity to excel.
                </p>
                <p className="leading-relaxed">
                  I invite you to explore our academy, meet our staff, and discover the Greater Seeds difference. 
                  Together, we can nurture the seeds of greatness in your child.
                </p>
                <p className="font-semibold mt-6">
                  Warm regards,<br />
                  Dr. Emmanuel Adebayo<br />
                  Principal
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Educational Philosophy</h2>
            <div className="space-y-4 text-foreground">
              <p className="leading-relaxed">
                We believe in developing the whole child - academically, emotionally, socially, and physically. 
                Our approach combines rigorous academic standards with character education, ensuring our students 
                become not only knowledgeable but also compassionate, ethical, and responsible citizens.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-accent/50 rounded-lg">
                  <h3 className="font-bold mb-2">Excellence</h3>
                  <p className="text-sm">Striving for the highest standards in all we do</p>
                </div>
                <div className="p-4 bg-accent/50 rounded-lg">
                  <h3 className="font-bold mb-2">Integrity</h3>
                  <p className="text-sm">Building character through honesty and moral values</p>
                </div>
                <div className="p-4 bg-accent/50 rounded-lg">
                  <h3 className="font-bold mb-2">Innovation</h3>
                  <p className="text-sm">Embracing new methods and technologies in education</p>
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