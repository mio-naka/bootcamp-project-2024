"use strict";
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
function appendBlogsToPage(blogs) {
    // Access the blog container in the HTML
    const blogContainer = document.getElementById('blog-container');
    if (!blogContainer) {
        console.error("Blog container not found!");
        return;
    }
    blogs.forEach(blog => {
        // Logic for creating and appending blog elements
        // Create a div for each blog post
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-post'); // Add a class for styling if needed
        // Create an h1 element for the title
        const titleElement = document.createElement('h1');
        titleElement.textContent = blog.title;
        // Create an img element for the blog image
        const imageElement = document.createElement('img');
        imageElement.src = blog.image;
        imageElement.alt = blog.imageAlt;
        // Create a p element for the description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = blog.description;
        // Create a small element for the date
        const dateElement = document.createElement('small');
        dateElement.textContent = `Published on: ${blog.date}`;
        // Append title, image, description, and date to the blog div
        blogDiv.appendChild(titleElement);
        blogDiv.appendChild(imageElement);
        blogDiv.appendChild(descriptionElement);
        blogDiv.appendChild(dateElement);
        // Append the blog div to the blog container
        blogContainer.appendChild(blogDiv);
    });
}
;
appendBlogsToPage(blogs);
