import React from 'react'
import { MenuList } from "../helper/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div>
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Menu
