const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Utilisateurs",
      version: "1.0.0",
      description: "Documentation de l'API pour la gestion des utilisateurs (Express + MongoDB)",
    },
    servers: [
      {
        url: "http://localhost:3000", // adapte selon ton URL
      },
    ],
  },
  apis: ["./routes/*.js"], // chemins vers les fichiers où tu mettras les doc Swagger
};

const swaggerSpec = swaggerJsDoc(options);

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📘 Swagger Docs disponible sur : http://localhost:3000/api-docs");
}

module.exports = swaggerDocs;
