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
      title: "1. AGE REQUIREMENT",
      content: "Students seeking admission must meet the age requirements as specified below. Children who do not meet the age entry requirements will not be permitted to sit the entrance examination."
    },
    {
      title: "2. COMPLETING THE APPLICATION FORM",
      content: "Purchase and complete the application form from the Greater Seeds Richmaris Academy Portal. Forms are only sold to parents whose child/ward meets the school's age requirement. Provide accurate information and attach all required documents."
    },
    {
      title: "3. APPLICATION REQUIREMENTS/SUPPORTING DOCUMENTS",
      content: "Required documents include: Birth Certificate, Recent Passport Photographs, Previous School Report (if applicable), Medical Records/Immunization Card, and Parent/Guardian Identification."
    },
    {
      title: "4. ASSESSMENT",
      content: "Applicants will be assessed through age-appropriate examinations or oral interviews. The assessment evaluates academic readiness, social skills, and overall preparedness for the respective year group."
    },
    {
      title: "5. ADMISSION PROCESSING PERIOD",
      content: "Applications are processed within 2-3 weeks. Parents will be notified via phone, email, or SMS regarding their child's admission status and next steps."
    },
    {
      title: "6. REGISTRATION FORMS/SUPPORTING DOCUMENTS",
      content: "Upon successful admission, complete registration forms and submit remaining documents including acceptance letter acknowledgment and initial fees payment."
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
                Thank you for choosing Greater Seeds Richmaris Academy for your child/ward. The application form 
                into our School can be purchased from Greater Seeds Richmaris Academy Portal. Application forms 
                will only be sold to parents whose child/ward meets the school's age requirement.
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

              <h3 className="text-2xl font-bold text-primary mb-6">Age Requirements by Year Group</h3>
              <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                {ageRequirements.map((req, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="font-medium text-foreground">{req.year}</span>
                    <span className="text-muted-foreground">{req.age}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mt-8">
                <p className="font-semibold text-foreground">
                  <strong>Important Note:</strong> Most children are sixteen years of age on average at the point 
                  of graduation from secondary school. Children who do not meet the age entry requirements will 
                  not be permitted to sit the entrance examination.
                </p>
              </div>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-primary mb-6">Where to Submit Documents?</h3>
              <p className="text-foreground mb-4">
                Documents not submitted through the online method can be mailed to:
              </p>
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <span className="text-foreground">(+234) 808 939 4474</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <span className="text-foreground">info@greaterseedsrichmarisacademy.org</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <span className="text-foreground">
                      Greater Seeds Richmaris Academy Campus<br />
                      [School Address]
                    </span>
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