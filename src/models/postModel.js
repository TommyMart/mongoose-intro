const mongoose = require('mongoose');
const LocalizedContentSchema = require('./LocalizedContent');

// 1. Make a schema

// const someSchema = new mongoose.Schema()
const PostSchema = mongoose.Schema({
    title: String,
    content: [LocalizedContentSchema],
    date: {
        type: Date,
        default: Date.now // Mongoose wil run Date.now() every time we make a doc
        // default: new Date(Date.now) // Mongoose will run Date.now once when the app loads this file
    },
    author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	}
});

// 2. Make a model based on the schema
// Create new model called "PostModel" from PostSchema
// Mongoose will create a collection named 'posts' from model name 'Post'
const PostModel = mongoose.model("Post", PostSchema);

// 3. Export the model for the rest of our code to use
module.exports = {
    PostModel
}