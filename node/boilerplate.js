const fs = require('fs');
const folderName = process.argv[2] || 'project';
// console.log(fs)


// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('DONE')
//     if (err) throw err;
//   });
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/index.css`)
fs.writeFileSync(`${folderName}/index.js`)