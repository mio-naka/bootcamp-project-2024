// typescript type called Blog
type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

// list of Blogs
const blogs: Blog[] = [
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
function appendBlogsToPage(blogs: Blog[]): void {
    // Access the blog container in the HTML
    const blogContainer = document.getElementById('blog-container');

    // check to see if it was properly found
    if (!blogContainer) {
        console.error("Blog container not found!");
        return;
    }

    // iterating
    blogs.forEach(blog => {
        // Logic for creating and appending blog elements

        // div for each blog post
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-post'); 

        // a element for the link to the blog
        const blogLink = document.createElement('a');
        blogLink.href = `blogs/${blog.slug}.html`; // link to blog page with slug
        //blogLink.appendChild(blogTitle);

        // h1 element for the title
        const blogTitle = document.createElement('h1');
        blogTitle.textContent = blog.title;

        blogLink.appendChild(blogTitle);
        blogDiv.appendChild(blogLink);

        // img element for the blog image
        const blogImage = document.createElement('img');
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;

        // p element for the description
        const blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;

        // Append title, image, description to the blog div
        //blogDiv.appendChild(blogTitle);
        blogDiv.appendChild(blogImage);
        blogDiv.appendChild(blogDescription);

        // Append the blog div to the blog container
        blogContainer.appendChild(blogDiv);
    });
};

appendBlogsToPage(blogs);
