const express = require("express");
const faker = require("faker");
const app = express();
const cors = require("cors");

user = [];
for (let index = 0; index < 10; index++) {
  user[index] = {
    id: index + 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    country: faker.address.country(),
  };
}

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/users", (req, res) => {
  res.send({
    user,
  });
});

const port = 4000;

app.listen(port, () => {
  console.log(`API is running on ${port}`);
});
