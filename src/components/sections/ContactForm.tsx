'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';
import { sendContactEmail } from '../../app/actions/contact';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.message);
      }
    } catch {
      setError('An unexpected error occurred. Please reach out to diya.chanda03@gmail.com directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface border border-hairline rounded-lg p-5 sm:p-7 md:p-8 shadow-xs w-full h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h3 className="font-serif text-lg sm:text-2xl font-bold text-text-main">
            Send a Transmission
          </h3>
          <span className="text-[10px] font-mono text-terracotta uppercase tracking-wider px-2 py-0.5 rounded border border-hairline bg-card">
            Direct Line
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-[11px] sm:text-xs font-mono font-medium text-text-sub uppercase mb-1"
            >
              Your Name <span className="text-terracotta">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="Enter your name"
              className="w-full bg-card border border-hairline focus:border-terracotta rounded-md px-3.5 sm:px-4 py-2 sm:py-2.5 text-text-main placeholder:text-text-mute text-xs sm:text-sm transition-colors outline-none focus:ring-1 focus:ring-terracotta/30"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-[11px] sm:text-xs font-mono font-medium text-text-sub uppercase mb-1"
            >
              Email Address <span className="text-terracotta">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="name@example.com"
              className="w-full bg-card border border-hairline focus:border-terracotta rounded-md px-3.5 sm:px-4 py-2 sm:py-2.5 text-text-main placeholder:text-text-mute text-xs sm:text-sm transition-colors outline-none focus:ring-1 focus:ring-terracotta/30"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-[11px] sm:text-xs font-mono font-medium text-text-sub uppercase mb-1"
            >
              Message <span className="text-terracotta">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="Write your note, collaboration proposal, or project inquiry..."
              rows={5}
              className="w-full bg-card border border-hairline focus:border-terracotta rounded-md px-3.5 sm:px-4 py-2.5 text-text-main placeholder:text-text-mute text-xs sm:text-sm transition-colors outline-none resize-none min-h-[135px] sm:min-h-[155px] focus:ring-1 focus:ring-terracotta/30"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-hover disabled:opacity-60 text-white font-mono font-medium py-2.5 sm:py-3 rounded-md shadow-xs transition-colors text-xs sm:text-sm cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Transmitting Secure Message...</span>
              </>
            ) : (
              <>
                <Send size={15} />
                <span>Send Message</span>
              </>
            )}
          </button>

          {submitted && (
            <div
              role="status"
              aria-live="polite"
              className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 rounded-md text-[11px] sm:text-xs font-mono"
            >
              <CheckCircle2 size={15} className="flex-shrink-0" />
              <span>Thank you! Your message was transmitted directly to Diya.</span>
            </div>
          )}

          {error && (
            <div
              role="alert"
              aria-live="assertive"
              className="flex items-center gap-2 p-3 bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-400 rounded-md text-[11px] sm:text-xs font-mono"
            >
              <AlertCircle size={15} className="flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </form>
      </div>

      {/* Security & Reassurance Footer Badge */}
      <div className="pt-4 mt-5 border-t border-hairline flex items-center justify-between text-[11px] font-mono text-text-mute">
        <span className="flex items-center gap-1.5 text-text-sub">
          <ShieldCheck size={13} className="text-emerald-500" />
          <span>Encrypted Direct Line</span>
        </span>
        <span>Replies usually within 24h</span>
      </div>
    </div>
  );
};

export default ContactForm;
