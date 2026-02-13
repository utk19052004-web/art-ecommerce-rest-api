let cartEntries = [
  { id: 1, productId: 1, qty: 2 },   
  { id: 2, productId: 3, qty: 1 }    
];

exports.viewCart = (req, res) => {
  res.json({ items: cartEntries });
};

exports.viewCartItem = (req, res) => {
  const id = parseInt(req.params.id);
  const entry = cartEntries.find(c => c.id === id);
  if (!entry) {
    return res.status(404).json({ error: "Cart item not found" });
  }
  res.json(entry);
};

exports.addCartEntry = (req, res) => {
  const entry = {
    id: cartEntries.length + 1,
    productId: req.body.productId,
    qty: req.body.qty
  };
  cartEntries.push(entry);
  res.status(201).json({ message: "Item added to cart", entry });
};

exports.updateCartEntry = (req, res) => {
  const id = parseInt(req.params.id);
  const entry = cartEntries.find(c => c.id === id);
  if (!entry) {
    return res.status(404).json({ error: "Cart item not found" });
  }
  entry.qty = req.body.qty;
  res.json({ message: "Cart updated", entry });
};

exports.removeCartEntry = (req, res) => {
  const id = parseInt(req.params.id);
  cartEntries = cartEntries.filter(c => c.id !== id);
  res.json({ message: "Cart item removed" });
};