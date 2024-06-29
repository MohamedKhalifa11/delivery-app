import { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/MohamedKhalifa11/foods-api/main/blogs.json"
        );
        const data = await response.json();
        setBlogPosts(data.blogs);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Helmet title="Blogs">
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Blogs</h2>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img
                  src={post.image}
                  className="card-img-top"
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.summary}</p>
                  <p className="card-text">
                    <small className="text-muted">{post.date}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Helmet>
  );
};

export default Blogs;
