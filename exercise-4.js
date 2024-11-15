db.pizzaOrders.find({ quantity: { $lt: 5 } }); // Ex1

db.pizzaOrders.find({ size: "small", quantity: { $gte: 1, $lte: 5 } }); // Ex2

db.pizzaOrders.find({ quantity: { $gte: 10 }, credit_card_type: null }); // Ex3
