import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { APP_RESTAURANT_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";
import { RESTAURANT_IMG } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  {
    console.log(resId);
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(APP_RESTAURANT_MENU + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  console.log("itemC : ", itemCards);
  const {
    name,
    city,
    cloudinaryImageId,
    avgRating,
    cuisines,
    costForTwoMessage,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  return resInfo === null ? <Shimmer /> : (
    <div className="restaurant-menu-container">
      
      <div>
        <h1> {name} </h1>
        <img
          className="restaurent-menu-img"
          src={RESTAURANT_IMG + cloudinaryImageId}
        />
        <div>
            <h2>Menu</h2>
          <ul>
            {itemCards?.map((item) => (
              <li key={item.card.info.id}> {item.card.info.name} </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default RestaurantMenu;
