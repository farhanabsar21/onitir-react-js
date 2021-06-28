import React, { useEffect, useState } from 'react';
import blogs from "../../fakeData/blog.json";
import BlogItem from './BlogItem';

const Blog = () => {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        setBlog(blogs)
    }, [])
    return (
        <section className="blog-collection d-flex justify-content-center align-items-center">
            <div className="blog-contents">
                <div className="blog-main-header pb-3 text-center">
                    <h5>blogs</h5>
                    <h2>news feed</h2>
                </div>
                <div className="row">
                    {blog.map((blogItem, index) => <BlogItem blogItem={blogItem} key={index}></BlogItem>)}
                </div>
            </div>
        </section>
    );
};

export default Blog;