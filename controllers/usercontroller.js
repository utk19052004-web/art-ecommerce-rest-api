let userRecords = [
  { id: 1, fullName: 'Utkarsh', emailId: 'utkarsh@email.com' },
  { id: 2, fullName: 'Meet', emailId: 'meet@email.com' }
];

exports.getUsers = (req, res) => {
  res.json(userRecords);
};

exports.createUser = (req, res) => {
  const record = {
    id: userRecords.length + 1,
    fullName: req.body.fullName,
    emailId: req.body.emailId
  };

  userRecords.push(record);
  res.status(201).json(record);
};

exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  userRecords = userRecords.filter(u => u.id !== id);

  res.json({ message: "User removed" });
};