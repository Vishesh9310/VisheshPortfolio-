import React from "react";
import { type Blog } from "../../types/dataTypes";
import { useData } from "../../context/DataContext";

const SciFiCard: React.FC<{ item: Blog }> = ({ item }) => {
  return (
    <div className="bg-black/60 border border-cyan-500/50 rounded-2xl shadow-lg shadow-cyan-500/30 p-6 text-white max-w-md backdrop-blur-md relative group transition-all duration-300 hover:shadow-purple-500/40 hover:border-purple-400">
      {/* Neon Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-2xl group-hover:opacity-30"></div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-purple-400">{item.title}</h2>

      {/* Markdown-like Content */}
      <div className="prose prose-invert prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: item.content.replace(/\n/g, "<br/>")}}/>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {item.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-black shadow-md">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const {blogs} = useData();
  return (
    <section className="h-fit space-y-5 bg-gradient-to-br from-black via-gray-900 to-black p-24">
      <h1 className="text-4xl py-2 sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text w-fit mx-auto orbitron">Blogs</h1>
      <h2 className="text-2xl font-bold orbitron text-sky-300">#Top Blogs</h2>

      {/* Cards */}
      <div className="min-h-fit rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-8">
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {blogs.map((item) => (<SciFiCard key={item.id} item={item} />))}
        </div>
      </div>

      {/* Show More */}
      <div className="py-10 w-full text-right">
        <a href="/blog" className="text-2xl animate-pulse">   ➤ Show More </a>
      </div>
    </section>
  );
};

export default BlogSection;
