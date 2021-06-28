import React from 'react';

const Servicedata = (props) => {
    const { icon, title, desc } = props.service;
    return (
        <div className="col-md-4 text-center p-4 servicedata-card" id={`card${props.index}`}>
            <img src={icon} alt={title} />
            <h5 className="pt-1">{title}</h5>
            <p className="pt-1">{desc}</p>
            <a href="/" className="pt-1">read more</a>
        </div>
    );
};

export default Servicedata;