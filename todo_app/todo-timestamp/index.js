const fs = require('fs');
const path = require('path')
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const timeStampPath = path.join(directory, 'timestamp.txt')

const timeStampGenerator = async () => {
  const date = new Date();
  const timestamp = date.toISOString();
  try {
    fs.writeFileSync(timeStampPath, timestamp);
  } catch (error) {
    throw error;
  }
  
}

setInterval(() => {
  timeStampGenerator();
  console.log('stamped');
}, 5000)
