import SectionTitle from "../../../Components/SectionTitle";

import MenuItem from "../../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";
import { useState } from "react";

const PopularMenu = () => {
  const [_id, setId] = useState(null);
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-6  bg-pink-600 text-white">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pl-4 pr-4">
        {popular.map((item) => (
          <MenuItem key={_id} item={item}></MenuItem>
        ))}
      </div>
     <div className="text-center">
     <button className='btn btn-outline  border-white hover:bg-pink-600 mt-5 mb-4 text-white'>View Full Menu</button>
     </div>
    </section>
  );
};

export default PopularMenu;
