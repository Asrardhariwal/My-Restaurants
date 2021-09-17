import React, { useState } from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
const uniqueList = [
  ...new Set(
    Menu.map((cat) => {
      return cat.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterData = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((item) => {
      return item.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterData={filterData} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
