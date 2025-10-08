import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AdmissionPopup } from "@/components/AdmissionPopup";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, School, Heart } from "lucide-react";

import heroSchool from "@/assets/hero-school.jpg";
import teacherWelcome from "@/assets/teacher-welcome.jpg";
import nurseryStudents from "@/assets/nursery-students.jpg";
import primaryStudents from "@/assets/primary-students.jpg";
import secondaryStudents from "@/assets/secondary-students.jpg";
import graduation from "@/assets/graduation.jpg";
import sportsActivity from "@/assets/sports-activity.jpg";
import achievements from "@/assets/achievements.jpg";
import itProgram from "@/assets/it-program.jpg";
import library from "@/assets/library.jpg";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const backgroundImages = [heroSchool, library, itProgram, sportsActivity];

  return (
    <div className="min-h-screen relative">
      <BackgroundSlider images={backgroundImages} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <WhatsAppButton />
      <AdmissionPopup isVisible={showPopup} onClose={() => setShowPopup(false)} />

      <main className="relative">
        {/* Hero Section */}
        <section className="py-20 px-4 animate-fade-in">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              Welcome to Greater Seeds Richmaris Academy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A beacon of excellence in education, where young minds are nurtured to become
              tomorrow's leaders. We provide comprehensive education that combines academic
              excellence with character development, preparing students for a bright future.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 animate-slide-up">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/80 backdrop-blur">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Who We Are</h3>
                  <p className="text-muted-foreground">
                    Greater Seeds Richmaris Academy is a premier educational institution dedicated
                    to providing quality education from nursery through secondary school. We believe
                    in holistic development that encompasses academic excellence, moral values, and
                    practical skills.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading educational institution that shapes future leaders through
                    innovative teaching, character building, and a commitment to excellence. We
                    envision a community where every student reaches their full potential.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide comprehensive, world-class education that develops critical thinking,
                    creativity, and strong moral character. We are committed to creating a safe,
                    nurturing environment where students thrive academically and personally.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Welcome Speech Section */}
        <section className="py-16 px-4 animate-slide-up">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-6 text-primary">
                  A Message to Parents
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Dear Parents and Guardians,
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We understand that choosing the right school for your child is one of the most
                  important decisions you'll make. At Greater Seeds Richmaris Academy, we don't just
                  educate children—we partner with you to nurture, guide, and inspire them to become
                  the best versions of themselves.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our dedicated team of experienced educators provides individual attention to each
                  student, ensuring they develop academically, socially, and emotionally. With
                  modern facilities, innovative teaching methods, and a strong emphasis on values,
                  we create an environment where your child can flourish.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We invite you to visit our campus, meet our staff, and experience firsthand the
                  warmth and excellence that define Greater Seeds Richmaris Academy. Your child's
                  future begins here.
                </p>
                <Button size="lg" className="text-lg">
                  Schedule a Visit Today
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={teacherWelcome}
                  alt="Our dedicated teacher"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4 bg-primary/5 backdrop-blur animate-slide-up">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Figures</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <Card className="text-center bg-card/90 backdrop-blur">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <div className="text-4xl font-bold text-primary mb-2">850+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </CardContent>
              </Card>

              <Card className="text-center bg-card/90 backdrop-blur">
                <CardContent className="pt-6">
                  <GraduationCap className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <div className="text-4xl font-bold text-primary mb-2">65+</div>
                  <div className="text-sm text-muted-foreground">Staff Members</div>
                </CardContent>
              </Card>

              <Card className="text-center bg-card/90 backdrop-blur">
                <CardContent className="pt-6">
                  <School className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <div className="text-4xl font-bold text-primary mb-2">25</div>
                  <div className="text-sm text-muted-foreground">Avg. Class Size</div>
                </CardContent>
              </Card>

              <Card className="text-center bg-card/90 backdrop-blur">
                <CardContent className="pt-6">
                  <GraduationCap className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Graduated</div>
                </CardContent>
              </Card>

              <Card className="text-center bg-card/90 backdrop-blur">
                <CardContent className="pt-6">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <div className="text-4xl font-bold text-primary mb-2">750+</div>
                  <div className="text-sm text-muted-foreground">Parents</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="py-16 px-4 animate-slide-up">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Sections</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link to="/sections/nursery">
                <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card/90 backdrop-blur overflow-hidden group cursor-pointer">
                  <div className="h-64 relative">
                    <ImageCarousel
                      images={[nurseryStudents, library]}
                      className="h-full"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Nursery School</h3>
                    <p className="text-muted-foreground mb-4">
                      Early childhood education with a focus on play-based learning, social skills,
                      and foundational development for ages 3-5.
                    </p>
                    <span className="text-accent font-semibold group-hover:underline">
                      Read More →
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/sections/primary">
                <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card/90 backdrop-blur overflow-hidden group cursor-pointer">
                  <div className="h-64 relative">
                    <ImageCarousel
                      images={[primaryStudents, itProgram]}
                      className="h-full"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Primary School</h3>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive curriculum covering core subjects with emphasis on literacy,
                      numeracy, and critical thinking for ages 6-11.
                    </p>
                    <span className="text-accent font-semibold group-hover:underline">
                      Read More →
                    </span>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/sections/secondary">
                <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card/90 backdrop-blur overflow-hidden group cursor-pointer">
                  <div className="h-64 relative">
                    <ImageCarousel
                      images={[secondaryStudents, sportsActivity]}
                      className="h-full"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Secondary School</h3>
                    <p className="text-muted-foreground mb-4">
                      Advanced academic programs preparing students for higher education and future
                      careers, with focus on leadership and excellence for ages 12-17.
                    </p>
                    <span className="text-accent font-semibold group-hover:underline">
                      Read More →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* What Your Child Will Gain */}
        <section className="py-16 px-4 bg-secondary/30 backdrop-blur animate-slide-up">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              What Your Child Will Gain
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/90 backdrop-blur">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Comprehensive Education
                  </h3>
                  <p className="text-muted-foreground">
                    A well-rounded curriculum that balances academics with arts, sports, and
                    extracurricular activities. We ensure students develop intellectually,
                    physically, and emotionally, preparing them for all aspects of life.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Thinking School</h3>
                  <p className="text-muted-foreground">
                    We cultivate critical thinking, problem-solving, and creative reasoning skills.
                    Our students learn to analyze, question, and innovate, becoming independent
                    thinkers ready to tackle real-world challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Lifelong Learning</h3>
                  <p className="text-muted-foreground">
                    We instill a love for learning that extends beyond the classroom. Students
                    develop curiosity, research skills, and the ability to adapt to new knowledge,
                    ensuring success in an ever-changing world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 px-4 animate-slide-up">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Our Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/90 backdrop-blur overflow-hidden">
                <div className="h-64 relative">
                  <ImageCarousel
                    images={[achievements, graduation]}
                    className="h-full"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    Academic Excellence Awards
                  </h3>
                  <p className="text-muted-foreground">
                    Our students consistently achieve top positions in national examinations and
                    academic competitions, with 95% gaining admission to their universities of choice.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur overflow-hidden">
                <div className="h-64 relative">
                  <ImageCarousel
                    images={[sportsActivity, itProgram]}
                    className="h-full"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    Sports & Technology Champions
                  </h3>
                  <p className="text-muted-foreground">
                    Multiple regional championships in football, athletics, and robotics
                    competitions, showcasing our commitment to all-around development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="py-16 px-4 bg-primary/5 backdrop-blur animate-slide-up">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/90 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg p-4 text-center min-w-[80px]">
                      <div className="text-2xl font-bold">15</div>
                      <div className="text-sm">MAY</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">
                        Graduation Ceremony
                      </h3>
                      <p className="text-muted-foreground">
                        Join us in celebrating our graduating class of 2025. A momentous occasion
                        honoring academic achievement and future success.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-lg p-4 text-center min-w-[80px]">
                      <div className="text-2xl font-bold">28</div>
                      <div className="text-sm">MAY</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Open House</h3>
                      <p className="text-muted-foreground">
                        Visit our campus, meet our teachers, and experience our facilities firsthand.
                        Perfect for prospective parents and students.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 text-center animate-slide-up">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-primary">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards your child's bright future. Applications are now open for
              the 2025/2026 academic year.
            </p>
            <Link to="/admissions/online-application">
              <Button size="lg" className="text-lg px-8">
                Apply for Admission
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Greater Seeds Richmaris Academy</h3>
              <p className="text-sm opacity-90">
                Nurturing excellence, building character, shaping futures.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm opacity-90 mb-2">Phone: +2348058483524</p>
              <p className="text-sm opacity-90">
                Location: Opposite Airport Guest Inn, Off GGSSS Road, Kuje, Abuja
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm opacity-90">
                <Link to="/about/welcome" className="block hover:underline">
                  About Us
                </Link>
                <Link to="/admissions/apply" className="block hover:underline">
                  Admissions
                </Link>
                <Link to="/gallery" className="block hover:underline">
                  Gallery
                </Link>
                <Link to="/news-events/latest" className="block hover:underline">
                  News & Events
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
            <p>© 2025 Greater Seeds Richmaris Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
