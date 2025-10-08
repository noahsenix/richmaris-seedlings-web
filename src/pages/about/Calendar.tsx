import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar as CalendarIcon } from "lucide-react";
import heroSchool from "@/assets/hero-school.jpg";
import library from "@/assets/library.jpg";

const Calendar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const backgroundImages = [heroSchool, library];

  const academicYear = [
    {
      term: "First Term",
      start: "September 11, 2024",
      end: "December 15, 2024",
      events: [
        { date: "Sept 11", event: "Resumption - First Term" },
        { date: "Oct 1", event: "Independence Day (Holiday)" },
        { date: "Nov 8-9", event: "Mid-Term Break" },
        { date: "Nov 22-30", event: "First Term Examinations" },
        { date: "Dec 15", event: "End of First Term" },
      ],
    },
    {
      term: "Second Term",
      start: "January 8, 2025",
      end: "April 5, 2025",
      events: [
        { date: "Jan 8", event: "Resumption - Second Term" },
        { date: "Feb 14", event: "Founder's Day Celebration" },
        { date: "Feb 21-22", event: "Mid-Term Break" },
        { date: "Mar 21-29", event: "Second Term Examinations" },
        { date: "April 5", event: "End of Second Term" },
      ],
    },
    {
      term: "Third Term",
      start: "April 28, 2025",
      end: "July 18, 2025",
      events: [
        { date: "April 28", event: "Resumption - Third Term" },
        { date: "May 1", event: "Workers Day (Holiday)" },
        { date: "May 29", event: "Democracy Day (Holiday)" },
        { date: "June 12", event: "Democracy Day (Holiday)" },
        { date: "June 13-14", event: "Mid-Term Break" },
        { date: "July 4-12", event: "Final Examinations" },
        { date: "July 18", event: "Graduation & Prize Giving Day" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <BackgroundSlider images={backgroundImages} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <WhatsAppButton />

      <main className="relative container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <CalendarIcon className="w-16 h-16 mx-auto text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Academic Calendar 2024/2025
            </h1>
            <p className="text-xl text-muted-foreground">
              Important Dates & School Events
            </p>
            <Button variant="default" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Download Full Calendar (PDF)
            </Button>
          </div>

          <div className="grid gap-8">
            {academicYear.map((term, index) => (
              <Card key={index} className="p-8 bg-card/95 backdrop-blur-sm animate-fade-in">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <h2 className="text-3xl font-bold text-primary">{term.term}</h2>
                    <div className="text-foreground">
                      <p className="text-sm font-medium">Term Duration</p>
                      <p className="text-lg">
                        {term.start} - {term.end}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Dates</h3>
                    {term.events.map((item, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="flex items-center gap-4 p-4 bg-accent/50 rounded-lg hover:bg-accent/70 transition-colors"
                      >
                        <div className="flex-shrink-0 w-20 text-center">
                          <span className="font-bold text-primary">{item.date}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-foreground">{item.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">General Information</h2>
            <div className="grid md:grid-cols-2 gap-6 text-foreground">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">School Hours</h3>
                <p className="text-muted-foreground">
                  <strong>Nursery & Primary:</strong> 8:00 AM - 2:00 PM<br />
                  <strong>Secondary:</strong> 8:00 AM - 3:30 PM
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Contact Information</h3>
                <p className="text-muted-foreground">
                  Phone: +234 805 848 3524<br />
                  Location: Off GGSSS Road, Kuje, Abuja
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent/50 rounded-lg">
              <p className="text-sm text-foreground">
                <strong>Note:</strong> This calendar is subject to change. Parents will be notified 
                of any updates via SMS, email, or the school portal. Please check regularly for the 
                most current information.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Calendar;