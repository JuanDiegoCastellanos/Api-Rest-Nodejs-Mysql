const express = require("express");
const app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.route");
const postsRoutes = require("./routes/posts.route")


app.use(bodyParser.json());

/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "My Posts",
      description: "API documentation for the project. This was developed in NodeJs-Mysql-Swagger. This is the main page of swagger",
      version:"1.0.0",
      contact: {
        name: "Juan Diego Castellanos",
      },
      servers: ["http://localhost:3000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
// app.use("/test",(req, res, next)=>{
//   return res.status(200).send({success:1, data:"Hola este es un Test",});
// })

app.listen(3000, () => {
  console.log("I am ready to lisen to you");
});
