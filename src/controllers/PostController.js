const express = require("express");

const { PostModel } = require("../models/PostModel");
const { findOnePost, findManyPosts } = require("../utils/crud/PostCrud");

const router = express.Router();

// create route


// find one route by ID
router.get("/search/:postId", async (request, response) => {
    let result = await findOnePost({_id: request.params.postId});
    response.json({
            data:result
        })
})

router.get("/search/query", async (request, response) => {
    // get the query from the request.body
    let query = request.body.query;

    // use the query in a Post Crud
    let result = await findOnePost(query);

    // return the result
    response.json({
        data: result
    });
});

// get all posts
router.get("/all", async (request, response) => {
    let result = await findManyPosts({});
    response.json({
        data: result
    });
});


// find many route

module.exports = router;