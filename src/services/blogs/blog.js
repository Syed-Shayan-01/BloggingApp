import fs from 'fs';
import path from 'path';
const filePath = path.join(process.cwd(), "src", "data", "blogs.json");

//  getUserData
export function getBlogsData() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}
//  getUserid
export function getBlogsId(id) {
    const data = getBlogsData();
    return data.find(p => p.id === Number(id))
}

// save Data in user details like signup or signin details
export function saveBlogsData(BlogName, BlogContent, bloggerName) {
    const data = getBlogsData();
    data.push({
        id: data.length + 1,
        BlogName, BlogContent, bloggerName
    })
    fs.writeFileSync(filePath, JSON.stringify(data));
}