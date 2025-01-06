import React from "react";
import { NavLink } from "react-router-dom";

const Meals = ({ detail }) => {
  // console.log({ detail });
  return (
    <div className="flex flex-wrap gap-6 justify-center p-10 font-bold">
      {!detail
        ? "Data Not Found"
        : detail.map((curItem) => {
            return (
              <div>
                <div className="border-2 border-orange-200 shadow-xl shadow-gray-200 rounded-xl place-items-center">
                  <img
                    className="h-64 rounded-xl"
                    src={curItem.strMealThumb}
                    alt=""
                  />
                  <div className="text-black font-bold py-3 px-4">{curItem.strMeal}</div>
                  <NavLink to={`/${curItem.idMeal}`}>
                    <button className="bg-orange-500 text-white font-bold shadow-lg shadow-orange-200 px-6 py-2 mb-4 rounded-full hover:bg-orange-600">
                      Show Recipe
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Meals;
