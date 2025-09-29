import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { type Blog } from "../types/dataTypes";
import { useData } from "../context/DataContext";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Blogs: React.FC = () => {
  const { blogs } = useData();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const blogsPerPage = 4;
  const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tags)));


  // 🔍 Filter blogs by title or tags
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  // 📄 Pagination logic
  const startIndex = (page - 1) * blogsPerPage;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  const getPreview = (text: string, length: number = 150) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  }

  return (
    <div className="sm:block lg:flex justify-between h-fit px-[5%] py-20 gap-2 ">
      <div className="sm:w-full lg:w-2/3 mx-auto">
        <h1 className="text-4xl font-bold mb-6 orbitron">Blogs</h1>

        {/* 🔍 Search bar */}
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // Reset to page 1 on search
          }}
          className="w-full p-2 border rounded-md mb-6"
        />

        {/* 📑 Blog list */}
        {paginatedBlogs.length > 0 ? (
          paginatedBlogs.map((blog: Blog) => (
            <Link
              key={blog.id}
              className="mb-8 p-4 rounded-md flex h-fit gap-3 justify-between certificate-main shadow-md hover:shadow-lg transition"
              to={`/blog/${blog.id}`}
            >
              <img src={blog.img} alt="" className="h-60 w-1/3" />
              <div className="w-2/3">
                <h1 className="p-2 blog-box w-fit rounded-xl">{blog.cat}</h1>
                <h2 className="text-2xl font-semibold">{blog.title}</h2>
                <ReactMarkdown >{getPreview(blog.content, 120)}</ReactMarkdown>
                <div className="mt-3 flex gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm blog-boxs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}

                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No blogs found 🚫</p>
        )}

        {/* ⏩ Pagination */}
        <div className="flex justify-between mt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="px-4 py-2 blog-box rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            disabled={startIndex + blogsPerPage >= filteredBlogs.length}
            onClick={() => setPage((prev) => prev + 1)}
            className="px-4 py-2 blog-box rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>
      <div className="w-1/3 mx-auto space-y-10">

        <div className="text-center">
          <h1 className="text-2xl font-bold">Topics</h1>
          <ul className="p-5 space-y-3">
            <li className="blog-box py-2 rounded-lg">Database</li>
            <li className="blog-box py-2 rounded-lg">Accessibility</li>
            <li className="blog-box py-2 rounded-lg">Web Performance</li>
          </ul>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Tags</h1>
          <ul className="flex flex-wrap gap-2 blog-box p-5 my-5 rounded-md">
            {allTags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">
                #{tag}
              </span>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Let's Talk</h1>
          <div className="blog-box p-5 rounded-lg my-5">
            Do you want to learn more about how I can help your comapny overcome problems? Let us have a conversation.
          </div>
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default Blogs;