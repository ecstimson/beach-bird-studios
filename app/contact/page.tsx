"use client";

import type { Metadata } from "next";
import { useState } from "react";

// Note: Metadata should be in a separate file for client components
// export const metadata: Metadata = {
//   title: "Contact Beach Bird Studios - Get Your Complete SEO Website",
//   description: "Ready to dominate search results? Contact Beach Bird Studios for a complete SEO website that outranks competitors and maximizes local visibility.",
// };

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  website: string;
  services: string[];
  budget: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    services: [] as string[],
    budget: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would integrate with your form handling service
    // For now, we'll just simulate a submission
    setTimeout(() => {
      alert("Thank you for your inquiry! We'll be in touch within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        website: "",
        services: [] as string[],
        budget: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const services = [
    "Complete SEO Website Package",
    "Local SEO Domination",
    "AI Search Optimization",
    "Google Business Profile Management",
    "Review & Citation Building",
    "Existing Website SEO Audit"
  ];

  return (
    <div className="bg-beach-white min-h-screen">
      <section className="py-24 bg-gradient-to-br from-beach-light to-beach-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-beach-gold/20 text-beach-gold rounded-full font-semibold mb-6">
              Get Started Today
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-beach-teal mb-6">
              Ready to <span className="text-beach-blue">Dominate Search?</span>
            </h1>
            <p className="font-body text-xl text-beach-teal/80 max-w-3xl mx-auto">
              Let&apos;s discuss your complete SEO website that will outrank competitors 
              and maximize your visibility across all search platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-4xl font-bold text-beach-teal mb-8">
                Let&apos;s Build Your Success
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-beach-teal mb-2">
                      Complete SEO Strategy
                    </h3>
                    <p className="font-body text-beach-teal/70">
                      We&apos;ll analyze your market, competitors, and opportunities to build 
                      a website that captures every search opportunity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-beach-teal mb-2">
                      Fast Implementation
                    </h3>
                    <p className="font-body text-beach-teal/70">
                      Your complete SEO website will be live within 4-6 weeks, 
                      with ranking improvements visible immediately.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📈</div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-beach-teal mb-2">
                      Measurable Results
                    </h3>
                    <p className="font-body text-beach-teal/70">
                      Track your progress with detailed reporting on rankings, 
                      traffic, leads, and local visibility metrics.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-white rounded-2xl shadow-premium">
                <h3 className="font-heading text-lg font-semibold text-beach-teal mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3 font-body text-beach-teal/80">
                  <div className="flex items-center gap-3">
                    <span className="text-beach-blue">📧</span>
                    <a href="mailto:hello@beachbirdstudios.com" className="hover:text-beach-blue">
                      hello@beachbirdstudios.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-beach-blue">📱</span>
                    <a href="tel:+1-555-BEACH-01" className="hover:text-beach-blue">
                      (555) BEACH-01
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-beach-blue">💬</span>
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-premium-hover">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body font-medium text-beach-teal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                      className="w-full px-4 py-3 border border-beach-light/30 rounded-lg focus:border-beach-blue focus:outline-none focus:ring-2 focus:ring-beach-blue/20"
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-beach-teal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      className="w-full px-4 py-3 border border-beach-light/30 rounded-lg focus:border-beach-blue focus:outline-none focus:ring-2 focus:ring-beach-blue/20"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body font-medium text-beach-teal mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({...prev, company: e.target.value}))}
                      className="w-full px-4 py-3 border border-beach-light/30 rounded-lg focus:border-beach-blue focus:outline-none focus:ring-2 focus:ring-beach-blue/20"
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-beach-teal mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                      className="w-full px-4 py-3 border border-beach-light/30 rounded-lg focus:border-beach-blue focus:outline-none focus:ring-2 focus:ring-beach-blue/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-body font-medium text-beach-teal mb-2">
                    Current Website (if any)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData(prev => ({...prev, website: e.target.value}))}
                    className="w-full px-4 py-3 border border-beach-light/30 rounded-lg focus:border-beach-blue focus:outline-none focus:ring-2 focus:ring-beach-blue/20"
                    placeholder="https://"
                  />
                </div>
                
                <div>
                  <label className="block font-body font-medium text-beach-teal mb-4">
                    Services Interested In (select all that apply)
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service) => (
                      <label key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="rounded border-beach-light/30 text-beach-blue focus:ring-beach-blue/20"
                        />
                        <span className="ml-3 font-body text-beach-teal">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block font-body font-medium text-beach-teal mb-2">
                    Project Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData(prev => ({...prev, budget: e.target.value}))}
                    className="w-full px-4 py-3 border border-beach-light/30 rounded-lg focus:border-beach-blue focus:outline-none focus:ring-2 focus:ring-beach-blue/20"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-20k">$10,000 - $20,000</option>
                    <option value="20k-50k">$20,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-body font-medium text-beach-teal mb-2">
                    Tell us about your business and goals
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                    className="w-full px-4 py-3 border border-beach-light/30 rounded-lg focus:border-beach-blue focus:outline-none focus:ring-2 focus:ring-beach-blue/20"
                    placeholder="What industry are you in? What are your main business goals? What locations do you serve?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-beach-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-beach-blue/90 disabled:opacity-50 transition-all shadow-premium"
                >
                  {isSubmitting ? "Sending..." : "Get Your SEO Website Quote"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}