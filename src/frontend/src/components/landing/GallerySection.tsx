import { SECTION_PADDING } from './landingTheme';

const galleryImages = [
  {
    src: '/assets/generated/truevolts-gallery-new-1.dim_1200x800.jpg',
    alt: 'Modern training classroom with students',
  },
  {
    src: '/assets/generated/truevolts-gallery-new-2.dim_1200x800.jpg',
    alt: 'Students engaged in hands-on technical training',
  },
  {
    src: '/assets/generated/truevolts-gallery-new-3.dim_1200x800.jpg',
    alt: 'Interactive learning session with instructors',
  },
  {
    src: '/assets/generated/truevolts-gallery-new-4.dim_1200x800.jpg',
    alt: 'Collaborative project work environment',
  },
  {
    src: '/assets/generated/truevolts-gallery-new-5.dim_1200x800.jpg',
    alt: 'Advanced technology training lab',
  },
  {
    src: '/assets/generated/truevolts-gallery-new-6.dim_1200x800.jpg',
    alt: 'Students working on AI and ML projects',
  },
  {
    src: '/assets/generated/truevolts-gallery-new-7.dim_1200x800.jpg',
    alt: 'Professional development workshop session',
  },
  {
    src: '/assets/generated/truevolts-gallery-new-8.dim_1200x800.jpg',
    alt: 'Research and development training facility',
  },
  {
    src: '/assets/generated/truevolts-gallery-new-9.dim_1200x800.jpg',
    alt: 'Group learning and mentorship activities',
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className={`${SECTION_PADDING} bg-gradient-to-b from-accent/20 to-background`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Training Environment
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image container with aspect ratio */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Optional: Add image number badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-sm font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
