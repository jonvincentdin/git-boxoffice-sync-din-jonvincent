const tickets = require('./tickets');

let failures = 0;
function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    console.error(`FAIL: ${label} — expected ${expected}, got ${actual}`);
    failures++;
  } else {
    console.log(`PASS: ${label}`);
  }
}

assertEqual(tickets.isValidQuantity(4), true, 'a normal order quantity is valid');
assertEqual(tickets.isValidQuantity(0), false, 'a zero quantity is invalid');
assertEqual(tickets.isValidQuantity(25), false, 'an order over 20 tickets is invalid');

const price = tickets.calculateTicketPrice(3, 15.5);
assertEqual(tickets.calculateTicketPrice(3, 15.5), 37, 'price for 3 tickets at $15.50 each');
assertEqual(tickets.calculateTicketPrice(5, 20), 80, 'group discount plus flat discount');
assertEqual(tickets.calculateTicketPrice(2, 20, true), 50, 'VIP surcharge plus flat discount');
assertEqual(tickets.calculateTicketPrice(5, 20, true), 125, 'VIP, group, and flat discounts together');
assertEqual(tickets.calculateTicketPrice(2, 20), 30, 'flat $10 order discount');

process.exitCode = failures > 0 ? 1 : 0;
