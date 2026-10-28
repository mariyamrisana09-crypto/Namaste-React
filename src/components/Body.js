
import RestuarentCard from "../components/RestuarentCard";
import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filteredListRestaurant, setFilteredListRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.347925682214228&lng=75.7542722672224&collection=83661&tags=layout_CCS_Desserts&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    );

    const json = await data.json();

    setlistofRestaurant(
      json?.data?.cards?.filter((restaurent) => restaurent.card?.card?.info)
    );
    setFilteredListRestaurant(
         json?.data?.cards?.filter((restaurent) => restaurent.card?.card?.info)
    )
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
              const rating =
                res.card?.avgRating ?? res.card?.card?.info?.avgRating;
              return rating > 4.3;
            });
            setFilteredListRestaurant(filteredRestaurant);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="card-container-body">
        {filteredListRestaurant.map((restuarent) => (
          <RestuarentCard
            key={restuarent.card?.card?.info?.id}
            resData={restuarent}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
