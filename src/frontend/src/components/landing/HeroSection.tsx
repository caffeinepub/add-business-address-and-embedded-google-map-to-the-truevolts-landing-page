import { SECTION_PADDING } from './landingTheme';

export default function HeroSection() {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 ${SECTION_PADDING} pt-24`}
    >
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Corporate Training & Research Development Center
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          UG | PG | Diploma | IEEE Projects | Publications |<br className="hidden sm:inline" />
          PhD Thesis Support | Industry Ready Training
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
        >
          Get Guidance
        </a>
      </div>
    </section>
  );
}
