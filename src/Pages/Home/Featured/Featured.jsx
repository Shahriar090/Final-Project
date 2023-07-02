import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import './Featured.css';

const Featured = () => {
    return (
       <>
       <SectionTitle heading={'featured items'} subHeading={'Check It Out'}></SectionTitle>
        <div className='featured-item bg-no-repeat bg-cover  bg-fixed'>
            
            <div className='md:flex items-center justify-center bg-slate-400 bg-opacity-30 pl-12 pr-12 pt-8 pb-8'>
            <div className=''>
                <img  src="https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.webp?b=1&s=170667a&w=0&k=20&c=CPnBJAsLv6e8ZE1DP_z0zP1uRk2adI-aeQQuPSsK8QU=" alt="" />
            </div>
            <div className='ml-10 text-white'>
                <p className='text-xl'>September 20, 2023</p>
                <p className='uppercase font-semibold'>Where can i get some?</p>
                <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br></br> Odit doloremque saepe sed reiciendis ex exercitationem<br></br> eius obcaecati ipsam eligendi sit dignissimos numquam itaque,<br></br> facilis veniam magni nihil nesciunt autem impedit.</p>
                <button className='btn btn-outline border-0 border-b-2 mt-4 text-white'>Order Now</button>
            </div>
            </div>
        </div>
       </>
    );
};

export default Featured;