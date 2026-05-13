import { useParams, Link } from "react-router-dom";
import blogs from "./blogData";
import "../HeaderFooter/Header.css";
import "./Blog.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

function Blog() {
  usePageReveal([
    ".blog-page .blog-content > *",
    ".blog-page .blog-text p",
    ".blog-page .blog-sign > *",
    ".blog-page .blog-image img",
    ".blog-page .blog-card",
    ".footer__col",
    ".footer__line",
    ".footer__copy",
  ]);

  useScrollVisibility([
    ".blog-page .blog-content",
    ".blog-page .blog-text p",
    ".blog-page .blog-sign",
    ".blog-page .blog-image img",
    ".blog-page .blog-card",
  ]);

  const { id } = useParams();
  const blog = blogs.find((item) => item.slug === id || item.id === Number(id));
  const isMistakeHeading = (paragraph) => /^Mistake\s+\d+:/i.test(paragraph);

  if (!blog) {
    return <h2 style={{ padding: "120px 20px" }}>Blog not found</h2>;
  }

  return (
    <div>
<div className="blog-page">
        <div className="blog-wrapper">
          <div className="blog-content">
                        {/* Blog Header & Body */}
            <span className="blog-category">{blog.category}</span>
            <h1 className="blog-title">{blog.title}</h1>

            <div className="blog-text">
              {blog.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={isMistakeHeading(paragraph) ? "blog-mistake-heading" : undefined}
                >
                  {index === 0 ? (
                    <>
                      <b>URBAN iNFiLL</b>
                      {paragraph.replace("URBAN iNFiLL", "").replace("Urban Infill", "")}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            <div className="blog-sign">
              <h3>{blog.author}</h3>
              <p>{blog.role}</p>
              <h4>URBAN iNFiLL</h4>
            </div>
          </div>

          <div className="blog-image">
                        {/* Sidebar Image & Info */}
            <img
              src={blog.image}
              alt={blog.title}
              loading="lazy"
              decoding="async"
            />

            <div className="blog-bottom">
              <div className="blog-card">
                <h3>About This Story</h3>
                <p>{blog.aboutStory}</p>
              </div>

              <div className="blog-card">
                <h3>Practice Focus</h3>
                <ul>
                  {blog.focus.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="blog-card">
                <h3>Explore More</h3>
                <div className="blog-links">
                  <Link to="/about">About URBAN iNFiLL</Link>
                  <Link to="/architecture">Projects</Link>
                  <Link to="/contact">Get in Touch</Link>
                  <Link to="/blogs">Back To Blogs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
  );
}

export default Blog;

