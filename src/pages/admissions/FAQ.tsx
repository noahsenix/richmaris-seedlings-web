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
      category: "General Admissions",
      questions: [
        {
          q: "When does the admission process begin?",
          a: "The admission process typically begins in January for the following academic year starting in September. We recommend applying early as spaces are limited."
        },
        {
          q: "What is the application fee?",
          a: "The application fee is non-refundable and covers the cost of processing your application and conducting entrance assessments. Please contact our admissions office for current fee information."
        },
        {
          q: "Can I visit the school before applying?",
          a: "Yes! We encourage prospective parents to schedule a campus tour. Please contact our admissions office to arrange a visit and meet with our staff."
        },
        {
          q: "What is the student-teacher ratio?",
          a: "We maintain small class sizes with a ratio of approximately 1:15 to ensure personalized attention for each student."
        }
      ]
    },
    {
      category: "Fees & Financial",
      questions: [
        {
          q: "What are the tuition fees?",
          a: "Tuition fees vary by year group. Please contact our admissions office for a detailed fee structure or visit our Online Application page for current rates."
        },
        {
          q: "Are there any scholarship opportunities?",
          a: "Yes, we offer merit-based scholarships and need-based financial aid. Applications for scholarships are reviewed during the admission process."
        },
        {
          q: "What payment plans are available?",
          a: "We offer flexible payment plans including termly, bi-annual, and annual payment options. Early payment discounts may also be available."
        },
        {
          q: "Are there additional fees beyond tuition?",
          a: "Additional fees may include uniforms, textbooks, extracurricular activities, field trips, and boarding (if applicable). A comprehensive fee breakdown is provided upon admission."
        }
      ]
    },
    {
      category: "Academic Programs",
      questions: [
        {
          q: "What curriculum does the school follow?",
          a: "We follow an enhanced British curriculum adapted to Nigerian educational standards, preparing students for both local and international examinations."
        },
        {
          q: "Do you offer special needs support?",
          a: "Yes, we have dedicated support staff for students with learning differences. Please discuss your child's specific needs during the application process."
        },
        {
          q: "What extracurricular activities are available?",
          a: "We offer a wide range of activities including sports, music, drama, debate, robotics, coding, art, and various clubs. Students are encouraged to explore their interests."
        },
        {
          q: "How do you prepare students for university?",
          a: "Our career counseling program begins in Year 9, providing guidance on subject selection, university applications, and career pathways. We have partnerships with universities worldwide."
        }
      ]
    },
    {
      category: "Transfer Students",
      questions: [
        {
          q: "Do you accept transfer students?",
          a: "Yes, we accept transfer students subject to space availability and successful completion of our entrance assessment."
        },
        {
          q: "What documents are needed for transfer students?",
          a: "Transfer students need to provide previous school reports, transcripts, transfer certificate, birth certificate, and immunization records."
        },
        {
          q: "How is credit given for previous schoolwork?",
          a: "We evaluate transcripts from previous schools and award appropriate placement based on academic records and assessment results."
        }
      ]
    },
    {
      category: "Boarding",
      questions: [
        {
          q: "Is boarding available?",
          a: "Yes, we offer boarding facilities for students from Year 4 onwards. Our boarding houses provide a safe, supervised, and nurturing environment."
        },
        {
          q: "What are the boarding fees?",
          a: "Boarding fees are additional to tuition fees. Please contact our admissions office for detailed boarding fee information."
        },
        {
          q: "Can students go home on weekends?",
          a: "Yes, weekly boarders go home every Friday and return on Sunday evenings. We also have term-time boarding options."
        }
      ]
    },
    {
      category: "Health & Safety",
      questions: [
        {
          q: "What medical facilities are available?",
          a: "We have a well-equipped clinic staffed by qualified nurses. We also have partnerships with nearby hospitals for emergencies."
        },
        {
          q: "What is your policy on student safety?",
          a: "Student safety is our top priority. We have comprehensive security measures, supervised campus access, and strict child protection policies."
        },
        {
          q: "How do you handle medical emergencies?",
          a: "We have trained first aid staff on campus and established protocols for medical emergencies, including immediate parent notification and transportation to medical facilities."
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
                  <strong>Phone:</strong> (+234) 808 939 4474
                </div>
                <div className="text-foreground">
                  <strong>Email:</strong> info@greaterseedsrichmarisacademy.org
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