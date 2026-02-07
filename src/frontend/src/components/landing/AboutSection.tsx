import { SECTION_PADDING, SECTION_TITLE } from './landingTheme';

export default function AboutSection() {
  return (
    <section id="about" className={`${SECTION_PADDING} py-20 bg-background`}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/assets/generated/truevolts-institute-new.dim_1200x800.jpg"
              alt="TRUEVOLTS Research and Training Institute"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className={SECTION_TITLE}>About TRUEVOLTS</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TRUEVOLTS provides professional academic training, research guidance and industry oriented project
              development. We support UG, PG and PhD scholars with complete technical solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
