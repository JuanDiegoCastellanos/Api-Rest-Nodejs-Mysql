const usersController = require("../controllers/users.controller");

const express = require("express");

const router = express.Router();

router.post("/register", usersController.register);

/**
 * @swagger
 * /users/register:
 *   post:
 *      description: Used to register user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - firstName
 *                 - lastName
 *                 - emailId
 *                 - password
 *              properties:
 *                  firstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Navin
 *                  lastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Balla
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: navin@sample.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: abcd
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/login", usersController.login);
/**
 * @swagger
 * /users/login:
 *   post:
 *      description: Used to login user into the application
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: Login User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - emailId
 *                 - password
 *              properties:
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: nombre_correo@dominiovalido.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: x2x2x2x2x2sjd
 *      responses:
 *          '200':
 *              description: Login Sucessfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad Request or Error with the credentials, Login Failed
 */

module.exports = router;
