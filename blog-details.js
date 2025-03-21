const blogDetails = document.getElementById("blogDetails");
const selectedBlog = JSON.parse(localStorage.getItem("selectedBlog"));

if (selectedBlog) {
    blogDetails.innerHTML = `
        <h2>${selectedBlog.title}</h2>
        <img src="${selectedBlog.image}" alt="${selectedBlog.title}" width="500">
        <p>${selectedBlog.content}</p>
        <a href="blogs.html">← Back to Blogs</a>
    `;
} else {
    blogDetails.innerHTML = "<p>Blog not found.</p>";
}
