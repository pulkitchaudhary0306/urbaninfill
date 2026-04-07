import { Link } from "react-router-dom";
import blogs from "./blogData";
import "./Blogs.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

function Blogs() {
  usePageReveal([
    ".blogs-page .recent-posts > h2",
    ".blogs-page .post-card",
    ".site-footer .site-footer__col",
    ".site-footer .site-footer__line",
    ".site-footer .site-footer__copy",
  ]);

  useScrollVisibility([
    ".blogs-page .recent-posts > h2",
    ".blogs-page .post-card",
  ]);

  return (
    <div>
<div className="blogs-page">
        <div className="blogs-container">
          <section className="recent-posts">
            <h2>Recent Blog Posts</h2>

            <div className="posts-grid">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.slug}`}
                  className="post-card"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="post-card-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="post-card-content">
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <div className="post-meta">
                      {blog.meta.map((item, index) => (
                        <span key={`${blog.id}-${index}`}>{item}</span>
                      ))}
                    </div>
                    <span className="see-more">Read Blog -&gt;</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
</div>
  );
}

export default Blogs;

