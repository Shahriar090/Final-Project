import React, { useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../Components/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../Hooks/UseMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  // const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  // const {category} = useParams();
  // const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = UseMenu();
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="pt-20 ">
      <Helmet>
        <title>Foodie Panda || Order</title>
      </Helmet>
      <SectionTitle
        heading={"Order your food"}
        subHeading={"Best Taste In Town"}
      ></SectionTitle>
    <div className="text-center  font-semibold bg-pink-600 mb-5">
    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
    
  </TabList>
  <TabPanel>
    <OrderTab items={salad}></OrderTab>
  </TabPanel>

  <TabPanel>
    <OrderTab items={pizza}></OrderTab>
  </TabPanel>

  <TabPanel>
    <OrderTab items={soup}></OrderTab>
  </TabPanel>

  <TabPanel>
    <OrderTab items={desserts}></OrderTab>
  </TabPanel>

  <TabPanel>
    <OrderTab items={drinks}></OrderTab>
  </TabPanel>
</Tabs>
    </div>
    </div>
  );
};

export default Order;
