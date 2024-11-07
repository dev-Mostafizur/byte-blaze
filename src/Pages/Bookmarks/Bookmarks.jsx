import React, { useEffect, useState } from 'react';
import { deleteBlog, getBlogs } from '../../Utils';
import BlogCard from '../../Componant/BlogCard/BlogCard';
import EmptyState from '../../Componant/EmptyState/EmptyState';

const Booksmark = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    },[])
    const handleDelete = (id)=>{
        deleteBlog(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }
    if (blogs.length<1) return <EmptyState address={'/blogs'} message={' No Bookmarks Available Here !'} label={'Go To Blogs'}/>

    
    return (
        <>
    	<div className="px-4 sm:px-8 lg:px-12 py-8 grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
                blogs.map(blog=> 
                    <BlogCard key={blog.id} blog = {blog} deletable ={true} handleDelete ={handleDelete}
                ></BlogCard>)
            }
		</div>
        </>
    );
};

export default Booksmark;