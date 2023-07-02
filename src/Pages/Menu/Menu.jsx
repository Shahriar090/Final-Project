import React from 'react';
import {Helmet} from "react-helmet";
import Cover from '../../Shared/Cover/Cover';

const Menu = () => {
    return (
        <div className='pt-16'>
            <Helmet>
                <title>Foodie Panda || Menu</title>
            </Helmet>
          
            <Cover></Cover>
        </div>
    );
};

export default Menu;