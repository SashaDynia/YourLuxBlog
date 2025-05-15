import axios from "axios";
import { getBlog } from "./getBlogs";

export async function createPost(data) {
    try {
        const post = {
            ...data,
            date: new Date(),
        };
        const response = await axios.post("http://localhost:3000/blogs", post);
        await getBlog();
    } catch (error) {
        console.error("Error creating post:", error);
    }
}