Before run server, ensure you meet the following requirements

- Install nodejs. then go to folder and `npm install`
- Copy .env.example to .env and filled keys.
- File server.js has cronjob to schedule order limit in gate.io. Please change it with your information
- createOrder(currencyPair, amount, price). Please change variable of function with pair which you want create order in gate.io
- Then run `node server.js` and pray for us :)))
