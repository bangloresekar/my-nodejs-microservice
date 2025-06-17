const db = require('../models/db');

exports.getAllTickets = async () => {
  const [rows] = await db.query('SELECT * FROM ticket');
  return rows;
};

exports.createTicket = async (data) => {
  const { title, description, status = 'open' } = data;
  const [result] = await db.query(
    'INSERT INTO ticket (title, description, status) VALUES (?, ?, ?)',
    [title, description, status]
  );
  const [newTicket] =  wait db.query('SELECT * FROM ticket WHERE id = ?', [result.insertId]);
    
  
  return newTicket[0];
};

