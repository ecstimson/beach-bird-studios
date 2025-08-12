#!/usr/bin/env python3

import os
import re
import markdown

def create_html_template(title, content, page_type="service"):
    """Create HTML template with Beach Bird branding"""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Beach Bird Studios</title>
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{ 
            font-family: system-ui, sans-serif; 
            line-height: 1.6;
            color: #1F2937;
        }}
        
        /* Navigation */
        nav {{ 
            background: #47A7EB; 
            padding: 20px; 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100;
        }}
        nav .logo {{ 
            color: white; 
            font-size: 20px; 
            font-weight: bold; 
            text-decoration: none;
        }}
        nav .nav-links {{ 
            display: flex; 
            gap: 20px; 
        }}
        nav a {{ 
            color: white; 
            text-decoration: none; 
            padding: 8px 16px;
            border-radius: 4px;
            transition: background 0.3s;
        }}
        nav a:hover {{ background: rgba(255,255,255,0.1); }}
        
        /* Header */
        .header {{ 
            background: linear-gradient(135deg, #47A7EB, #0C3745); 
            color: white; 
            padding: 60px 20px; 
            text-align: center; 
        }}
        .header h1 {{ 
            font-size: 36px; 
            margin-bottom: 16px; 
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }}
        .header p {{ 
            font-size: 18px; 
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto;
        }}
        
        /* Content */
        .content {{ 
            max-width: 1000px; 
            margin: 0 auto; 
            padding: 40px 20px; 
        }}
        .content h1 {{ 
            color: #0C3745; 
            font-size: 32px; 
            margin: 30px 0 20px 0; 
            border-bottom: 3px solid #47A7EB;
            padding-bottom: 10px;
        }}
        .content h2 {{ 
            color: #0C3745; 
            font-size: 24px; 
            margin: 25px 0 15px 0; 
        }}
        .content h3 {{ 
            color: #0C3745; 
            font-size: 20px; 
            margin: 20px 0 10px 0; 
        }}
        .content p {{ 
            margin-bottom: 16px; 
            color: #374151;
        }}
        .content ul {{ 
            margin: 16px 0; 
            padding-left: 20px; 
        }}
        .content li {{ 
            margin: 8px 0;
            color: #374151;
        }}
        .content strong {{ 
            color: #0C3745; 
        }}
        
        /* CTA Buttons */
        .cta-button {{ 
            background: #E6B84C; 
            color: #0C3745; 
            padding: 15px 30px; 
            text-decoration: none; 
            border-radius: 6px; 
            font-weight: bold; 
            display: inline-block; 
            margin: 20px 10px;
            transition: all 0.3s;
        }}
        .cta-button:hover {{ 
            background: #D4A543; 
            transform: translateY(-2px);
        }}
        
        /* Footer */
        .footer {{ 
            background: #0C3745; 
            color: white; 
            text-align: center; 
            padding: 40px 20px; 
            margin-top: 60px; 
        }}
        .footer h3 {{ 
            color: #47A7EB; 
            margin-bottom: 16px; 
        }}
        .footer p {{ 
            margin: 8px 0; 
            opacity: 0.9;
        }}
        
        /* Responsive */
        @media (max-width: 768px) {{
            nav {{ flex-direction: column; gap: 15px; }}
            .header h1 {{ font-size: 28px; }}
            .content {{ padding: 20px; }}
            .nav-links {{ flex-wrap: wrap; justify-content: center; }}
        }}
    </style>
</head>
<body>
    <nav>
        <a href="/" class="logo">🏖️ Beach Bird Studios</a>
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/services.html">Services</a>
            <a href="/locations.html">Locations</a>
            <a href="/about.html">About</a>
            <a href="/contact.html">Contact</a>
        </div>
    </nav>
    
    <div class="content">
        {content}
    </div>
    
    <div class="footer">
        <h3>Ready to Get Your 100+ Page Website?</h3>
        <p>📧 hello@beachbirdstudios.com</p>
        <p>📞 (910) 555-0123</p>
        <p>Serving all of North Carolina</p>
        <a href="mailto:hello@beachbirdstudios.com" class="cta-button">Get Quote</a>
    </div>
</body>
</html>"""

def convert_markdown_to_html(md_content):
    """Convert markdown content to HTML and clean it up"""
    # Remove markdown metadata at the top
    if md_content.startswith('---'):
        parts = md_content.split('---', 2)
        if len(parts) >= 3:
            md_content = parts[2].strip()
    
    # Convert markdown to HTML
    html = markdown.markdown(md_content)
    
    # Replace [CTA: ...] with actual button
    cta_pattern = r'\[CTA: ([^\]]+)\]'
    html = re.sub(cta_pattern, r'<a href="mailto:hello@beachbirdstudios.com" class="cta-button">\1</a>', html)
    
    # Make email links clickable
    email_pattern = r'📧\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})'
    html = re.sub(email_pattern, r'📧 <a href="mailto:\1">\1</a>', html)
    
    return html

def process_service_files():
    """Convert all service markdown files to HTML"""
    service_dir = 'content/services'
    public_services_dir = 'public/services'
    
    # Create public services directory
    os.makedirs(public_services_dir, exist_ok=True)
    
    service_files = []
    
    for filename in os.listdir(service_dir):
        if filename.endswith('.md'):
            filepath = os.path.join(service_dir, filename)
            
            with open(filepath, 'r', encoding='utf-8') as f:
                md_content = f.read()
            
            # Extract title from first # heading
            lines = md_content.split('\n')
            title = "Service Page"
            for line in lines:
                if line.startswith('# '):
                    title = line[2:].strip()
                    break
            
            # Convert to HTML
            html_content = convert_markdown_to_html(md_content)
            
            # Create full HTML page
            full_html = create_html_template(title, html_content, "service")
            
            # Write HTML file
            html_filename = filename.replace('.md', '.html')
            html_filepath = os.path.join(public_services_dir, html_filename)
            
            with open(html_filepath, 'w', encoding='utf-8') as f:
                f.write(full_html)
            
            service_files.append({
                'filename': html_filename,
                'title': title,
                'slug': filename.replace('.md', '')
            })
            
            print(f"Created {html_filepath}")
    
    return service_files

def process_location_files():
    """Convert all location markdown files to HTML"""
    location_dir = 'content/locations'
    public_locations_dir = 'public/locations'
    
    # Create public locations directory
    os.makedirs(public_locations_dir, exist_ok=True)
    
    location_files = []
    
    for filename in os.listdir(location_dir):
        if filename.endswith('.md'):
            filepath = os.path.join(location_dir, filename)
            
            with open(filepath, 'r', encoding='utf-8') as f:
                md_content = f.read()
            
            # Extract title from first # heading
            lines = md_content.split('\n')
            title = "Location Page"
            for line in lines:
                if line.startswith('# '):
                    title = line[2:].strip()
                    break
            
            # Convert to HTML
            html_content = convert_markdown_to_html(md_content)
            
            # Create full HTML page
            full_html = create_html_template(title, html_content, "location")
            
            # Write HTML file
            html_filename = filename.replace('.md', '.html')
            html_filepath = os.path.join(public_locations_dir, html_filename)
            
            with open(html_filepath, 'w', encoding='utf-8') as f:
                f.write(full_html)
            
            location_files.append({
                'filename': html_filename,
                'title': title,
                'slug': filename.replace('.md', '')
            })
            
            print(f"Created {html_filepath}")
    
    return location_files

# Process all files
if __name__ == "__main__":
    print("Converting service files...")
    services = process_service_files()
    
    print("Converting location files...")
    locations = process_location_files()
    
    print(f"\\nCompleted:")
    print(f"- {len(services)} service pages converted")
    print(f"- {len(locations)} location pages converted")
    print(f"- Total: {len(services) + len(locations)} pages created")