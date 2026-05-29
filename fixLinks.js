const fs = require('fs');
const path = require('path');

function fixLinksInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;

    // Replace links
    content = content.replace(/\/ArchitectureProjects\//g, '/architecture-projects/');
    content = content.replace(/\/InteriorsProjects\//g, '/interiors/');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated links in ${path.basename(filePath)}`);
    }
}

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.js')) {
            fixLinksInFile(fullPath);
        }
    }
}

const componentDir = path.join(__dirname, 'src', 'Component');
const headerFooterDir = path.join(__dirname, 'src', 'HeaderFooter');

if (fs.existsSync(componentDir)) processDirectory(componentDir);
if (fs.existsSync(headerFooterDir)) processDirectory(headerFooterDir);

console.log('Finished fixing links!');
