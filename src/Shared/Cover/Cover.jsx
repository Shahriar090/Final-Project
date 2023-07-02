import React from "react";


const Cover = () => {
  return (
    <div
      className="hero min-h-screen bg-fixed bg-cover "
      style={{backgroundImage: "url(https://media.istockphoto.com/id/936610098/photo/spaghetti-bolognese.webp?b=1&s=170667a&w=0&k=20&c=uPs-Y9Fu99d19hAyXNrnOH7BktsvHyTqGfU0Yb2m2bE=)"}}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl lg:text-5xl font-bold  uppercase">Our Menu</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Cover;
