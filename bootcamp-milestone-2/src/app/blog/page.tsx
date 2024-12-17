import React from 'react';
import BlogPreview from '../components/blogPreview';
import blogs from '../blogData'; // Importing the blog data

const Blog = () => {
  return (
    <div>
      <div>
        {blogs.map((blog) => (
          <BlogPreview 
            key={blog.title} 
            {...blog}  
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
