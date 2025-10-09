import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, GraduationCap, Heart, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroSchool from "@/assets/hero-school.jpg";

const Career = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: ""
  });

  const openPositions = [
    {
      title: "Secondary School Mathematics Teacher",
      type: "Full-time",
      requirements: ["B.Sc/B.Ed in Mathematics or related field", "Teaching certification", "Minimum 2 years experience"]
    },
    {
      title: "Primary School Class Teacher",
      type: "Full-time",
      requirements: ["B.Ed or NCE in Primary Education", "Strong classroom management skills", "Experience with British curriculum"]
    },
    {
      title: "Science Laboratory Assistant",
      type: "Full-time",
      requirements: ["B.Sc in Science-related field", "Laboratory safety certification", "Equipment maintenance experience"]
    },
    {
      title: "ICT Instructor",
      type: "Full-time",
      requirements: ["B.Sc in Computer Science/IT", "Programming skills", "Experience teaching students"]
    }
  ];

  const benefits = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Competitive Salary",
      description: "Attractive compensation packages commensurate with qualifications and experience"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Professional Development",
      description: "Regular training workshops and opportunities for career advancement"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Health Benefits",
      description: "Comprehensive health insurance coverage for staff"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Growth Opportunities",
      description: "Clear career progression path and leadership opportunities"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", position: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundSlider images={[heroSchool]} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Career Opportunities</h1>
            <p className="text-xl text-muted-foreground">
              Join our team of passionate educators and make a difference
            </p>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Work With Us?</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Greater Seeds Richmaris Academy is committed to providing quality education and maintaining a supportive, 
              professional environment for our staff. We value excellence, innovation, and dedication in education.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                    <p className="text-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Current Openings</h2>
            {openPositions.map((position, index) => (
              <Card key={index} className="p-6 bg-card/95 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">{position.title}</h3>
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm mb-3">
                      {position.type}
                    </span>
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, rIndex) => (
                        <li key={rIndex} className="flex items-start gap-2 text-foreground">
                          <span className="text-accent mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 w-full md:w-auto">
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">General Application</h2>
            <p className="text-foreground mb-6">
              Don't see a position that matches your skills? Submit a general application and we'll keep your information on file 
              for future opportunities.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Position of Interest</label>
                  <Input
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    required
                    placeholder="e.g., Mathematics Teacher"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Cover Letter</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  placeholder="Tell us about your qualifications and why you'd like to join our team..."
                />
              </div>
              <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90">
                Submit Application
              </Button>
            </form>
          </Card>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Contact HR Department</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-foreground">
                <strong>Email:</strong> hr@greaterseedsrichmarisacademy.org
              </div>
              <div className="text-foreground">
                <strong>Phone:</strong> (+234) 808 939 4474
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Career;