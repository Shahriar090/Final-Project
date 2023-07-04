import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({items}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pl-4 pr-4 bg-pink-600 text-white pt-4 pb-4 mb-6">
        {items.map((item) => (
          <MenuItem  item={item}></MenuItem>
        ))}
      </div>
     <div className='text-center lg:text-start ml-5'>
     <Link to='/order'>
      <button className="btn btn-outline border-0 border-b-2 border-pink-600 hover:bg-pink-600">Order Now</button>
      </Link>
     </div>
        </div>
    );
};

export default MenuCategory;