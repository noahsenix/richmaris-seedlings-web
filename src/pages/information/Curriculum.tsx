import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, Award } from "lucide-react";
import heroSchool from "@/assets/hero-school.jpg";

const Curriculum = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const curriculumSections = {
    nursery: {
      overview: "Our Early Years curriculum focuses on play-based learning and holistic development.",
      subjects: ["Pre-Literacy Skills", "Pre-Numeracy", "Creative Arts", "Physical Development", "Social Skills", "Music & Movement"],
      approach: "Child-centered learning through exploration, creativity, and structured play activities."
    },
    primary: {
      overview: "The Primary curriculum builds strong foundations in core subjects while developing critical thinking.",
      subjects: ["English Language", "Mathematics", "Science", "Social Studies", "Computer Studies", "French", "Creative Arts", "Physical Education"],
      approach: "Interactive learning with emphasis on literacy, numeracy, and problem-solving skills."
    },
    secondary: {
      overview: "Our Secondary curriculum prepares students for IGCSE, WASSCE, and international examinations.",
      subjects: ["English Language & Literature", "Mathematics", "Biology", "Chemistry", "Physics", "Geography", "History", "Economics", "Business Studies", "Computer Science", "French", "Physical Education"],
      approach: "Rigorous academic preparation with focus on critical analysis, independent research, and examination success."
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundSlider images={[heroSchool]} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Academic Curriculum</h1>
            <p className="text-xl text-muted-foreground">
              Excellence in education through a comprehensive, internationally-aligned curriculum
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-card/95">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="nursery">Nursery</TabsTrigger>
              <TabsTrigger value="primary">Primary</TabsTrigger>
              <TabsTrigger value="secondary">Secondary</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="p-8 bg-card/95 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <BookOpen className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-3">Our Educational Philosophy</h2>
                      <p className="text-foreground leading-relaxed">
                        At Greater Seeds Richmaris Academy, we follow an enhanced British curriculum adapted to Nigerian 
                        educational standards. Our approach combines academic rigor with practical application, ensuring 
                        students develop both knowledge and skills necessary for success in a global society.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Teaching Methodology</h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Student-centered learning with personalized attention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Interactive and technology-enhanced lessons</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Project-based learning and real-world applications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Regular assessments and constructive feedback</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Focus on critical thinking and problem-solving</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Assessment & Evaluation</h3>
                      <p className="text-foreground leading-relaxed mb-4">
                        We employ a comprehensive assessment system that includes:
                      </p>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Continuous assessment through class work and homework</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Mid-term and end-of-term examinations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Project work and practical assessments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Regular progress reports to parents</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {(["nursery", "primary", "secondary"] as const).map((section) => (
              <TabsContent key={section} value={section} className="space-y-6">
                <Card className="p-8 bg-card/95 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-primary mb-4 capitalize">{section} Curriculum</h2>
                  <p className="text-foreground leading-relaxed mb-6">
                    {curriculumSections[section].overview}
                  </p>

                  <h3 className="text-xl font-bold text-primary mb-4">Core Subjects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {curriculumSections[section].subjects.map((subject, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-foreground font-medium">{subject}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-4">Teaching Approach</h3>
                  <p className="text-foreground leading-relaxed">
                    {curriculumSections[section].approach}
                  </p>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Curriculum;