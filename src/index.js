import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Venda de um site",
          amount: 5000,
          typeTransaction: "deposit",
          category: "Venda",
          date: new Date(),
        },
        {
          id: 2,
          title: "Compra de um Iphone",
          typeTransaction: "withdraw",
          amount: 4000,
          category: "Compra",
          date: new Date(),
        }
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/operations", () => {
      return this.schema.all("transaction");
    });

    this.post("/operations", (schema, request) => {
      const dt = JSON.parse(request.requestBody);
      return schema.create("transaction", dt);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
