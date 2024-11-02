const mongoose = require("mongoose");


const LocalizedContentSchema = new mongoose.Schema({
    languageCode: {
        type: String,
        required: true,
        default: "en"
    },
    content: {
        type: String,
        required: true
    }
});

// Dont want a model
// const LocalizedContentModel = mongoose.model("LocalizedContent", LocalizedContentSchema);


module.exports = {
    LocalizedContentSchema
}