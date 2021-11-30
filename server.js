
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cron = require('node-cron');
const { createOrder } = require('./services/gateio');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
cron.schedule('* * * * *', async () => {
    const response = await createOrder("POG_USDT", "1000", "0.35");
    console.log({response});
}, {
    scheduled: true,
    timezone: "Asia/Ho_Chi_Minh"
});

app.get('/', async function (req, res) {
  const response = await createOrder("JOE_USDT", "10", "2.05");
  console.log({response});
  res.send({response});
});

app.listen(5000, function () {
    console.log('Node app is running on port 5000');
});

module.exports = app;