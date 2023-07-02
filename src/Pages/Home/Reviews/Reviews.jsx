import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
  return (
    <section className="my-20">
      <SectionTitle
        heading={"Reviews"}
        subHeading={"What Out Client Says"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        <div>
            {
                reviews.map(review=>  <SwiperSlide
                key={review._id}
                >
                    <div className="m-24">
                                      <p className="text-center">{review.details}</p>
                        <h3 className="text-2xl text-orange-500 text-center"> {review.name}</h3>
                    </div>

                </SwiperSlide>)
            }
        </div>
      </Swiper>
    </section>
  );
};

export default Reviews;
