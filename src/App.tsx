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
          <Route path="/admissions/apply" element={<OnlineApplication />} />
          <Route path="/admissions/faq" element={<OnlineApplication />} />
          <Route path="/admissions/online-application" element={<OnlineApplication />} />
          
          {/* About Pages - placeholder routes */}
          <Route path="/about/welcome" element={<Index />} />
          <Route path="/about/history" element={<Index />} />
          <Route path="/about/calendar" element={<Index />} />
          <Route path="/about/policies" element={<Index />} />
          <Route path="/about/board" element={<Index />} />
          <Route path="/about/counseling" element={<Index />} />
          <Route path="/about/boarding" element={<Index />} />
          
          {/* News & Events - placeholder routes */}
          <Route path="/news-events/latest" element={<Index />} />
          <Route path="/news-events/newsletter" element={<Index />} />
          <Route path="/news-events/videos" element={<Index />} />
          
          {/* Information - placeholder routes */}
          <Route path="/information/curriculum" element={<Index />} />
          <Route path="/information/it-programs" element={<Index />} />
          <Route path="/information/leadership" element={<Index />} />
          <Route path="/information/sports" element={<Index />} />
          <Route path="/information/career" element={<Index />} />
          <Route path="/information/virtual-tour" element={<Index />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
