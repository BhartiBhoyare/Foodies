import "./App.css";
import Content from "./components/Content.js";
import { Route, Routes } from "react-router-dom";
import RecipeInfo from "./components/RecipeInfo.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Content />
      }/><Route path="/:idMeal" element={<RecipeInfo/>}/>

    </Routes>
  );
}

export default App;
