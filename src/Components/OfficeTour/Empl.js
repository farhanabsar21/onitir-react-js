import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Empl = (props) => {
    const { name, role, photo } = props.empl;
    return (
        <div className="col-md-2 employee-data">
            <div>
                <img src={photo} alt={name} />
            </div>
            <div className="employee-info">
                <h6>{name}</h6>
                <small><strong>{role}</strong></small>
            </div>
            <div>
                <button><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
};

export default Empl;