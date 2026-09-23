function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isVIP = false) {
  return Math.floor((quantity * basePrice) * (isVIP ? 1.5 : 1));
}

module.exports = { isValidQuantity, calculateTicketPrice };
