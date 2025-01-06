import React, { useState } from "react";
import Meals from "./Meals";

const Content = () => {

  const [search, setSearch] = useState();
  const [data, setData] = useState();
  const [msg, setMsg] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const myFun = async () => {
    if (search === "") {
      setMsg("Please Enter Recipe")
    }else{
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData = await get.json();
      // console.log(jsonData.meals);
      setData(jsonData.meals);
      setMsg("")
    }
  };
  // console.log(data);

  return (
    <>
      <div className="navbar flex justify-center text-6xl font-bold text-orange-300 px-20 pt-4 border-b-2 border-gray-200 w-full pb-6">
        <span className="text-orange-500">Fo</span>
        <span className="text-orange-700 underline decoration-orange-700">
          odi
        </span>
        <span className="text-orange-900">es</span>
      </div>
      <div className="flex justify-center items-center gap-4 mt-6">
        <form className="flex items-center shadow-lg shadow-gray-200 mt-3 border-2 border-orange-200 rounded-lg px-4 py-1 font-sans text-base text-black">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Recipe"
            onChange={handleInput}
            aria-label="Search"
          />
        </form>
        <button
          onClick={myFun}
          className="mt-3 cursor-pointer shadow-lg shadow-gray-200 bg-orange-500 text-white font-bold py-[0.35rem] px-5 rounded-lg hover:bg-orange-600"
        >
          Search
        </button>
        <h4 className="mt-3 font-semibold">{msg}</h4>
      </div>
      <Meals className = "h-screen" detail = {data}/>
    </>
  );
};

export default Content;
