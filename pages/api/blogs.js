import dbConnect from "@/lib/dbConnect"
import Blog from "./Blog"

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const blogs = await Blog.find({})
                res.status(200).json({success: true, data: blogs})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST':
            try {
                const blog = await Blog.create(req.body)
                res.status(200).json({success: true, data: blog})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        case 'PUT':
            try {
                const title = req.body
                console.log(title, 'putting')
                const blog = await Blog.findOneAndUpdate({ title: title }, { $inc : { "views": 1} }, { new: true})
                res.status(200).json({success: true, data:blog})
            } catch (error) {
                res.status(400).json({success: false})
            }
        default:
            res.status(400).json({success: false})
            break
    }
}