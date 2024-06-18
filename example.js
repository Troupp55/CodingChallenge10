// example.js
d3.csv("data/purchase_orders.csv").then(function(data) {
    // Select the unordered list
    var ul = d3.select("#orders-list");

    // Append an <li> element for each purchase order
    data.forEach(function(d) {
        ul.append("li")
          .text(`${d.customerName} - Order ID: ${d.orderId}: ${d.purchaseAmount}`);
    });
}).catch(function(error) {
    console.error('Error loading the CSV file:', error);
});
