import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-beach-teal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🏖️</span>
              <h3 className="font-heading text-2xl font-bold">Beach Bird Studios</h3>
            </div>
            <p className="text-beach-light mb-6 font-body">
              Premium SEO & Website company delivering years of SEO work in one complete website. 
              Dominate traditional search, AI results, and local maps.
            </p>
            <div className="flex gap-4">
              <span className="inline-block px-3 py-1 bg-beach-gold/20 text-beach-gold rounded-full text-sm">
                SEO Experts
              </span>
              <span className="inline-block px-3 py-1 bg-beach-blue/20 text-beach-light rounded-full text-sm">
                Website Builders
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-beach-gold">Services</h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link href="/seo-research" className="text-beach-light hover:text-white transition">
                  SEO Website Packages
                </Link>
              </li>
              <li>
                <Link href="/seo-research" className="text-beach-light hover:text-white transition">
                  Local SEO Domination
                </Link>
              </li>
              <li>
                <Link href="/seo-research" className="text-beach-light hover:text-white transition">
                  AI Search Optimization
                </Link>
              </li>
              <li>
                <Link href="/seo-research" className="text-beach-light hover:text-white transition">
                  Google Business Profile
                </Link>
              </li>
              <li>
                <Link href="/seo-research" className="text-beach-light hover:text-white transition">
                  Review Management
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-beach-gold">Company</h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link href="/about" className="text-beach-light hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-beach-light hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/seo-research" className="text-beach-light hover:text-white transition">
                  Free SEO Analysis
                </Link>
              </li>
              <li>
                <a href="#" className="text-beach-light hover:text-white transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-beach-light hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-beach-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-beach-light font-body">
              &copy; 2025 Beach Bird Studios. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-beach-light hover:text-beach-gold transition">
                LinkedIn
              </a>
              <a href="#" className="text-beach-light hover:text-beach-gold transition">
                Twitter
              </a>
              <a href="#" className="text-beach-light hover:text-beach-gold transition">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}