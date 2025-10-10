import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, Phone, Mail, MapPin } from "lucide-react";
import heroSchool from "@/assets/hero-school.jpg";
import admissionBanner from "@/assets/admission-banner.png";

const HowToApply = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const ageRequirements = [
    { year: "Crèche", age: "3 months to 1 year 6 months" },
    { year: "Pre-K One Ruby (Playgroup)", age: "1 year 6 months (by August)" },
    { year: "Pre-K Two Sapphire", age: "2 years 6 months (by August)" },
    { year: "K-Emerald", age: "3 years 6 months (by August)" },
    { year: "K-Tanzanite", age: "4 years 6 months (by August)" },
    { year: "Year One", age: "5 years 6 months (by August)" },
    { year: "Year Two", age: "6 years 6 months (by August)" },
    { year: "Year Three", age: "7 years 6 months (by August)" },
    { year: "Year Four", age: "8 years 6 months (by August)" },
    { year: "Year Five", age: "At least 9 years (by August)" },
    { year: "Year Six", age: "9 years 6 months (by August)" },
    { year: "Year Seven", age: "10 years (by August)" },
    { year: "Year Eight", age: "11 years (by August)" },
    { year: "Year Nine", age: "12 years (by August)" },
    { year: "Year Ten", age: "13 years (by August)" },
    { year: "Year Eleven", age: "14 years (by August)" },
    { year: "Year Twelve", age: "15 years (by August)" },
  ];

  const applicationSteps = [
    {
      title: "1. Check Age Requirements",
      content: "Students seeking admission must meet the appropriate age requirements for their year group. Please call 08137854567 for specific age requirements."
    },
    {
      title: "2. Required Documents",
      content: "Bring the child's birth certificate, 2 passport photos, and the registration fee."
    },
    {
      title: "3. Schedule a Visit",
      content: "Call 08137854567 or visit us on Facebook (facebook.com/greaterseedsrichmarisacademy) to schedule a visit and complete registration."
    },
    {
      title: "4. Assessment (if applicable)",
      content: "Some year groups may require an age-appropriate assessment or interview to evaluate readiness."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundSlider images={[heroSchool]} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">How to Apply</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the Greater Seeds Richmaris Academy Family
            </p>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <img 
              src={admissionBanner} 
              alt="Admissions" 
              className="w-full rounded-lg shadow-lg mb-8"
            />
            
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-primary mb-4">Dear Parents,</h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Thank you for choosing Greater Seeds Richmaris Academy for your child/ward. We enrol students subject to availability. 
                To register, bring the child's birth certificate, 2 passport photos, and the registration fee.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                For enquiries and to schedule a visit: call <strong>08137854567</strong> (also reachable on Facebook at facebook.com/greaterseedsrichmarisacademy).
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">The Application Process</h3>
              
              {applicationSteps.map((step, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent" />
                    {step.title}
                  </h4>
                  <p className="text-foreground leading-relaxed pl-7">{step.content}</p>
                </div>
              ))}

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-primary mb-6">Important Information</h3>
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="font-semibold text-foreground mb-2">
                  We enrol students subject to availability. Please call ahead to confirm space and the best visiting hours.
                </p>
                <p className="text-foreground">
                  Note: Call ahead to confirm the best entrance and visiting hours.
                </p>
              </div>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-primary mb-6">Contact Us</h3>
              <p className="text-foreground mb-4">
                For enquiries and to schedule a visit:
              </p>
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <span className="text-foreground">08137854567 • 08033100284 • 08152909415</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <span className="text-foreground">
                      Opposite AirpyGuest Inn, Along GGSSS road, Kuje, Abuja, Nigeria
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <span className="text-foreground">Facebook: facebook.com/greaterseedsrichmarisacademy</span>
                  </div>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default HowToApply;