import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

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
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-card shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary">Menu</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Greater Seeds Richmaris Academy
              </h3>
              <p className="text-sm text-muted-foreground">
                A premier educational institution committed to excellence in nurturing young minds
                through comprehensive education, innovative teaching methods, and character development.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-2">About Us</h4>
              <p className="text-sm text-muted-foreground">
                We provide quality education from nursery through secondary school, focusing on
                academic excellence, character building, and preparing students for future success.
              </p>
            </div>

            <Button className="w-full" size="lg">
              Apply for Admission
            </Button>

            <div>
              <h4 className="font-semibold text-primary mb-2">Contact Information</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Phone:</span> +2348058483524
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Location:</span> Opposite Airport
                  Guest Inn, Off GGSSS Road, Kuje, Abuja
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Ready to talk to us?</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Write your message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <Button type="submit" className="w-full">
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
