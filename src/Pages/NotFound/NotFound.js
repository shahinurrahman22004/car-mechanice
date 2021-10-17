import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img className="w-100" src={notFound} alt="" />
            <Link><button to="/">Go Back</button></Link>
        </div>
    );
};

export default NotFound;