import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import PlacceHolderImage from "../../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDelete}) => {
  const { title, description, cover_image, published_at, id } = blog;

  return (
    <div className="flex relative">
      
        <Link
          to={`/blogs/${id}`}
          rel="noopener noreferrer"
          className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 "
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500"
            src={cover_image || PlacceHolderImage}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {" "}
              {title}
            </h3>
            <span className="text-xs text-gray-400">
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>
       {
		deletable && <div  onClick={() => handleDelete(blog.id)}
		 className='bg-primary p-3 ml-5 rounded-full hover:bg-secondary group  cursor-pointer hover:scale-105 absolute -top-5 -right-5'>
			<MdDeleteForever
            size={20}
            className='text-secondary group-hover:text-primary'
          />
		</div>
	   }
    </div>
  );
};
// Define PropTypes
BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
  deletable: PropTypes.bool,
  handleDelete: PropTypes.func,
};

// Define default props with default parameters
BlogCard.defaultProps = {
  deletable: false,
};
export default BlogCard;
