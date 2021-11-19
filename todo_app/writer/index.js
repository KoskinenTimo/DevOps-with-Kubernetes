const fs = require('fs');
const path = require('path')
const axios = require('axios')

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const timeStampPath = path.join(directory, 'timestamp.txt')
const imagePath = path.join(directory, 'image.jpg')

const timeStampGenerator = async () => {
  const date = new Date();
  const timestamp = date.toISOString();
  try {
    fs.writeFileSync(timeStampPath, timestamp);
    if (!fs.existsSync(imagePath)) {
      const res = await axios.get('https://picsum.photos/200', { responseType: 'stream' });
      res.data.pipe(fs.createWriteStream(imagePath));
    }
  } catch (error) {
    throw error;
  }
  
}

setInterval(() => {
  timeStampGenerator();
  console.log('stamped');
}, 5000)
