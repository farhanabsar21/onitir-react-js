import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faComments } from '@fortawesome/free-solid-svg-icons'
const BlogItem = (props) => {
    const { title, desc, photo, date, comment } = props.blogItem;
    return (
        <div className="col-md-4 blog-main-content">
            <div>
                <div className="blog-content-header d-flex justify-content-between align-items-center py-2 px-4">
                    <h6><FontAwesomeIcon icon={faCalendar} /> {date}</h6>
                    <h6><FontAwesomeIcon icon={faComments} /> {`${comment} comments`}</h6>
                </div>
                <div>
                    <img src={photo} alt={title} className="img-fluid"/>
                </div>
            </div>
            <div className="p-4 text-center">
                <h5>{title}</h5>
                <p>{desc}</p>
                <a href="/">read more</a>
            </div>
        </div>
    );
};

export default BlogItem;