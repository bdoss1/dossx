'use client';

import { useState } from 'react';
import RevealWrapper from '../animation/RevealWrapper';

const ContactForm = () => {
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState<string | null>(null);
  const [error, setError]       = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    role: '',
    preferredContact: 'Email',
    phone: '',
    timeline: '',
    heardAbout: '',
    message: '',
  });

  const labelCls =
    'text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100';
  const inputBase =
    'mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] ' +
    'tracking-[0.4px] text-[#000] dark:text-backgroundBody ' +
    'focus:border-primary focus:outline-none dark:border-dark dark:bg-dark';
  const selectBase =
    'mt-3 w-full appearance-none text-ellipsis border bg-backgroundBody px-5 py-4 ' +
    'indent-px text-xl leading-[1.4] tracking-[0.4px] text-[#000] ' +
    'dark:text-backgroundBody focus:border-primary focus:outline-none ' +
    'dark:border-dark dark:bg-dark';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body   : JSON.stringify(formData),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || 'Server error');
      }

      setSuccess('Thanks—your message is on its way! ✉️');
      setFormData({
        name: '',
        company: '',
        email: '',
        role: '',
        preferredContact: 'Email',
        phone: '',
        timeline: '',
        heardAbout: '',
        message: '',
      });
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper
          as="form"
          onSubmit={handleSubmit}
          className="reveal-me mx-auto grid max-w-[800px] grid-cols-1 gap-[30px] md:grid-cols-2"
        >
          {/* Full Name */}
          <div className="md:col-span-full">
            <label htmlFor="name" className={labelCls}>Full Name*</label>
            <input
              required name="name" id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={inputBase}
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className={labelCls}>Company Name</label>
            <input
              name="company" id="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className={inputBase}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelCls}>Work Email*</label>
            <input
              required type="email" name="email" id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className={inputBase}
            />
          </div>

          {/* Role */}
          <div className="md:col-span-full">
            <label htmlFor="role" className={labelCls}>Your Role</label>
            <input
              name="role" id="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g. CTO, Product Manager"
              className={inputBase}
            />
          </div>

          {/* Preferred Contact */}
          <div>
            <label htmlFor="preferredContact" className={labelCls}>Preferred Contact*</label>
            <select
              required name="preferredContact" id="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
              className={selectBase}
            >
              <option>Email</option>
              <option>Phone</option>
            </select>
          </div>

          {/* Phone (if Phone selected) */}
          {formData.preferredContact === 'Phone' && (
            <div>
              <label htmlFor="phone" className={labelCls}>Phone Number*</label>
              <input
                required name="phone" id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className={inputBase}
              />
            </div>
          )}

          {/* Desired Timeline */}
          <div className="relative">
            <label htmlFor="timeline" className={labelCls}>
              Desired Timeline*
            </label>
            <select
              required
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={selectBase}
            >
              <option>Immediate</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>Flexible</option>
            </select>
            <span className="pointer-events-none absolute right-5 top-1/2 translate-y-1/3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="inline dark:hidden">
                <path d="M6 9l6 6 6-6" stroke="black" strokeOpacity=".7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="hidden dark:inline">
                <path d="M6 9l6 6 6-6" stroke="white" strokeOpacity=".7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          {/* Heard About */}
          <div className="md:col-span-full">
            <label htmlFor="heardAbout" className={labelCls}>How did you hear about us?</label>
            <input
              name="heardAbout" id="heardAbout"
              value={formData.heardAbout}
              onChange={handleChange}
              placeholder="e.g. LinkedIn, Referral"
              className={inputBase}
            />
          </div>

          {/* Message */}
          <div className="md:col-span-full">
            <label htmlFor="message" className={labelCls}>Message*</label>
            <textarea
              required name="message" id="message" rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project goals and timeline"
              className={inputBase}
            />
          </div>

          {/* Submit */}
          <div className="col-span-full sm:mt-14 md:mx-auto">
            <button
              type="submit" disabled={loading}
              className="rv-button rv-button-primary block w-full md:inline-block md:w-auto"
            >
              <div className="rv-button-top">
                <span>{loading ? 'Sending…' : 'Send Message'}</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">{loading ? 'Sending…' : 'Send Message'}</span>
              </div>
            </button>

            {success && <p className="mt-4 text-green-600">{success}</p>}
            {error   && <p className="mt-4 text-red-600">{error}</p>}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default ContactForm;