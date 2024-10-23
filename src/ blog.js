//console.log("appendBlogs:", blogs);

// list of Blogs
const blogs = [
    {
        title: "My first blog",
        date: "10-15-2023",
        description: "This is my first blog to write",
        image: "IMG_6491.jpeg",
        imageAlt: "image from home",
        slug: "My first blog",
    },
    {
        title: "My second blog",
        date: "10-15-2023",
        description: "This is my second blog to write :)",
        image: "IMG_6491.jpeg",
        imageAlt: "image from home",
        slug: "My second blog",
    },
];
// Function to Iterate Over the List of Blogs
function appendBlogs(blogs) {
    console.log("appendBlogs called with blogs:", blogs); //testing

    // Access the blog container in the HTML
    const blogContainer = document.getElementById('blog-container');
    // check to see if it was properly found
    if (!blogContainer) {
        console.error("error with blog container");
        return;
    }
    // iterating
    blogs.forEach(blog => {
        // Logic for creating and appending blog elements
      
        // div for each blog post
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-post');
        // h1 element for the title
        const blogTitle = document.createElement('h1');
        blogTitle.textContent = blog.title;
        // img element for the blog image
        const blogImage = document.createElement('img');
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;
        // p element for the description
        const blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;
        // Append title, image, description to the blog div
        blogDiv.appendChild(blogTitle);
        blogDiv.appendChild(blogImage);
        blogDiv.appendChild(blogDescription);
        // Append the blog div to the blog container
        blogContainer.appendChild(blogDiv);
    });
}
;
appendBlogs(blogs);
