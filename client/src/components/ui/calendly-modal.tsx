import { InlineWidget } from "react-calendly";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] h-[700px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Planifier un Rendez-vous</DialogTitle>
          <DialogDescription>
            Choisissez un créneau qui vous convient pour discuter de vos besoins en IA
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 h-[600px]">
          <InlineWidget
            url="https://calendly.com/axel-automate/appel-decouverte"
            styles={{ height: '100%', width: '100%' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}