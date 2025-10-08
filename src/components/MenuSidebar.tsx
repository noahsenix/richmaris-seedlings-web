import { useState } from "react";
import { X, Phone, MapPin, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface MenuSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuSidebar = ({ isOpen, onClose }: MenuSidebarProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-card/95 backdrop-blur-sm border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative">
          {/* Header Section */}
          <div className="bg-primary text-primary-foreground p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-primary-foreground/20 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-10 h-10" />
              <div>
                <h2 className="text-xl font-bold leading-tight">
                  Greater Seeds<br />Richmaris Academy
                </h2>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/90 mt-2">
              Excellence in Education
            </p>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-6">
            {/* About Us */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                About Us
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Greater Seeds Richmaris Academy is committed to providing quality education
                that nurtures academic excellence, character development, and lifelong learning
                for students from nursery to secondary level.
              </p>
            </div>

            <Separator />

            {/* Apply for Admission */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Apply for Admission</h3>
              <Link to="/admissions/online-application">
                <Button className="w-full" size="lg" variant="default">
                  Apply Now
                </Button>
              </Link>
            </div>

            <Separator />

            {/* Contact Information */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+2348058483524" className="text-muted-foreground hover:text-primary transition-colors">
                      +234 805 848 3524
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      Opposite Airport Guest Inn,<br />
                      Off GGSSS Road, Kuje, Abuja
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Contact Form */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+234 xxx xxx xxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};