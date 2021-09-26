import React, { useState } from 'react';
import Menu from './component/Basic/Menu';
import MenuCard from './component/Basic/MenuCard';
import Navbar from './component/Basic/Navbar';

const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})), "ALL",];
// console.log(uniqueList)


export const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);     //also can use React.useState(Menu) instead of writing {useState}
    const filterItem = (category1) => {
        if (category1 === "ALL") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category1;
        })
        setMenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};
