export function addProductToOrder(orderId, productNumber) {
  // Retrieve and parse the data from localStorage
  const storedOrdersData = localStorage.getItem("ordersData");
  const parsedOrders = storedOrdersData ? JSON.parse(storedOrdersData) : {};

  // Convert orderId to string for accessing the property
  const orderIdString = String(orderId);

  // Check if the parsedOrders object has the given orderId
  if (parsedOrders.hasOwnProperty(orderIdString)) {
    parsedOrders[orderIdString].push(productNumber);
  } else {
    parsedOrders[orderIdString] = [productNumber];
  }

  // Update the data in localStorage
  localStorage.setItem("ordersData", JSON.stringify(parsedOrders));
}

export function inCurrentOrder(productId) {
  // Retrieve currentOrderId from localStorage
  const currentOrderId = parseInt(localStorage.getItem("currentOrderId"));

  // Retrieve and parse the data from localStorage
  const storedOrdersData = localStorage.getItem("ordersData");
  const parsedOrders = storedOrdersData ? JSON.parse(storedOrdersData) : {};

  // Convert currentOrderId to string for accessing the property
  const currentOrderIdString = String(currentOrderId);

  // Check if the parsedOrders object has the given currentOrderId
  if (parsedOrders.hasOwnProperty(currentOrderIdString)) {
    return parsedOrders[currentOrderIdString].includes(productId);
  } else {
    return false; // Order doesn't exist, so product can't be in it
  }
}
