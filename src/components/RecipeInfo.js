import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { SiYoutube } from "react-icons/si";

const RecipeInfo = () => {
  const { idMeal } = useParams();
  const [info, setInfo] = useState();
  // console.log(idMeal);

  const getRecipe = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const jsonData = await get.json();
    // console.log(jsonData.meals[0]);
    setInfo(jsonData.meals[0]);
  };

  if (info !== "") {
    getRecipe();
  }
  return (
    <div>
      {!info ? (
        "Data Not Found"
      ) : (
        <div className="flex flex-row p-10">
          <img className="h-96 rounded-xl" src={info.strMealThumb} alt="" />
          <div className="mt-2 mx-8 font-serif">
            <div className="bg-orange-500 inline px-5 py-2 text-white font-bold rounded-lg shadow-lg shadow-orange-200 text-lg">
              {info.strMeal}
            </div>
            <div className="bg-orange-200 rounded-lg p-4 mt-6">
              <div className="flex flex-row ml-1 font-semibold text-orange-800">
                <p className="bg-orange-500 text-white py-1 px-3 rounded-md">
                  <span>Food Area: </span>
                  {info.strArea}
                </p>
                <p className="ml-4 bg-orange-500 text-white py-1 px-3 rounded-md">
                  <span>Food Category: </span>
                  {info.strCategory}
                </p>
              </div>
              <div className="ml-2 mt-3">
                <h3 className="text-base font-bold">Ingrediant's</h3>
                <div className="flex flex-wrap text-white">
                {Array.from(
                  { length: 20 },
                  (_, i) =>
                    info[`strIngredient${i + 1}`] && (
                      <p className="bg-orange-500 my-1 mr-2 py-1 px-2 rounded-lg " key={i}>
                        {info[`strIngredient${i + 1}`]}:{" "}
                        {info[`strMeasure${i + 1}`]}{" "}
                      </p>
                    )
                )}
                </div>
              </div>
              <h3 className="my-4 font-bold ml-2 text-lg">Instruction's</h3>
              <p className="ml-2">{info.strInstructions}</p>
              <p className="ml-2 mt-6 flex flex-row items-center text-blue-600 cursor-pointer">
                <span className="mr-4">
                  <SiYoutube className="text-red-600" />{" "}
                </span>
                {info.strYoutube}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeInfo;
