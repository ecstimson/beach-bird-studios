#!/bin/bash

# Beach Bird Studios Development Setup
echo "🏖️ Starting Beach Bird Studios Development Server..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    echo "Note: If you get permission errors, run: sudo chown -R \$(whoami) ~/.npm"
    npm install
    echo ""
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚙️  Creating .env.local from .env.example..."
    cp .env.example .env.local
    echo "✅ Edit .env.local with your DataForSEO credentials if needed"
    echo ""
fi

echo "🚀 Starting development server..."
echo "🌐 Open http://localhost:3000 to view Beach Bird Studios"
echo "📱 The site is mobile responsive and ready for all devices"
echo ""
echo "Pages available:"
echo "  • Homepage: http://localhost:3000"
echo "  • About: http://localhost:3000/about"
echo "  • Contact: http://localhost:3000/contact"
echo "  • SEO Research: http://localhost:3000/seo-research"
echo ""

npm run dev