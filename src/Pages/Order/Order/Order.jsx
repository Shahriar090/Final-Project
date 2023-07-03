import React, { useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../Components/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../Hooks/UseMenu";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = UseMenu();
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="pt-20">
      <Helmet>
        <title>Foodie Panda || Order</title>
      </Helmet>
      <SectionTitle
        heading={"Order your food"}
        subHeading={"Best Taste In Town"}
      ></SectionTitle>
 <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
    
  </TabList>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
    </div>
  );
};

export default Order;
