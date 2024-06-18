d3.csv("data/purchase_orders.csv").then(function(data) {
    console.log(data); // Log data to check if it is loaded correctly
    var ul = d3.select("#orders-list");

    data.forEach(function(d) {
        ul.append("li")
          .text(`${d.customerName} - Order ID: ${d.orderId}: ${d.purchaseAmount}`);
    });
}).catch(function(error) {
    console.error('Error loading the CSV file:', error);
});
