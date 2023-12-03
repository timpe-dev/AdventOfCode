const fs = require('fs');
const { exec } = require('child_process');

const year = process.argv[2];
const integer = process.argv[3];
const folderPath = `${year}/${integer}`;

if (fs.existsSync(folderPath)) {
  exec(`node ${folderPath}/challenge.js`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`Output: ${stdout}`);
  });
} else {
  console.error(`Error: Folder ${folderPath} does not exist`);
}

// Run a script by using the following command:
// npm run exec -- {year} {day}