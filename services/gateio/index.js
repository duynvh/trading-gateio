// const { Order } = require('gate-api');
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
   
exports.createOrder = async (currencyPair, amount, price) => {
   client.setApiKeySecret(process.env.API_GATEIO_KEY, process.env.API_GATEIO_SECRET);
   
   const api = new GateApi.SpotApi(client);
   const order = {
      text: "t-123456",
      currencyPair,
      type: "limit",
      side: "buy",
      iceberg: "0",
      amount,
      price,
      timeInForce: "gtc",
      autoBorrow: false
   };
   
   try {
      const response = await api.createOrder(order);
      return response.body;
   } catch (e) {
      console.error(e);
   }
}
