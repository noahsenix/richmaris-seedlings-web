import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import heroSchool from "@/assets/hero-school.jpg";
import graduation from "@/assets/graduation.jpg";
import achievements from "@/assets/achievements.jpg";
import sportsActivity from "@/assets/sports-activity.jpg";

const LatestNews = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const newsArticles = [
    {
      title: "Outstanding IGCSE Results 2024",
      date: "September 15, 2024",
      category: "Academic Excellence",
      image: achievements,
      content: "Greater Seeds Richmaris Academy celebrates exceptional IGCSE results with 98% of students achieving A*-C grades. Our students demonstrated outstanding performance across all subjects, with particular excellence in Mathematics, Sciences, and Languages. We are proud of our students' dedication and the hard work of our teaching staff.",
      tags: ["Academics", "Results", "Achievement"]
    },
    {
      title: "Annual Graduation Ceremony Held Successfully",
      date: "August 30, 2024",
      category: "School Events",
      image: graduation,
      content: "The Class of 2024 graduated in a beautiful ceremony attended by proud parents, staff, and distinguished guests. Our valedictorian, Sarah Okonkwo, delivered an inspiring speech about resilience and pursuing excellence. All graduating students have secured admissions to prestigious universities worldwide.",
      tags: ["Graduation", "Celebration", "Achievement"]
    },
    {
      title: "Inter-School Sports Competition Victory",
      date: "August 20, 2024",
      category: "Sports",
      image: sportsActivity,
      content: "Our athletics team brought home the overall championship trophy from the Annual Inter-School Sports Competition. Students competed in various track and field events, demonstrating remarkable sportsmanship and athletic prowess. Special congratulations to our relay team for breaking the regional record!",
      tags: ["Sports", "Victory", "Competition"]
    },
    {
      title: "New STEM Laboratory Officially Opened",
      date: "August 10, 2024",
      category: "Infrastructure",
      image: heroSchool,
      content: "We are thrilled to announce the opening of our state-of-the-art STEM laboratory, equipped with cutting-edge technology and equipment. The facility will enhance our science and technology programs, providing students with hands-on learning experiences in robotics, coding, and advanced sciences.",
      tags: ["Infrastructure", "Technology", "Innovation"]
    },
    {
      title: "Student Wins National Mathematics Olympiad",
      date: "July 25, 2024",
      category: "Student Achievement",
      image: achievements,
      content: "Congratulations to Year 10 student, Michael Adeyemi, who won first place in the National Mathematics Olympiad! Michael competed against over 500 students from across the country. This remarkable achievement showcases the quality of mathematics education at our academy.",
      tags: ["Mathematics", "Competition", "National Award"]
    },
    {
      title: "School Receives Green Environment Award",
      date: "July 15, 2024",
      category: "Recognition",
      image: heroSchool,
      content: "Greater Seeds Richmaris Academy has been recognized with the Green Environment Award for our sustainable practices and environmental initiatives. Our eco-club's efforts in waste management, tree planting, and environmental education have made a significant impact on our community.",
      tags: ["Environment", "Award", "Sustainability"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundSlider images={[heroSchool]} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Latest News</h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest happenings at Greater Seeds Richmaris Academy
            </p>
          </div>

          <div className="grid gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{article.date}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-primary mb-3 hover:text-accent transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-foreground leading-relaxed mb-4">
                        {article.content}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LatestNews;