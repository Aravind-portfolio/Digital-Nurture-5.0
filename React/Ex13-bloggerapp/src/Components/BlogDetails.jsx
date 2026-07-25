function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      description: "Welcome to learning React!",
    },
    {
      id: 2,
      title: "Installation",
      author: "Schwezdneier",
      description: "You can install React from npm.",
    },
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map((blog) => (
        <div className="details-item" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
