import React from "react";

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className="card w-9/12 bg-base-100 shadow-xl mx-auto mt-6 mb-6">
      <figure>
        <img
          src={image}
          alt="Food Image"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 bg-pink-700 text-white">${price}</p>
      <div className="card-body text-start">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
       
        <div className="card-actions justify-start">
          <button className="btn btn-outline border-0 border-b-2 border-pink-600 hover:bg-pink-600">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
