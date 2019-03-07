import React from "react";

const Recipe = ({
  recipe: {
    label,
    url,
    image,
    ingredientLines,
    dietLabels,
    calories,
    totalTime
  },
  props
}) => {
  const cal = parseInt(calories, 10);
  let dietaryLabels = dietLabels.join(",");
  console.log(dietaryLabels);
  return (
    <div>
      <div className="custom-recipe-box">
        <div className="recipe-image-container">
          <img src={image} alt="sample-recipe" />
        </div>
        <div className="recipe-item-specs">
          <h1>{label}</h1>
          <hr />

          <h3>{dietaryLabels}</h3>
        </div>
        <div className="recipe-info-container">
          <p className="info-items time">{totalTime} min</p>
          <p className="info-items calorie">{cal} cal</p>
        </div>
        {/* <hr /> */}
        <div className="btn-container">
          <button className="recipe-card-btn"> View Recipe</button>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <div className="recipe-box">
  //       <a href={url}>
  //         <img src={image} alt="recipe" />
  //       </a>
  //       <div>
  //         <h1>{label}</h1>
  //         <p>Time: {totalTime} mins</p>
  //       </div>
  //       <div>
  //         <ul className="ingredient-lister">
  //           {ingredientLines.map(ingredient => (
  //             <li key={ingredient}>{ingredient}</li>
  //           ))}
  //         </ul>
  //       </div>
  //       <div>
  //         <h3>Calories:{calories}</h3>
  //       </div>
  //       <a href={url}>View more</a>
  //     </div>
  //   </div>
  // );
};

export default Recipe;
