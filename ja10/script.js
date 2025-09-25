// shop.js

const readline = require("readline");

const r1= readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const shop = {};

r1.question("Enter product name: ", (name) => {
	shop.name = name;

	r1.question("Enter the product price: ", (price) => {
		shop.price = price;

		r1.question("Enter the quantity of the product: ", (quantity) => {
			shop.quantity = quantity;

			r1.question("Enter product category: ", (category) => {
				shop.category = category;

				console.log("\nShop product created:");
				console.log(shop)

				r1.close();
				});
			});
		});
	});
