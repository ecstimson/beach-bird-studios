const fs = require('fs');
const path = require('path');

// Fix location files to add city field
function fixLocationFiles() {
  const locationsDir = 'src/content/locations';
  const files = fs.readdirSync(locationsDir).filter(f => f.endsWith('.md'));
  let fixed = 0;
  
  files.forEach(file => {
    const filePath = path.join(locationsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract city from filename
    const baseName = path.basename(file, '.md');
    let city = baseName
      .replace(/-web-design/g, '')
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => {
        // Handle special cases
        if (word.toLowerCase() === 'nc') return 'NC';
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
    
    // Check if city field already exists
    if (!content.includes('city:')) {
      // Add city field to frontmatter
      const updatedContent = content.replace(
        /^---\n/,
        `---\ncity: "${city}"\n`
      );
      
      fs.writeFileSync(filePath, updatedContent);
      fixed++;
      console.log(`✅ Fixed: ${file} - Added city: "${city}"`);
    }
  });
  
  console.log(`\n🎉 Fixed ${fixed} location files`);
}

// Run the fix
fixLocationFiles();