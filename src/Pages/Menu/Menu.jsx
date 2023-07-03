import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import UseMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="pt-16">
      <Helmet>
        <title>Foodie Panda || Menu</title>
      </Helmet>

      <Cover></Cover>
      <SectionTitle heading={"Todays Offer"} subHeading={"Don't Miss"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts  */}
      <SectionTitle heading={'Dessert Items'} subHeading={'Enjoy Our Special'}></SectionTitle>
      <MenuCategory items={desserts} title={'Desserts'}></MenuCategory>
      {/* soup */}
      <SectionTitle heading={'Soups'} subHeading={'Enjoy Special'}></SectionTitle>
      <MenuCategory items={soup}></MenuCategory>
      {/* salad */}
      <SectionTitle heading={'Salads'} subHeading={'Enjoy Healthy'}></SectionTitle>
      <MenuCategory items={salad}></MenuCategory>
      {/* pizza */}
      <SectionTitle heading={'Pizzas'} subHeading={'Best In Town'}></SectionTitle>
      <MenuCategory items={pizza}></MenuCategory>
    </div>
  );
};

export default Menu;
