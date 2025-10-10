import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import heroSchool from "@/assets/hero-school.jpg";

const FAQ = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const faqs = [
    {
      category: "General Information",
      questions: [
        {
          q: "What ages do you accept?",
          a: "We accept Nursery, Primary and Secondary students. Please call 08137854567 for current intake information and specific age requirements."
        },
        {
          q: "How do I register my child?",
          a: "Call 08137854567 or visit the school with the required documents: child's birth certificate, 2 passport photos, and the registration fee."
        },
        {
          q: "Do you have boarding facilities?",
          a: "Please confirm boarding availability by calling the school at 08137854567."
        },
        {
          q: "Where is the school located?",
          a: "We are located Opposite AirpyGuest Inn, Along GGSSS road, Kuje, Abuja, Nigeria. Call ahead to confirm the best entrance and visiting hours."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundSlider images={[heroSchool]} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about admissions and school life
            </p>
          </div>

          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6 bg-card/95 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-primary mb-4">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}

          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Still Have Questions?</h3>
              <p className="text-foreground">
                Our admissions team is here to help! Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                <div className="text-foreground">
                  <strong>Phone:</strong> 08137854567 • 08033100284 • 08152909415
                </div>
                <div className="text-foreground">
                  <strong>Facebook:</strong> facebook.com/greaterseedsrichmarisacademy
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FAQ;