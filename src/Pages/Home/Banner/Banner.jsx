import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className=' w-9/12 mx-auto pt-24'>
            <div className='text-center '>
            <Carousel infiniteLoop interval={3000}>
                <div>
                    <img src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.webp?b=1&s=170667a&w=0&k=20&c=5ILrVMh-eEmeUi-Qk8KU9vAC3PXbSX6nFTIcs-Sc56s=" />
                    
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1093661558/photo/indian-dish-chicken-tikka-masala.webp?b=1&s=170667a&w=0&k=20&c=SrSBYys6FSaFnmyCL_qcCSIrm3JykV6NBJZcb2GJt-4=" />
                
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/639389404/photo/authentic-indian-food.webp?b=1&s=170667a&w=0&k=20&c=Ae3RLr6jG3nabjcGwT8pwvnEtjO34_XOH0SaoZk8hNM=" />
                    
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/692557700/photo/burger.jpg?s=612x612&w=0&k=20&c=8ajzPWqvrLvl779OI3XMFR_tZV5V-7VSDlSeaX47Uhk=" />
                    
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/899907172/photo/baked-tasty-margerita-pizza-near-oven.jpg?s=612x612&w=0&k=20&c=r3J2p-ixkOCZG2VejNxN-CvMHnQhhkOSSh0C9fStV0g=" />
                    
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default Banner;