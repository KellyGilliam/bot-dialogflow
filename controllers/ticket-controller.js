const Ticket = require('../models/ticket-model');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

let TicketController = {
	getAllTickets(req, res) {
    console.log(res);
		Ticket.find({}, function(err, tickets) {
		  res.status(200);
		  res.setHeader('Content-type', 'application/json');
			res.end(JSON.stringify(tickets));
      // res.end(JSON.stringify({'Bob': 'person'}}));
			console.log(tickets);
		});
	},
};

module.exports = TicketController;
