"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionBadge from "@/components/ui/SectionBadge";

const services = [
  "SEO Services",
  "Google Ads / PPC",
  "Social Media Marketing",
  "Meta Ads",
  "Content Marketing",
  "Email Marketing",
  "Website Design & Development",
  "Branding & Creative Design",
  "Analytics & Reporting",
  "Full-Service Marketing",
];

const budgets = [
  "Under ₹15,000/month",
  "₹15,000 – ₹35,000/month",
  "₹35,000 – ₹75,000/month",
  "₹75,000 – ₹1,50,000/month",
  "₹1,50,000+/month",
  "Not sure yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", service: "", budget: "", message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-[#EFEFEF] py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <FadeIn>
            <SectionBadge label="Get in Touch" />
            <h1 className="axion-heading text-[#111827] font-display mt-6 mb-6">
              Let&apos;s Grow Your Business
            </h1>
            <p className="font-sans text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute strategy call and discover exactly how GrowthSpare
              can help you achieve your marketing goals.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <FadeIn>
                <div className="bg-[#EFEFEF] rounded-2xl p-8 hover-lift">
                  <h2 className="font-display font-medium text-[#111827] text-2xl mb-6">Contact Details</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-[#F26522]" />
                      </div>
                      <div>
                        <p className="font-sans font-semibold text-[#111827] text-sm mb-1">Phone</p>
                        <a href="tel:+919560725039" className="font-sans text-[#6B7280] text-sm hover:text-[#F26522] transition-colors">
                          +91 9560725039
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                        <MessageCircle className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <p className="font-sans font-semibold text-[#111827] text-sm mb-1">WhatsApp</p>
                        <a
                          href="https://wa.me/919560725039"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-[#6B7280] text-sm hover:text-green-500 transition-colors"
                        >
                          Chat with us directly
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-sans font-semibold text-[#111827] text-sm mb-1">Email</p>
                        <a href="mailto:info@growthspare.com" className="font-sans text-[#6B7280] text-sm hover:text-blue-500 transition-colors">
                          info@growthspare.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-rose-500" />
                      </div>
                      <div>
                        <p className="font-sans font-semibold text-[#111827] text-sm mb-1">Office</p>
                        <p className="font-sans text-[#6B7280] text-sm leading-relaxed">
                          Indure House, 2nd Floor, Savitri Cinema Complex GK-II, New Delhi, Delhi 110048
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <p className="font-sans font-semibold text-[#111827] text-sm mb-1">Business Hours</p>
                        <p className="font-sans text-[#6B7280] text-sm leading-relaxed">
                          Mon – Sat: 8:30 AM – 4:30 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* WhatsApp CTA */}
              <FadeIn delay={0.1}>
                <a
                  href="https://wa.me/919560725039?text=Hi%2C%20I%27d%20like%20to%20discuss%20digital%20marketing%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold px-6 py-4 rounded-2xl transition-colors w-full justify-center hover-lift"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <div className="bg-[#EFEFEF] rounded-2xl p-8 hover-lift">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-3xl font-display font-medium text-[#111827] mb-4">
                        Message Sent!
                      </h3>
                      <p className="font-sans text-[#6B7280] max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. Our team will get back to you within
                        24 hours. For urgent queries, WhatsApp us directly.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-display font-medium text-[#111827] text-3xl mb-8">
                        Request a Free Strategy Session
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-sans font-semibold text-[#111827] mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Your full name"
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 text-[#111827] text-sm transition-colors bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-sans font-semibold text-[#111827] mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              placeholder="you@company.com"
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 text-[#111827] text-sm transition-colors bg-white"
                            />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-sans font-semibold text-[#111827] mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+91 99999 99999"
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 text-[#111827] text-sm transition-colors bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-sans font-semibold text-[#111827] mb-2">
                              Company Name
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Your company"
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 text-[#111827] text-sm transition-colors bg-white"
                            />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-sans font-semibold text-[#111827] mb-2">
                              Services Interested In
                            </label>
                            <select
                              name="service"
                              value={form.service}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 text-[#111827] text-sm transition-colors bg-white"
                            >
                              <option value="">Select a service</option>
                              {services.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-sans font-semibold text-[#111827] mb-2">
                              Monthly Budget
                            </label>
                            <select
                              name="budget"
                              value={form.budget}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 text-[#111827] text-sm transition-colors bg-white"
                            >
                              <option value="">Select budget range</option>
                              {budgets.map((b) => (
                                <option key={b} value={b}>{b}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-sans font-semibold text-[#111827] mb-2">
                            Message
                          </label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Tell us about your business goals and challenges..."
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 text-[#111827] text-sm transition-colors resize-none bg-white"
                          />
                        </div>
                        <button
                          type="submit"
                          className="flex items-center gap-3 bg-[#F26522] hover:bg-[#e05a1a] text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-sm w-full justify-center"
                        >
                          <Send className="w-5 h-5" />
                          Send Message
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-[400px] bg-gray-200 relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Office location"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm mx-4 hover-lift">
              <div className="w-12 h-12 bg-[#F26522]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-[#F26522]" />
              </div>
              <p className="font-display font-medium text-xl text-[#111827] mb-2">GrowthSpare HQ</p>
              <p className="font-sans text-[#6B7280] text-sm leading-relaxed">Indure House, 2nd Floor, Savitri Cinema Complex GK-II, New Delhi, Delhi 110048</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
