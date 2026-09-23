function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  return Math.round((quantity * basePrice) * (quantity > 5 ? 0.9 : 1));
}

module.exports = { isValidQuantity, calculateTicketPrice };
