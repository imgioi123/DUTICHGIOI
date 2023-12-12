const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

const app = express();

// Kết nối tới cơ sở dữ liệu MongoDB
mongoose.connect('mongodb://localhost:27017/checkout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Định nghĩa schema cho đối tượng Checkout
const checkoutSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  address: String,
  address2: String,
  country: String,
  state: String,
  zip: String,
  imageUrl: String,
});

// Model Checkout
const Checkout = mongoose.model('Checkout', checkoutSchema);

app.use(express.json());
app.use(cors());

// Định nghĩa Multer storage để lưu trữ ảnh
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Tạo checkout mới
app.post('/checkout', upload.single('image'), (req, res) => {
  const {
    firstName,
    lastName,
    username,
    email,
    address,
    address2,
    country,
    state,
    zip,
  } = req.body;

  const imageUrl = req.file ? req.file.path : '';

  const newCheckout = new Checkout({
    firstName,
    lastName,
    username,
    email,
    address,
    address2,
    country,
    state,
    zip,
    imageUrl,
  });

  newCheckout.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error saving checkout');
    } else {
      res.status(200).send('Checkout saved successfully');
    }
  });
});

// Chạy server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
```

- models/checkout.js: Định nghĩa model cho đối tượng Checkout.

````javascript
const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  address: String,
  address2: String,
  country: String,
  state: String,
  zip: String,
  imageUrl: String,
});

module.exports = mongoose.model('Checkout', checkoutSchema);
```
