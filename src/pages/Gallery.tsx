import { Header } from "@/components/Header";
import { MenuSidebar } from "@/components/MenuSidebar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackgroundSlider } from "@/components/BackgroundSlider";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import heroSchool from "@/assets/hero-school.jpg";
import teacherWelcome from "@/assets/teacher-welcome.jpg";
import nurseryStudents from "@/assets/nursery-students.jpg";
import primaryStudents from "@/assets/primary-students.jpg";
import secondaryStudents from "@/assets/secondary-students.jpg";
import graduation from "@/assets/graduation.jpg";
import sportsActivity from "@/assets/sports-activity.jpg";
import achievements from "@/assets/achievements.jpg";
import itProgram from "@/assets/it-program.jpg";
import library from "@/assets/library.jpg";

const Gallery = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const backgroundImages = [heroSchool, library, itProgram];

  const galleryCategories = [
    {
      title: "Campus & Facilities",
      images: [heroSchool, library, itProgram],
    },
    {
      title: "Nursery School",
      images: [nurseryStudents],
    },
    {
      title: "Primary School",
      images: [primaryStudents],
    },
    {
      title: "Secondary School",
      images: [secondaryStudents],
    },
    {
      title: "Teachers & Staff",
      images: [teacherWelcome],
    },
    {
      title: "Sports & Activities",
      images: [sportsActivity],
    },
    {
      title: "Achievements & Awards",
      images: [achievements],
    },
    {
      title: "Graduation Ceremonies",
      images: [graduation],
    },
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundSlider images={backgroundImages} />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <WhatsAppButton />

      <main className="relative py-16 px-4">
        <div className="container mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-center text-primary">
              Gallery
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Explore the vibrant life at Greater Seeds Richmaris Academy through our photo gallery.
            </p>

            {galleryCategories.map((category, idx) => (
              <div key={idx} className="mb-12 animate-slide-up">
                <h2 className="text-3xl font-bold mb-6 text-primary">{category.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.images.map((image, imgIdx) => (
                    <Card key={imgIdx} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card/90 backdrop-blur">
                      <img
                        src={image}
                        alt={`${category.title} - Image ${imgIdx + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
