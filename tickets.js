function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isVIP = false) {
  return Math.round(((quantity * basePrice) * (quantity >= 5 ? 0.9 : 1)) * (isVIP ? 1.5 : 1)) - 10;
}

module.exports = { isValidQuantity, calculateTicketPrice };
