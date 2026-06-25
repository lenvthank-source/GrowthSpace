"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";

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
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Let&apos;s Grow Your Business
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Book a free 30-minute strategy call and discover exactly how GrowthSpare
            can help you achieve your marketing goals.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <h2 className="font-black text-gray-900 text-xl mb-5">Contact Details</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Phone</p>
                      <a href="tel:+919560725039" className="text-gray-500 text-sm hover:text-amber-500 transition-colors">
                        +91 9560725039
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">WhatsApp</p>
                      <a
                        href="https://wa.me/919560725039"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 text-sm hover:text-green-500 transition-colors"
                      >
                        Chat with us directly
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Email</p>
                      <a href="mailto:info@growthspare.com" className="text-gray-500 text-sm hover:text-blue-500 transition-colors">
                        info@growthspare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-rose-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Office</p>
                      <p className="text-gray-500 text-sm">
                        Delhi NCR<br />New Delhi, India – 110001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Business Hours</p>
                      <p className="text-gray-500 text-sm">
                        Mon – Sat: 9:00 AM – 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919560725039?text=Hi%2C%20I%27d%20like%20to%20discuss%20digital%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold px-5 py-4 rounded-2xl transition-colors w-full justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 max-w-sm">
                      Thank you for reaching out. Our team will get back to you within
                      24 hours. For urgent queries, WhatsApp us directly.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-black text-gray-900 text-2xl mb-6">
                      Request a Free Strategy Session
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 text-gray-900 text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 text-gray-900 text-sm transition-colors"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 99999 99999"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 text-gray-900 text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your company"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 text-gray-900 text-sm transition-colors"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Services Interested In
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 text-gray-900 text-sm transition-colors bg-white"
                          >
                            <option value="">Select a service</option>
                            {services.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Monthly Budget
                          </label>
                          <select
                            name="budget"
                            value={form.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 text-gray-900 text-sm transition-colors bg-white"
                          >
                            <option value="">Select budget range</option>
                            {budgets.map((b) => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us about your business goals and challenges..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 text-gray-900 text-sm transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-sm w-full justify-center"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-80 bg-gray-200 relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Office location"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg px-8 py-5 text-center">
            <MapPin className="w-6 h-6 text-amber-500 mx-auto mb-2" />
            <p className="font-bold text-gray-900">GrowthSpare HQ</p>
            <p className="text-gray-500 text-sm">Delhi NCR, New Delhi, India</p>
          </div>
        </div>
      </section>
    </>
  );
}
