import {
  SECTION_PADDING,
  CORPORATE_SECTION_WRAPPER,
  CORPORATE_SECTION_TITLE,
  CORPORATE_CARD_BASE,
  CORPORATE_CARD_HOVER,
  CORPORATE_CARD_PADDING,
} from './landingTheme';

const programs = [
  'B.Tech Training',
  'M.Tech Research',
  'MBA / MCA Projects',
  'Diploma Training',
  'PhD Thesis Support',
  'Internship Programs',
];

export default function TrainingProgramsSection() {
  return (
    <section id="training" className={`${SECTION_PADDING} ${CORPORATE_SECTION_WRAPPER} bg-background`}>
      <div className="container mx-auto">
        <h2 className={CORPORATE_SECTION_TITLE}>Training Programs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {programs.map((program) => (
            <div
              key={program}
              className={`${CORPORATE_CARD_BASE} ${CORPORATE_CARD_HOVER} ${CORPORATE_CARD_PADDING} text-center`}
            >
              <h3 className="text-lg font-semibold text-card-foreground">{program}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
