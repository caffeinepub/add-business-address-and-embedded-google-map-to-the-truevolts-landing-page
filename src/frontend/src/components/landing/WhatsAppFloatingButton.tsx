import { SiWhatsapp } from 'react-icons/si';

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/919908665239"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
    >
      <SiWhatsapp className="w-7 h-7" />
    </a>
  );
}
