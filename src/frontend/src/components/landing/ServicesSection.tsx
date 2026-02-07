import { Brain, Code, Book, GraduationCap } from 'lucide-react';
import { SECTION_PADDING } from './landingTheme';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Deep learning and intelligent automation projects.',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Web, cloud and enterprise application development.',
  },
  {
    icon: Book,
    title: 'Research Publications',
    description: 'IEEE paper drafting and journal publication support.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Projects',
    description: 'Final year and industry training implementations.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={`${SECTION_PADDING} bg-gradient-to-b from-background to-accent/20`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-card rounded-2xl p-8 border-2 border-border/50 hover:border-primary/50 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
