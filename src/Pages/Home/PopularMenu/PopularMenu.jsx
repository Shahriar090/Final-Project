import SectionTitle from "../../../Components/SectionTitle";

import MenuItem from "../../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
  const [_id, setId] = useState(null);
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-6">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pl-4 pr-4">
        {popular.map((item) => (
          <MenuItem key={_id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
