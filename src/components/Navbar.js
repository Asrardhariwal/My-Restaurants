import React from "react";
const Navbar = ({ filterData, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((items) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterData(items)}
              >
                {items}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
