const express = require('express');
const luhn = require('luhn');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 5000;

app.use(cors()); // Use the cors middleware to enable CORS

app.use(express.json());

app.post('/validate', (req, res) => {
  const { creditCardNumber } = req.body;

  if (luhn.validate(creditCardNumber)) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
