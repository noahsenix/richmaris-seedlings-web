import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NurserySection from "./pages/sections/NurserySection";
import PrimarySection from "./pages/sections/PrimarySection";
import SecondarySection from "./pages/sections/SecondarySection";
import Gallery from "./pages/Gallery";
import OnlineApplication from "./pages/admissions/OnlineApplication";
import HowToApply from "./pages/admissions/HowToApply";
import FAQ from "./pages/admissions/FAQ";
import Welcome from "./pages/about/Welcome";
import History from "./pages/about/History";
import Calendar from "./pages/about/Calendar";
import Policies from "./pages/about/Policies";
import Board from "./pages/about/Board";
import Counseling from "./pages/about/Counseling";
import Boarding from "./pages/about/Boarding";
import LatestNews from "./pages/news-events/LatestNews";
import Newsletter from "./pages/news-events/Newsletter";
import Videos from "./pages/news-events/Videos";
import Curriculum from "./pages/information/Curriculum";
import ITPrograms from "./pages/information/ITPrograms";
import Leadership from "./pages/information/Leadership";
import Sports from "./pages/information/Sports";
import Career from "./pages/information/Career";
import VirtualTour from "./pages/information/VirtualTour";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Section Pages */}
          <Route path="/sections/nursery" element={<NurserySection />} />
          <Route path="/sections/primary" element={<PrimarySection />} />
          <Route path="/sections/secondary" element={<SecondarySection />} />
          
          {/* Gallery */}
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Admissions */}
          <Route path="/admissions/apply" element={<HowToApply />} />
          <Route path="/admissions/faq" element={<FAQ />} />
          <Route path="/admissions/online-application" element={<OnlineApplication />} />
          
          {/* About Pages */}
          <Route path="/about/welcome" element={<Welcome />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/calendar" element={<Calendar />} />
          <Route path="/about/policies" element={<Policies />} />
          <Route path="/about/board" element={<Board />} />
          <Route path="/about/counseling" element={<Counseling />} />
          <Route path="/about/boarding" element={<Boarding />} />
          
          {/* News & Events */}
          <Route path="/news-events/latest" element={<LatestNews />} />
          <Route path="/news-events/newsletter" element={<Newsletter />} />
          <Route path="/news-events/videos" element={<Videos />} />
          
          {/* Information */}
          <Route path="/information/curriculum" element={<Curriculum />} />
          <Route path="/information/it-programs" element={<ITPrograms />} />
          <Route path="/information/leadership" element={<Leadership />} />
          <Route path="/information/sports" element={<Sports />} />
          <Route path="/information/career" element={<Career />} />
          <Route path="/information/virtual-tour" element={<VirtualTour />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
