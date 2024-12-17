import React from 'react';
import BlogPreview from '../components/blogPreview';
import blogs from '../blogData'; // Importing the blog data

const Blog = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <div>
        {blogs.map((blog) => (
          <BlogPreview 
            key={blog.title}  // Add a unique key to each component
            {...blog}         // Spread all properties from the blog object
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
