const { Schema, model } = require('mongoose');

const newsSchema = Schema({
    title: { type: String},
    url: { type: String},
    description: { type: String},
    date: { type: String },
})


// create a model
const News = model("news", newsSchema);

module.exports = News;