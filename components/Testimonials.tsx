const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Johnson Roofing Solutions",
    text: "Beach Bird Studios transformed our online presence. We went from page 5 to dominating the first page for all our key services. Our phone hasn't stopped ringing!",
    rating: 5,
    results: "+340% organic traffic"
  },
  {
    name: "Michael Chen",
    company: "Premier Dental Care",
    text: "The complete SEO website package was exactly what we needed. Now we show up in ChatGPT recommendations and dominate Google Maps in our area.",
    rating: 5,
    results: "3x more patient inquiries"
  },
  {
    name: "Amanda Rodriguez",
    company: "Rodriguez Law Firm",
    text: "Professional, thorough, and results-driven. Beach Bird Studios built us 45 pages targeting every practice area and city we serve. Game-changing ROI!",
    rating: 5,
    results: "#1 for 28 keywords"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-beach-white to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-beach-blue/10 text-beach-blue rounded-full font-semibold mb-4">
            Client Success Stories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-beach-teal mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="font-body text-xl text-beach-teal/70 max-w-2xl mx-auto">
            Real results from real businesses that dominate their local markets
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-premium hover:shadow-premium-hover transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-beach-gold text-xl">⭐</span>
                ))}
              </div>
              
              <p className="font-body text-beach-teal/80 mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-heading font-semibold text-beach-teal">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-beach-teal/60">
                      {testimonial.company}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-beach-gold/10 text-beach-gold text-sm font-semibold rounded-full">
                    {testimonial.results}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-body text-beach-teal/70 mb-6">
            Join hundreds of businesses dominating their local markets
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-beach-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-beach-blue/90 transition-all shadow-premium"
          >
            Start Your Success Story
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}