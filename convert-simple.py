#!/usr/bin/env python3

import os
import re

def create_html_template(title, content):
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

def simple_markdown_to_html(text):
    """Simple markdown to HTML conversion"""
    # Remove YAML frontmatter
    if text.startswith('---'):
        parts = text.split('---', 2)
        if len(parts) >= 3:
            text = parts[2].strip()
    
    # Convert headers
    text = re.sub(r'^# (.+)$', r'<h1>\1</h1>', text, flags=re.MULTILINE)
    text = re.sub(r'^## (.+)$', r'<h2>\1</h2>', text, flags=re.MULTILINE)
    text = re.sub(r'^### (.+)$', r'<h3>\1</h3>', text, flags=re.MULTILINE)
    
    # Convert bold text
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    
    # Convert bullet points
    lines = text.split('\n')
    in_list = False
    result_lines = []
    
    for line in lines:
        if line.strip().startswith('- '):
            if not in_list:
                result_lines.append('<ul>')
                in_list = True
            result_lines.append(f'<li>{line.strip()[2:]}</li>')
        else:
            if in_list:
                result_lines.append('</ul>')
                in_list = False
            if line.strip():
                result_lines.append(f'<p>{line.strip()}</p>')
            else:
                result_lines.append('')
    
    if in_list:
        result_lines.append('</ul>')
    
    # Convert CTAs
    text = '\n'.join(result_lines)
    text = re.sub(r'\[CTA: ([^\]]+)\]', r'<a href="mailto:hello@beachbirdstudios.com" class="cta-button">\1</a>', text)
    
    # Make emails clickable
    text = re.sub(r'📧\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})', r'📧 <a href="mailto:\1">\1</a>', text)
    
    return text

def process_files():
    """Convert files to HTML"""
    os.makedirs('public/services', exist_ok=True)
    os.makedirs('public/locations', exist_ok=True)
    
    # Process services
    service_count = 0
    for filename in os.listdir('content/services'):
        if filename.endswith('.md'):
            with open(f'content/services/{filename}', 'r') as f:
                content = f.read()
            
            title = filename.replace('.md', '').replace('-', ' ').title()
            html_content = simple_markdown_to_html(content)
            full_html = create_html_template(title, html_content)
            
            html_filename = filename.replace('.md', '.html')
            with open(f'public/services/{html_filename}', 'w') as f:
                f.write(full_html)
            
            service_count += 1
            print(f"Created public/services/{html_filename}")
    
    # Process locations  
    location_count = 0
    for filename in os.listdir('content/locations'):
        if filename.endswith('.md'):
            with open(f'content/locations/{filename}', 'r') as f:
                content = f.read()
            
            title = filename.replace('.md', '').replace('-', ' ').title()
            html_content = simple_markdown_to_html(content)
            full_html = create_html_template(title, html_content)
            
            html_filename = filename.replace('.md', '.html') 
            with open(f'public/locations/{html_filename}', 'w') as f:
                f.write(full_html)
            
            location_count += 1
            print(f"Created public/locations/{html_filename}")
    
    print(f"\nCompleted: {service_count} services, {location_count} locations")

if __name__ == "__main__":
    process_files()