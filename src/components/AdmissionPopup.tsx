import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import admissionBanner from "@/assets/admission-banner.png";

interface AdmissionPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export const AdmissionPopup = ({ isVisible, onClose }: AdmissionPopupProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl animate-scale-in">
        <Button
          onClick={onClose}
          variant="destructive"
          size="icon"
          className="absolute top-4 right-4 z-10 rounded-full"
        >
          <X className="h-6 w-6" />
        </Button>
        <img
          src={admissionBanner}
          alt="School Admission Open for 2025/2026"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
