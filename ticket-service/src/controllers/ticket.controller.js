const ticketService = require('../services/ticket.service');

exports.getTickets = async (req, res) => {
  const tickets = await ticketService.getAllTickets();
  res.json(tickets);
};

exports.createTicket = async (req, res) => {
  const ticket = await ticketService.createTicket(req.body);
  res.status(201).json(ticket);
};

