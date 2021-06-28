import React, { useEffect, useState } from 'react';
import employees from "../../fakeData/employee.json"
import Empl from './Empl';

const CeoCollection = () => {
    const [employee, setEmployee] = useState([])
    useEffect(()=> {
        setEmployee(employees)
    }, [])    
    return (
        <div className="mt-5">
            <div className="row">
                {employee.map((empl, index) => <Empl empl={empl} key={index}></Empl>)}
            </div>
        </div>
    );
};

export default CeoCollection;