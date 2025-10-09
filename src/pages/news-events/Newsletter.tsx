import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Calendar, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroSchool from "@/assets/hero-school.jpg";

const Newsletter = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletters = [
    {
      title: "September 2024 Newsletter",
      date: "September 2024",
      description: "Highlights from the new academic year, IGCSE results, upcoming events, and parent-teacher meetings.",
      topics: ["New Academic Year", "Examination Results", "Sports Updates", "Calendar"]
    },
    {
      title: "June 2024 Newsletter",
      date: "June 2024",
      description: "End of year celebrations, graduation ceremony, summer programs, and next term preparations.",
      topics: ["Graduation", "Awards", "Summer Programs", "Registration"]
    },
    {
      title: "March 2024 Newsletter",
      date: "March 2024",
      description: "Mid-term achievements, sports day recap, new facilities update, and cultural week highlights.",
      topics: ["Sports Day", "Cultural Week", "Infrastructure", "Achievements"]
    },
    {
      title: "December 2023 Newsletter",
      date: "December 2023",
      description: "First term review, Christmas celebrations, academic progress reports, and holiday announcements.",
      topics: ["Term Review", "Christmas", "Academic Reports", "Holiday Schedule"]
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully Subscribed!",
        description: "You will receive our latest newsletters via email.",
      });
      setEmail("");
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
            <h1 className="text-5xl font-bold text-primary mb-4">School Newsletter</h1>
            <p className="text-xl text-muted-foreground">
              Stay connected with our monthly newsletters featuring school news, events, and achievements
            </p>
          </div>

          {/* Subscribe Section */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="text-center space-y-4">
              <Mail className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold text-primary">Subscribe to Our Newsletter</h2>
              <p className="text-foreground max-w-2xl mx-auto">
                Get the latest school news, events, and updates delivered straight to your inbox every month.
              </p>
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2 mt-6">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </Card>

          {/* Newsletter Archive */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Newsletter Archive</h2>
            
            {newsletters.map((newsletter, index) => (
              <Card key={index} className="p-6 bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{newsletter.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {newsletter.title}
                    </h3>
                    <p className="text-foreground mb-4">
                      {newsletter.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {newsletter.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 gap-2 w-full md:w-auto">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Questions About Our Newsletter?</h3>
              <p className="text-foreground">
                Contact our communications office for more information or to submit content for the next newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                <div className="text-foreground">
                  <strong>Email:</strong> newsletter@greaterseedsrichmarisacademy.org
                </div>
                <div className="text-foreground">
                  <strong>Phone:</strong> (+234) 808 939 4474
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Newsletter;