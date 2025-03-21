const blogs = [
    {
        title: "Cricket Legend: Virat Kohli",
        summary: "A deep dive into the career of Virat Kohli...",
        content: "Virat Kohli, born in 1988, is one of the greatest batsmen...",
        image: "kohli.jpg"
    },
    {
        title: "MS Dhoni: Captain Cool",
        summary: "How MS Dhoni became India's most successful captain...",
        content: "MS Dhoni, known for his calm nature, led India to...",
        image: "dhoni.jpg"
    }
];

const blogList = document.getElementById("blogList");

blogs.forEach((blog, index) => {
    const blogItem = document.createElement("div");
    blogItem.innerHTML = `
        <h2>${blog.title}</h2>
        <img src="${blog.image}" alt="${blog.title}" width="300">
        <p>${blog.summary}</p>
        <button onclick="viewBlog(${index})">Read More</button>
    `;
    blogList.appendChild(blogItem);
});

function viewBlog(index) {
    localStorage.setItem("selectedBlog", JSON.stringify(blogs[index]));
    window.location.href = "blog-details.html";
}