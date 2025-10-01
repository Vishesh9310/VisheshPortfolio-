import React from "react";
import { type Blog } from "../../types/dataTypes";
import { useData } from "../../context/DataContext";
import { Link } from "react-router-dom";

const SciFiCard: React.FC<{ item: Blog }> = ({ item }) => {
  return (
    <Link
      to={`blog/${item.id}`}
      className="relative group max-w-md w-full border border-cyan-500/50 rounded-2xl shadow-lg shadow-cyan-500/30 p-4 sm:p-6 backdrop-blur-md transition-all duration-300 hover:shadow-purple-500/40 hover:border-purple-400"
    >
      {/* Neon Border Glow */}
      <div className="absolute blog-body inset-0 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30"></div>

      {/* Title */}
      <h2 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-purple-500">{item.title}</h2>

      <img src={item.img} alt={item.title} className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4" />

      {/* Markdown-like Content */}
      <div
        className="prose prose-invert prose-sm sm:prose base max-w-none"
        dangerouslySetInnerHTML={{ __html: item.content.replace(/\n/g, "<br/>") }}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {item.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-black shadow-md"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

const BlogSection: React.FC = () => {
  const { blogs } = useData();
  const topFourData = blogs.slice(0, 3);

  return (
    <section className="h-fit space-y-5 blogs-body p-6 sm:p-12 md:p-16 lg:p-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text w-fit mx-auto orbitron">
        Blogs
      </h1>
      <h2 className="text-xl sm:text-2xl font-bold orbitron">#Top Blogs</h2>

      {/* Cards */}
      <div className="min-h-fit rounded-3xl blogs-body flex items-center justify-center p-4 sm:p-8">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-1 lg:grid-cols-3 w-full max-w-7xl">
          {topFourData.map((item) => (
            <SciFiCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Show More */}
      <div className="py-6 sm:py-10 w-full text-right">
        <a href="/blogs" className="text-xl sm:text-2xl animate-pulse">
          ➤ Show More
        </a>
      </div>
    </section>
  );
};

export default BlogSection;

// import React from "react";
// import { type Blog } from "../../types/dataTypes";
// import { useData } from "../../context/DataContext";
// import { Link } from "react-router-dom";

// const SciFiCard: React.FC<{ item: Blog }> = ({ item }) => {
//   return (
//     <Link to={`blog/${item.id}`} className=" border border-cyan-500/50 rounded-2xl shadow-lg shadow-cyan-500/30 p-6 max-w-md backdrop-blur-md relative group transition-all duration-300 hover:shadow-purple-500/40 hover:border-purple-400">
//       {/* Neon Border Glow */}
//       <div className="absolute blog-body inset-0 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30"></div>

//       {/* Title */}
//       <h2 className="text-xl font-bold mb-3 group-hover:text-purple-500">{item.title}</h2>

//       <img src={item.img} alt="" />
//       {/* Markdown-like Content */}
//       <div className="prose prose-invert prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: item.content.replace(/\n/g, "<br/>")}}/>

//       {/* Tags */}
//       <div className="flex flex-wrap gap-2 mt-4">
//         {item.tags.map((tag, index) => (
//           <span key={index} className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-black shadow-md">
//             #{tag}
//           </span>
//         ))}
//       </div>
//     </Link>
//   );
// };

// const BlogSection: React.FC = () => {
//   const {blogs} = useData();
//   const topFourData = blogs.slice(0,3);

//   return (
//     <section className="h-fit space-y-5 blogs-body p-24">
//       <h1 className="text-4xl py-2 sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text w-fit mx-auto orbitron">Blogs</h1>
//       <h2 className="text-2xl font-bold orbitron">#Top Blogs</h2>

//       {/* Cards */}
//       <div className="min-h-fit rounded-3xl blogs-body flex items-center justify-center p-8">
//         <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
//           {topFourData.map((item) => (<SciFiCard key={item.id} item={item} />))}
//         </div>
//       </div>

//       {/* Show More */}
//       <div className="py-10 w-full text-right">
//         <a href="/blogs" className="text-2xl animate-pulse">   ➤ Show More </a>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;
