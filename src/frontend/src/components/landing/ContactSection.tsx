import { useState } from 'react';
import { useSubmitContactMessage } from '../../hooks/useQueries';
import { SECTION_PADDING, SECTION_TITLE } from './landingTheme';
import { Loader2, CheckCircle2 } from 'lucide-react';
import ContactAddressMap from './ContactAddressMap';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const submitMutation = useSubmitContactMessage();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }

    if (!email.trim() || !validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      await submitMutation.mutateAsync({ name: name.trim(), email: email.trim(), message: message.trim() });
      setName('');
      setEmail('');
      setMessage('');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className={`${SECTION_PADDING} py-20 bg-background`}>
      <div className="container mx-auto max-w-7xl">
        <h2 className={`${SECTION_TITLE} text-center mb-12`}>Contact Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div>
            {showSuccess && (
              <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center gap-3 text-primary">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <p className="font-medium">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring text-foreground resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={submitMutation.isPending}
                className="w-full px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Address and Map */}
          <div>
            <ContactAddressMap />
          </div>
        </div>
      </div>
    </section>
  );
}
