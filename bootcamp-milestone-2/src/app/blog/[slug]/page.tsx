import Comment from "../../components/Comments/comment"; // Update the path as needed

type Props = {
    params: { slug: string };
  };
  
  // get individual blog
  async function getBlog(slug: string) {
    try {
      const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
        cache: "no-store", // Avoid caching for dynamic data
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch blog");
      }
  
      return res.json();
    } catch (err) {
      console.error(`Error fetching blog: ${err}`);
      return null;
    }
  }
  
  export default async function Blog({ params }: Props) {
    const slug = params.slug;
	const blog = await getBlog(slug);
  
    // handles cases where the blog isn't found
    if (!blog) {
      return <p>Blog not found. Please check the URL and try again.</p>;
    }
  
    return (
      <div>
        <h1>{blog.title}</h1>
        <p>{new Date(blog.date).toLocaleDateString()}</p>
        <p>{blog.description}</p>
        <div>{blog.content}</div>
        <div className="comments">
        {/* Loop through comments and pass each one to the Comment component */}
        {blog.comments && blog.comments.length > 0 ? (
        blog.comments.map((comment: any, index: any) => {

            return <Comment key={index} comment={comment} />;
        })
        ) : (
        <p>No comments yet.</p>
        )}

      </div>
      </div>
      
    );
  }
  