const app = require('./src/app');
const PORT = process.env.PORT || 3002;
// comment1
app.listen(PORT, () => {
  console.log(`Ticket service running on port ${PORT}`);
});

