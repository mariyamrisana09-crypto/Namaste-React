
import RestuarentCard from "../components/RestuarentCard";
import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";
import {CDN_URL_RESTAURANT_LIST} from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filteredListRestaurant, setFilteredListRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch( CDN_URL_RESTAURANT_LIST );

    const json = await data.json();

    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
    
    setlistofRestaurant(restaurants )
    
    setFilteredListRestaurant(restaurants )
    
  };

  return listofRestaurant.length === 0 ?( <Shimmer /> ): (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          className="search-input-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="seach-button" onClick={()=>{
            const filteredRestaurant=listofRestaurant.filter((res)=>{
               const name= res.card?.name??res.card?.card?.info?.name;
                 console.log("Restaurant name:", name);
               return (name ?? "").toLowerCase().includes(searchText.toLowerCase())
                
            })
            setFilteredListRestaurant(filteredRestaurant);
            
        }}>Search</button>

        <button
          className="filter-button"
          onClick={() => {
            const filteredRestaurant = listofRestaurant.filter((res) => {
              // const rating =
              //   res.card?.avgRating ?? res.card?.card?.info?.avgRating;
              // return rating > 4.3;
              console.log(res.info.id)
            });
            setFilteredListRestaurant(filteredRestaurant);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="card-container-body">
        {filteredListRestaurant.map((restuarent) => (
          <Link className="body-card-link" key={restuarent.info?.id} to={"/restaurents/"+restuarent.info?.id}>
            <RestuarentCard resData={restuarent} />
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
