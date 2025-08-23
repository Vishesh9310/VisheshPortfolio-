import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { blogs, type Blog } from "../data/blogs";


const Blogs: React.FC = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const blogsPerPage = 2;

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

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">📝 Blog</h1>

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
          <div
            key={blog.id}
            className="mb-8 p-6 border rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <ReactMarkdown >{blog.content}</ReactMarkdown>
            <div className="mt-3 flex gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-sm bg-gray-200 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No blogs found 🚫</p>
      )}

      {/* ⏩ Pagination */}
      <div className="flex justify-between mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          disabled={startIndex + blogsPerPage >= filteredBlogs.length}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
     
    </div>
  );
};

export default Blogs

 /*<details>
          <summary>Click to see more details</summary>
          <p>Yeh text tab dikhai dega jab user toggle karega.</p>
        </details>*/