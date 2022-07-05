const app = require('./src/app.js');

const PORT = 3000;

app.listen(PORT | process.env.port, () => {
   console.log(`Server Running in port ${PORT}`);
});