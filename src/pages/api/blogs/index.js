import { getBlogsData, saveBlogsData } from "@/services/blogs/blog";

export default function handler(req, res) {
    if (req.method === "GET") {
        const blog = getBlogsData()
        return res.status(200).send(blog);
    } else if (req.method === "POST") {
        const { BlogName, BlogContent, bloggerName } = req.body;
        saveBlogsData(BlogName, BlogContent, bloggerName);
        return res.status(201).send({});
    } res.status(404).send();
}