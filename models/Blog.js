import mongoose from "mongoose"

const BlogSchema = new mongoose.Schema({
    title: String,
    published: Date,
    views: {
        type: Number,
        default: 0
    }
})
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
module.exports = Blog