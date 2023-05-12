import React, { useState } from "react";

import './BlogLists.css';

import img from "../../assets/img/img.png";

import img_blog from "../../assets/img/img_blog.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark, faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

const BlogLists = () => {

    const [Blogs, setBlogs] = useState([{ 'username': 'John DeVore', 'title': 'Why I Support The WGA Strike', 'detail': 'This isn’t a Hollywood story — it’s about the future of work, too', },
    { 'username': 'Mohit Bhavsar', 'title': 'Development is necessary!', 'detail': ' a placeholder text commonly used in the design and typesetting industry.', },
    { 'username': 'Pamu Nana', 'title': 'React Developer Salary!', 'detail': 'React is widely used for building user interfaces, particularly for single-page applications.', },]);

    const handleDelete = (index) => {
        const updatedBlogs = [...Blogs];
        updatedBlogs.splice(index, 1);
        setBlogs(updatedBlogs);
    };
    return (
        <>
            <div>

                <h1 className="margin-bottom-50">blog lists</h1>


                <div >
                    <ul>
                        {Blogs.map((Blog, index) => (
                            <li key={index} >
                                <div className="column width margin-bottom-30">
                                    <div className="row-container">

                                        <div className="circular-image-container">
                                            <img
                                                className="circular-image"
                                                src={img}
                                                alt="Circular Image"
                                            />
                                        </div>

                                        <div className="blogger-name">

                                            {Blog.username}
                                        </div>

                                    </div>

                                    <div className="margin-top-5">
                                        <div className="blog-header">
                                            {Blog.title}
                                        </div>

                                        <div className="blog-description">

                                            {Blog.detail}
                                        </div>
                                    </div>

                                    <div className="margin-top-15">
                                        <div className="row-container greycolor">

                                            <div className="margin-right">
                                                May 5
                                            </div>

                                            <div className="negative-margin-top margin-right">
                                                .
                                            </div>

                                            <div className="margin-right">
                                                6 min read
                                            </div>

                                            <div className="negative-margin-top margin-right">
                                                .
                                            </div>

                                            <div className="margin-right blog-topic">
                                                Labor
                                            </div>

                                            <div className="margin-top margin-right">
                                                <FontAwesomeIcon icon={faStar} style={{ color: "#ded935" }} />
                                            </div>

                                            <div className="margin-top align-right">
                                                <FontAwesomeIcon icon={faBookmark} style={{ color: "#35A9DE" }} />
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="column blog-img">
                                    <img className="blog-img"
                                        // className="circular-image"
                                        src={img_blog}
                                        alt="Circular Image"
                                    />
                                </div>
                                <div className="column blog-img">

                                    <button type="submit" class="btn btn-danger" onClick={() => handleDelete(index)}>Remove Blog</button>
                                </div>



                            </li>
                        ))}




                    </ul>
                </div>



            </div>
        </>
    )
}

export default BlogLists;