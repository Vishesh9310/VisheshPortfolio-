import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

const Blog: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const {blogs} = useData();

  const blog = blogs.find((b)=> b.id === Number(id));
  if(!blog){
    return <div className="pt-20">Blog not found</div>
  }
  
  return (
    <div className="pt-20 text-center w-full space-y-10 p-[5%]">
      <h1 className="md:3xl lg:text-4xl san-serif w-full text-center">{blog.title}</h1>
      <img src={blog.img} alt="" className="w-fit mx-auto"/>
      <p className="text-sm float-left p-3 blog-box rounded-lg">{blog.cat}</p>
      <div className="prose prose-lg w-full px-[10%] text-xl italic" dangerouslySetInnerHTML={{ __html: blog.content }} />
      <div className="mt-4">
        <span className="font-semibold">Tags: </span>
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block blog-box px-2 py-1 text-sm rounded mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Blog;
