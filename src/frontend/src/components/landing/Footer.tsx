import { Heart } from 'lucide-react';
import { SECTION_PADDING } from './landingTheme';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${SECTION_PADDING} py-8 bg-accent/30 border-t border-border`}>
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
          <span>© {currentYear} TRUEVOLTS.</span>
          <span className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
