
import {resLists} from "../utils/mockData"
import RestuarentCard from "../components/RestuarentCard";
import {useState,useEffect} from "react";

const Body = () => {
    const [listofRestaurant,setlistofRestaurant]=useState(resLists);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.347925682214228&lng=75.7542722672224&collection=83661&tags=layout_CCS_Desserts&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );

        const json=await data.json();
        console.log(json.data.cards[4]);
        setlistofRestaurant(
            json?.data?.cards
            ?.filter((restaurent)=> restaurent.card?.card?.info));
    }

    return (
        <div className="body">
            <div className="search-bar">
             
                <button className="filter-button"
                onClick={()=> {
                    const filteredRestaurant=listofRestaurant.filter((res)=>{
                        return (res.card.avgRating > 4);
                    });
                    setlistofRestaurant(filteredRestaurant);
                }}>Top Rated Restaurent</button>
            </div>
            <div className="card-container-body">
                {
                    listofRestaurant.map((restuarent)=>(
                        <RestuarentCard key={restuarent.card.id || restuarent.card?.card?.info?.id} resData={restuarent} />
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Body;