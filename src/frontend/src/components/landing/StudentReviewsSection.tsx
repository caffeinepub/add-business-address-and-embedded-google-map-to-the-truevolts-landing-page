import { SECTION_PADDING, SECTION_TITLE, CARD_STYLES } from './landingTheme';
import { Quote } from 'lucide-react';

const studentReviews = [
  {
    name: 'Rajesh Kumar',
    location: 'Hyderabad, Telangana',
    photo: '/assets/generated/truevolts-student-1.dim_512x512.jpg',
    review: 'TRUEVOLTS provided excellent training in AI/ML. The hands-on approach and expert guidance helped me land my dream job. Highly recommended!',
  },
  {
    name: 'Priya Reddy',
    location: 'Warangal, Telangana',
    photo: '/assets/generated/truevolts-student-2.dim_512x512.jpg',
    review: 'The software development course was comprehensive and practical. The instructors are knowledgeable and always ready to help.',
  },
  {
    name: 'Venkat Rao',
    location: 'Vijayawada, Andhra Pradesh',
    photo: '/assets/generated/truevolts-student-3.dim_512x512.jpg',
    review: 'Best training institute for technical skills. The project-based learning approach made complex concepts easy to understand.',
  },
  {
    name: 'Lakshmi Devi',
    location: 'Karimnagar, Telangana',
    photo: '/assets/generated/truevolts-student-4.dim_512x512.jpg',
    review: 'TRUEVOLTS transformed my career. The research guidance and academic project support were exceptional. Thank you!',
  },
  {
    name: 'Srinivas Chowdary',
    location: 'Guntur, Andhra Pradesh',
    photo: '/assets/generated/truevolts-student-5.dim_512x512.jpg',
    review: 'Outstanding training quality with real-world applications. The mentors are experienced professionals who genuinely care about student success.',
  },
  {
    name: 'Anitha Sharma',
    location: 'Nizamabad, Telangana',
    photo: '/assets/generated/truevolts-student-6.dim_512x512.jpg',
    review: 'The best decision I made was joining TRUEVOLTS. The curriculum is up-to-date and the learning environment is excellent.',
  },
];

export default function StudentReviewsSection() {
  return (
    <section id="reviews" className={`${SECTION_PADDING} py-20 bg-background`}>
      <div className="container mx-auto">
        <h2 className={`${SECTION_TITLE} text-center mb-12`}>Student Reviews</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentReviews.map((review, index) => (
            <div key={index} className={`${CARD_STYLES} p-6 flex flex-col`}>
              <Quote className="text-primary w-8 h-8 mb-4" />
              <p className="text-foreground/80 mb-6 flex-grow italic">"{review.review}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-foreground/60">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
