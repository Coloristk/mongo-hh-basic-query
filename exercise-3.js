db.pizzaOrders.find().sort({ total_price: -1 }); // Ex1

db.pizzaOrders.find().sort({ created_at: 1 }); // Ex2
