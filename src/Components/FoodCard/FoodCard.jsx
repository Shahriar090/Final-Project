import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const handleAddToCart = (item)=>{
      console.log(item);
      if(user && user.email){
        const cartItem = {menuItemId : _id, name, image, price, email:user.email}
        fetch('http://localhost:5000/carts',{
          method : 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(cartItem)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food Added On The Cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please Login First To Order The Food',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Login'
        }).then((result) => {
          if (result.isConfirmed) {
          navigate('/login',{state:{from:location}})
          }
        })
      }

    }
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
       
        <div onClick={()=> handleAddToCart(item)} className="card-actions justify-start">
          <button  className="btn btn-outline border-0 border-b-2 border-pink-600 hover:bg-pink-600">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
