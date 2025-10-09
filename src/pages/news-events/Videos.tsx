import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar } from "lucide-react";
import heroSchool from "@/assets/hero-school.jpg";
import graduation from "@/assets/graduation.jpg";
import sportsActivity from "@/assets/sports-activity.jpg";
import achievements from "@/assets/achievements.jpg";

const Videos = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const videos = [
    {
      title: "Graduation Ceremony 2024",
      date: "August 30, 2024",
      category: "Ceremonies",
      thumbnail: graduation,
      duration: "45:30",
      description: "Watch the full ceremony of our Class of 2024 graduation, featuring inspiring speeches and proud moments."
    },
    {
      title: "Inter-School Sports Championship",
      date: "August 20, 2024",
      category: "Sports",
      thumbnail: sportsActivity,
      duration: "28:15",
      description: "Highlights from our victorious performance at the inter-school sports championship."
    },
    {
      title: "Annual Cultural Day Celebration",
      date: "July 10, 2024",
      category: "Cultural Events",
      thumbnail: achievements,
      duration: "35:45",
      description: "Experience the vibrant celebrations of our annual cultural day featuring performances from all year groups."
    },
    {
      title: "Science Fair 2024 Showcase",
      date: "June 25, 2024",
      category: "Academic",
      thumbnail: heroSchool,
      duration: "22:10",
      description: "Explore innovative projects presented by our students at the annual science fair."
    },
    {
      title: "School Tour - Virtual Campus Experience",
      date: "May 15, 2024",
      category: "Campus Tour",
      thumbnail: heroSchool,
      duration: "15:20",
      description: "Take a comprehensive virtual tour of our state-of-the-art facilities and beautiful campus."
    },
    {
      title: "Music and Drama Performance Evening",
      date: "April 18, 2024",
      category: "Arts",
      thumbnail: achievements,
      duration: "52:00",
      description: "An evening of spectacular musical and theatrical performances by our talented students."
    },
    {
      title: "Parent-Teacher Conference Highlights",
      date: "March 30, 2024",
      category: "Community",
      thumbnail: heroSchool,
      duration: "18:45",
      description: "Key takeaways and highlights from our termly parent-teacher conference."
    },
    {
      title: "STEM Week Activities",
      date: "February 20, 2024",
      category: "Academic",
      thumbnail: achievements,
      duration: "25:30",
      description: "Exciting activities and workshops from our dedicated STEM week."
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
            <h1 className="text-5xl font-bold text-primary mb-4">School Event Videos</h1>
            <p className="text-xl text-muted-foreground">
              Relive memorable moments from our school events and celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="bg-primary rounded-full p-4">
                      <Play className="h-8 w-8 text-primary-foreground fill-current" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-accent">
                    {video.category}
                  </Badge>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3" />
                    <span className="text-xs">{video.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-foreground line-clamp-3">
                    {video.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20 mt-12">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Subscribe to Our YouTube Channel</h3>
              <p className="text-foreground max-w-2xl mx-auto">
                Don't miss any of our events! Subscribe to our YouTube channel to get notified about new video uploads.
              </p>
              <div className="flex justify-center mt-6">
                <a 
                  href="#" 
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <Play className="h-5 w-5" />
                  Subscribe Now
                </a>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Videos;