let productList = [
  { id: 1, title: 'Sketchbook', cost: 250 },
  { id: 2, title: 'Watercolor Set', cost: 499 },
  { id: 3, title: 'Brush Pack', cost: 199 }
];

exports.fetchProducts = (req, res) => {
  res.json({ total: productList.length, items: productList });
};

exports.fetchProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const item = productList.find(p => p.id === id);
  if (!item) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(item);
};

exports.addProduct = (req, res) => {
  const entry = {
    id: productList.length + 1,
    title: req.body.title,
    cost: req.body.cost
  };
  productList.push(entry);
  res.status(201).json({ message: "Art supply added", entry });
};

exports.modifyProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const item = productList.find(p => p.id === id);
  if (!item) {
    return res.status(404).json({ error: "Product not found" });
  }
  item.title = req.body.title;
  item.cost = req.body.cost;
  res.json({ message: "Product updated", item });
};

exports.removeProduct = (req, res) => {
  const id = parseInt(req.params.id);
  productList = productList.filter(p => p.id !== id);
  res.json({ message: "Product removed" });
};