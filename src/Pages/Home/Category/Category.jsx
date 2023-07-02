// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";

// const Category = () => {
//   return (
//     <div className="pb-6">
//         <Swiper
//       slidesPerView={3}
//       centeredSlides={true}
//       spaceBetween={10}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[Pagination]}
//       className="mySwiper"
//     >
//       <SwiperSlide>
//         <img src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" alt="" />
//         <h3 className="text-xl lg:text-4xl text-center text-white -mt-12 lg:-mt-20">Combo Pack 1</h3>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://media.istockphoto.com/id/1270926130/photo/plated-chicken-roast-dinner-on-white-plate-with-carrot-and-morel-mushroom.jpg?s=612x612&w=0&k=20&c=W3_rbXE511zBJHQKrPy8gOSZW4CmOzyB-7LnyOkints=" alt="" />
//         <h3 className="text-xl lg:text-4xl text-center text-white -mt-12 lg:-mt-20">Combo Pack 1</h3>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=vrMzS4pY_QjiDtCzpVE3ClKqbU636fb4CKH0nlsduC4=" alt="" />
//         <h3 className="text-xl lg:text-4xl text-center text-white -mt-12 lg:-mt-20">Combo Pack 1</h3>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://media.istockphoto.com/id/854565540/photo/close-up-of-home-made-burgers.jpg?s=612x612&w=0&k=20&c=sbRJh-Y7hbQmwGuNCMWYgyFmxpkZc1Lrq0jzlnTLf4Q=" alt="" />
//         <h3 className="text-xl lg:text-4xl text-center text-white -mt-12 lg:-mt-20">Combo Pack 1</h3>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://media.istockphoto.com/id/1220390518/photo/vegan-super-sandwich-served-with-sprouts.jpg?s=612x612&w=0&k=20&c=4FZnOUS7CmlPonqfvLml_vbt6Lm31koKmKYkR65B6sw=" alt="" />
//         <h3 className="text-xl lg:text-4xl text-center text-white -mt-12 lg:-mt-20">Combo Pack 1</h3>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://media.istockphoto.com/id/1171688448/photo/arugula-beet-and-cheese-salad-with-fresh-radicchio-and-walnuts-on-plate-with-fork-dressing.jpg?s=612x612&w=0&k=20&c=I2W5DbNrfrll3vt_9L5ER26zoFJue0-DVSSFIXMUTns=" alt="" />
//         <h3 className="text-xl lg:text-4xl text-center text-white -mt-12 lg:-mt-20">Combo Pack 1</h3>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://media.istockphoto.com/id/175409166/photo/lamb-and-aparagus.jpg?s=612x612&w=0&k=20&c=kv2J_iNLSW3I_4717-zTJCWW1fLj2jFd-aGYdczoUPM=" alt="" />
//         <h3 className="text-xl lg:text-4xl text-center text-white -mt-12 lg:-mt-20">Combo Pack 1</h3>
//       </SwiperSlide>

//       <SwiperSlide>
//         <img src="https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.jpg?s=612x612&w=0&k=20&c=QbFk2SfDb-7oK5Wo9dKmzFGNoi-h8HVEdOYWZbIjffo=" alt="" />
//         <h3 className="text-xl lg:text-4xl text-center text-white -mt-12 lg:-mt-20">Combo Pack 1</h3>
//       </SwiperSlide>

//       <SwiperSlide>
//         <img src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M=" alt="" />
//         <h3 className="text-xl lg:text-4xl text-center text-white -mt-12 lg:-mt-20">Combo Pack 1</h3>
//       </SwiperSlide>
//     </Swiper>
//     </div>
//   );
// };

// export default Category;

import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import Marquee from "react-fast-marquee";

const Category = () => {
  return (
    <section className="w-9/12 mx-auto">
      <SectionTitle heading={'Order Online'} subHeading={'From 11:00am To 10:00pm'}></SectionTitle>

      <Marquee pauseOnHover>
      <div className="">
      <div className="carousel rounded-box gap-3">
        <div className="carousel-item w-[200px] h-[200px]">
          <img
            src="https://media.istockphoto.com/id/692557700/photo/burger.jpg?s=612x612&w=0&k=20&c=8ajzPWqvrLvl779OI3XMFR_tZV5V-7VSDlSeaX47Uhk="
            alt="Burger"
          />
        </div>
        <div className="carousel-item  w-[200px] h-[200px]">
          <img
            src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98="
            alt="Burger"
          />
        </div>
        <div className="carousel-item  w-[200px] h-[200px]">
          <img
            src="https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60="
            alt="Burger"
          />
        </div>
        <div className="carousel-item  w-[200px] h-[200px]">
          <img
            src="https://media.istockphoto.com/id/1312283557/photo/classic-thai-food-dishes.jpg?s=612x612&w=0&k=20&c=9Y0NBylnjNiNl6EkK6XabETzj3tHnHOQWwVk-6iUE_I="
            alt="Burger"
          />
        </div>
        <div className="carousel-item  w-[200px] h-[200px]">
          <img
            src="https://media.istockphoto.com/id/1175505781/photo/arabic-and-middle-eastern-dinner-table-hummus-tabbouleh-salad-fattoush-salad-pita-meat-kebab.jpg?s=612x612&w=0&k=20&c=N4PkdbA7Bf-WNKf2VRNz9mtZP4sxrdcsMwZ7P981ZIY="
            alt="Burger"
          />
        </div>
        <div className="carousel-item  w-[200px] h-[200px] ">
          <img
            src="https://media.istockphoto.com/id/1403973419/photo/table-top-of-food-spread-on-table.jpg?s=612x612&w=0&k=20&c=2cROUMurZUtuvqF-bp8lViZ0wDXBNkZBcIjQj2QQlec="
            alt="Burger"
          />
        </div>
        <div className="carousel-item  w-[200px] h-[200px]">
          <img
            src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
            alt="Burger"
          />
        </div>
      </div>
    </div>

      </Marquee>
    </section>
  );
};

export default Category;
