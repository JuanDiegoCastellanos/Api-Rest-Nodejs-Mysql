const postsController = require("../controllers/posts.controller");

const express = require("express");

const router = express.Router();

router.post("/add-post", postsController.addPost);

/**
 * @swagger
 * /posts/add-post:
 *   post:
 *      description: Used to add  post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - description
 *                 - imagePath
 *                 - addedByUserId
 *              properties:
 *                  description:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: This is sample post, Hello!!
 *                  imagePath:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: postexample.png
 *                  addedByUserId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource post add successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request or Post could not be created
 */
router.get("/get-all-posts", postsController.getAllPosts);
/**
 * @swagger
 * /posts/get-all-post:
 *   get:
 *      description: Used to get all posts
 *      tags:
 *          - posts
 *      responses:
 *          '200':
 *              description: Resource post add successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request or Post could not be created
 */
router.post("/add-post-comment", postsController.addPostComment);
/**
 * @swagger
 * /posts/add-post-comment:
 *   post:
 *      description: Used to add comment at post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *                 - comment
 *                 - addedByUserId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1
 *                  comment:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: The post is a fuking shit
 *                  addedByUserId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource  Comment add successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request or Post could not be created
 */

router.get("/get-all-comments-post", postsController.getPostAllComments);
/**
 * @swagger
 * /posts/get-all-comments-post:
 *   get:
 *      description: Used to get all comment of the post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: query
 *            name: postId
 *            type: integer
 *            description: Post id
 *            required: true
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource  Comment add successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request or Post could not be created
 */

router.put("/like-post", postsController.likePost);
/**
 * @swagger
 * /posts/like-post:
 *   put:
 *      description: Used to add like at post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: postId
 *            type: integer
 *            description: Post id
 *            required: true
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource  Comment add successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request or Post could not be created
 */
 router.put("/dislike-post", postsController.dislikePost);
 /**
  * @swagger
  * /posts/dislike-post:
  *   put:
  *      description: Used to add dislike at post
  *      tags:
  *          - posts
  *      parameters:
  *          - in: body
  *            name: postId
  *            type: integer
  *            description: Post id
  *            required: true
  *            schema:
  *              type: object
  *              required:
  *                 - postId
  *              properties:
  *                  postId:
  *                      type: integer
  *                      example: 1
  *      responses:
  *          '200':
  *              description: Resource  Comment add successfully
  *          '500':
  *              description: Internal server error
  *          '400':
  *              description: Bad request or Post could not be created
  */

router.delete("/delete-post", postsController.deletePost);
/**
  * @swagger
  * /posts/dislike-post:
  *   delete:
  *      description: Used to delete a post by id
  *      tags:
  *          - posts
  *      parameters:
  *          - in: query
  *            name: postId
  *            type: integer
  *            description: Post id
  *            required: true
  *            schema:
  *              type: object
  *              required:
  *                 - postId
  *              properties:
  *                  postId:
  *                      type: integer
  *                      example: 1
  *      responses:
  *          '200':
  *              description: Resource  Comment add successfully
  *          '500':
  *              description: Internal server error
  *          '400':
  *              description: Bad request or Post could not be created
  */
module.exports = router;
