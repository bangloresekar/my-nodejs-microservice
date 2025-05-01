const express = require('express');
const ticketRoutes = require('./ticket.routes');

const router = express.Router();

router.use('/tickets', ticketRoutes);

module.exports = router;

