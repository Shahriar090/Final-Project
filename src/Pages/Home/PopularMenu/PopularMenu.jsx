import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';

import MenuItem from '../../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    const [_id, setId] = useState(null);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=> item.category === 'popular');
            setMenu(popularItems);
            setId(popularItems[0].id);
        })
    },[])
    return (
        <section className='mb-6'>
            <SectionTitle heading={'From Our Menu'} subHeading={'Popular Items'}></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pl-4 pr-4'> 
                {
                   menu.map(item=> <MenuItem
                   key={_id}
                   item={item}
                   ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;