const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/mongodb-orm');
// mongoose.connect('mongodb://ticket-lab:ticket-lab@ds159926.mlab.com:59926/pokechat');
mongoose.connect('mongodb://ticket-lab:ticket-lab@ds163418.mlab.com:63418/bot-lab');
mongoose.connection.once('open', () => {
  console.log('Connected to TicketsDB!');
});

const ticketSchema = new Schema({
  id: Number,
  name: String,
  issue: String,
  clicked: Boolean,
  deadline: String,
  urgent: Boolean,
  status: String
});

const Ticket = mongoose.model('Ticket', ticketSchema); //One document. Naming the columns for it.

module.exports = Ticket;
