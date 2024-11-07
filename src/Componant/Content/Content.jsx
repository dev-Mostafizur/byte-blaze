import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import PlacceHolderImage from "../../assets/404.jpg";
import Markdown from 'react-markdown';
// import remarkParse from 'remark-parse';
import rehypeRaw from 'rehype-raw';


const Content = () => {
  const blog = useLoaderData();
  const { title, description, cover_image, published_at, tags, body_html, url } = blog;
  return (
    <>
      <div
        rel="noopener noreferrer"
        className=" mx-auto group p-2  focus:no-underline bg-synthwave   border-opacity-30 "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || PlacceHolderImage}
        />
        <div className="p-6 space-y-2">
          <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </a>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
          {tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dbg-violet-600 text-gray-50"
            >
              #{tag}
            </a>
          ))}
        </div>
        <div>
      <h3 className="text-xl font-semibold underline">  {title}</h3>
          <Markdown rehypePlugins={[rehypeRaw]}  className="overflow-y-hidden" >
          {body_html}
          </Markdown>
      </div>
      </div>
      
    </>
  );
};

export default Content;
