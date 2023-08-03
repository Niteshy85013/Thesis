import { Input } from "antd";
import React from "react";
import "./Banner";
import "./Home.css";
const categories = [
  {
    name: "Mobile Application",
    value: "Mobile Application",
  },
  {
    name: "Web Development",
    value: "Web Development",
  },
  {
    name: "Graphics & Design",
    value: "Graphics & Design",
  },
  {
    name: "Digital Marketing",
    value: "Digital Marketing",
  },
  {
    name: "Game Development",
    value: "Game Development",
  },
  {
    name: "Photography",
    value: "Photography",
  },
];

function Filters({ filters, setFilters }) {
  const handleCheckboxChange = (categoryValue, checked) => {
    if (checked) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        category: [...prevFilters.category, categoryValue],
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        category: prevFilters.category.filter((item) => item !== categoryValue),
      }));
    }
  };

  return (
    <div className=" cat  bg-white  rounded ">
      <div className="w-full flex flex-col">
        <div className="flex flex-row gap-1 mt-2">
          <h3 className="text-gray-600 ms-5">Geners</h3>
          <div className="flex flex-row gap-5 mx-5">
            {categories.map((category) => (
              <div className="flex items-center gap-2" key={category.value}>
                <Input
                  type="checkbox"
                  name="category"
                  className="max-width"
                  checked={filters.category.includes(category.value)}
                  onChange={(e) =>
                    handleCheckboxChange(category.value, e.target.checked)
                  }
                />
                <label htmlFor={category.value}>{category.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
