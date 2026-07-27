import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/content";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="hover-float fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
    >
      <MessageCircle size={28} fill="currentColor" strokeWidth={0} />
    </a>
  );
}
