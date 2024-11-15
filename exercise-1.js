db.pizzaOrders.findOne({ customer_name: "Cherlyn" }); // Ex1

db.pizzaOrders.find({ credit_card_type: "mastercard" }); // Ex 2

db.pizzaOrders.find({ size: "medium" }).limit(5); // Ex3
