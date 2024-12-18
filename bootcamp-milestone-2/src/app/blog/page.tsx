// app/blogs/page.tsx
import { getBlogs } from "../blogData";

export default async function BlogListPage() {
  const blogs = await getBlogs();

  if (!blogs) {
    return <p>Failed to fetch blogs or no blogs available.</p>;
  }

  // returning the blog list
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog: any) => (
          <li key={blog.slug}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <small>{new Date(blog.date).toLocaleDateString()}</small>
            <a href={`/blogs/${blog.slug}`}>Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
}




// import React from 'react';
// import BlogPreview from '../components/blogPreview';
// import blogs from '../blogData'; // Importing the blog data

// const Blog = () => {
//   return (
//     <div>
//       <div>
//         {blogs.map((blog) => (
//           <BlogPreview 
//             key={blog.title} 
//             {...blog}  
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Blog;
