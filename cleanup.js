const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src', 'Component');

function processFile(filePath) {
    if (filePath.endsWith('WhatsAppButton.js') || filePath.endsWith('CookieConsent.js')) {
        return;
    }

    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;

    // Remove imports
    content = content.replace(/import\s+Header\s+from\s+['"].*?Header['"];?\n?/g, '');
    content = content.replace(/import\s+Footer\s+from\s+['"].*?Footer['"];?\n?/g, '');
    content = content.replace(/import\s+WhatsAppButton\s+from\s+['"].*?WhatsAppButton['"];?\n?/g, '');
    content = content.replace(/import\s+CookieConsent\s+from\s+['"].*?CookieConsent['"];?\n?/g, '');

    // Remove JSX tags
    content = content.replace(/<Header\s*\/>\n?/g, '');
    content = content.replace(/<Footer\s*\/>\n?/g, '');
    content = content.replace(/<WhatsAppButton\s*\/>\n?/g, '');
    content = content.replace(/<CookieConsent\s*\/>\n?/g, '');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${path.basename(filePath)}`);
    }
}

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.js')) {
            processFile(fullPath);
        }
    }
}

processDirectory(dirPath);
console.log('Done!');
