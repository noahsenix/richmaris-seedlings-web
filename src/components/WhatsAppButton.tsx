import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "2348137854567"; // Updated to correct number
    const message = "Hello, I would like to know more about Greater Seeds Richmaris Academy.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 shadow-2xl animate-pulse hover:animate-none bg-[#25D366] hover:bg-[#20BA5A] text-white"
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      WhatsApp Us
    </Button>
  );
};
