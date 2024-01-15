function calculateCryptoProfitLoss(buyPrice, sellPrice, quantity, fees) {
    const buyTotal = buyPrice * quantity;
    const sellTotal = sellPrice * quantity;
    
    const profitLoss = sellTotal - buyTotal - fees;
    
    return profitLoss.toFixed(2);
}

// Example usage:
const buyPrice = 500; // Buy price per unit
const sellPrice = 700; // Sell price per unit
const quantity = 10; // Quantity of cryptocurrency bought or sold
const fees = 50; // Transaction fees

// Calculate the profit or loss from the cryptocurrency trade
const result = calculateCryptoProfitLoss(buyPrice, sellPrice, quantity, fees);

console.log(`For a trade with buy price $${buyPrice}, sell price $${sellPrice}, quantity ${quantity}, and fees $${fees}, the profit/loss is $${result}`);
