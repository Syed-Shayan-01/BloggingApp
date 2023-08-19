import { getBlogsId } from "@/services/blogs/blog";

export default function handler(req, res) {
    if (req.method === "GET") {
        const { blogsId } = req.query;
        const blog = getBlogsId(blogsId)
        return res.status(200).json(blog);
    }
    return res.status(404).send();
}