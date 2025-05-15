import { getBlog } from "./getBlogs";

// Fetch and display preloaded blogs when the website loads
document.addEventListener("DOMContentLoaded", () => {
    getBlog();
});