const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const adminRoutes = require('./routes/adminRoutes');
const subadminRoutes = require('./routes/subadminRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const feesRoutes = require('./routes/feesRoutes');
const donationRoutes = require('./routes/donationRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
app.use('/admin', adminRoutes);
app.use('/subadmin', subadminRoutes);
app.use('/expense', expenseRoutes);
app.use('/fees', feesRoutes);
app.use('/donation', donationRoutes);
app.use('/chatbot', chatbotRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



