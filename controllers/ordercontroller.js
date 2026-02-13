let orderRecords = [
  { id: 1, customer: 'Utkarsh', amount: 749 },
  { id: 2, customer: 'Meet', amount: 250 }
];

exports.getOrders = (req, res) => {
  res.json(orderRecords);
};

exports.getOrder = (req, res) => {
  const id = parseInt(req.params.id);
  const record = orderRecords.find(o => o.id === id);
  if (!record) {
    return res.status(404).json({ error: "Order not found" });
  }
  res.json(record);
};

exports.createOrder = (req, res) => {
  const record = {
    id: orderRecords.length + 1,
    customer: req.body.customer,
    amount: req.body.amount
  };
  orderRecords.push(record);
  res.status(201).json({ message: "Order placed", record });
};

exports.updateOrder = (req, res) => {
  const id = parseInt(req.params.id);
  const record = orderRecords.find(o => o.id === id);
  
  if (!record) {
    return res.status(404).json({ error: "Order not found" });
  }
  
  record.amount = req.body.amount;
  res.json({ message: "Order updated", record });
};

exports.deleteOrder = (req, res) => {
  const id = parseInt(req.params.id);
  orderRecords = orderRecords.filter(o => o.id !== id);
  res.json({ message: "Order cancelled" });
};